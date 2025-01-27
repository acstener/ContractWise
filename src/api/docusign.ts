import docusign from 'docusign-esign';
import fs from 'fs';
import path from 'path';

const SCOPES = ['signature'];

interface SigningUrlRequest {
  templateId: string;
  email: string;
  name: string;
}

class DocuSignAPI {
  private dsApiClient: docusign.ApiClient;
  private accountId: string;
  private envelopeApi: docusign.EnvelopesApi;

  constructor() {
    this.accountId = process.env.VITE_DOCUSIGN_ACCOUNT_ID!;
    this.dsApiClient = new docusign.ApiClient({
      basePath: process.env.VITE_DOCUSIGN_BASE_PATH!,
      oAuthBasePath: 'account-d.docusign.com'
    });
  }

  private async authenticate() {
    const privateKeyFile = path.resolve(process.cwd(), 'private.pem');
    const privateKey = fs.readFileSync(privateKeyFile);
    
    const jwtToken = await this.dsApiClient.requestJWTUserToken(
      process.env.VITE_DOCUSIGN_INTEGRATION_KEY!,
      process.env.VITE_DOCUSIGN_USER_ID!,
      SCOPES,
      privateKey,
      3600
    );

    this.dsApiClient.addDefaultHeader('Authorization', `Bearer ${jwtToken.body.access_token}`);
    this.envelopeApi = new docusign.EnvelopesApi(this.dsApiClient);
  }

  async createEnvelope(req: SigningUrlRequest) {
    await this.authenticate();

    const envelopeDefinition = new docusign.EnvelopeDefinition();
    envelopeDefinition.templateId = req.templateId;
    
    const signer = docusign.TemplateRole.constructFromObject({
      email: req.email,
      name: req.name,
      roleName: 'signer',
      clientUserId: '1000' // Must match the client user ID in the embedded signing URL request
    });

    envelopeDefinition.templateRoles = [signer];
    envelopeDefinition.status = 'sent';

    const results = await this.envelopeApi.createEnvelope(this.accountId, {
      envelopeDefinition
    });

    return results.envelopeId;
  }

  async getSigningUrl(envelopeId: string, req: SigningUrlRequest) {
    const recipientViewRequest = docusign.RecipientViewRequest.constructFromObject({
      authenticationMethod: 'none',
      clientUserId: '1000',
      recipientId: '1',
      returnUrl: `${window.location.origin}/signing-complete`,
      userName: req.name,
      email: req.email,
      frameAncestors: ['http://localhost:5173', 'https://apps-d.docusign.com'],
      messageOrigins: ['https://apps-d.docusign.com']
    });

    const results = await this.envelopeApi.createRecipientView(
      this.accountId,
      envelopeId,
      { recipientViewRequest }
    );

    return results.url;
  }
}

export const docuSignAPI = new DocuSignAPI();
