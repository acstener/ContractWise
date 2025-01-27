import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface DocuSignModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  name: string;
}

export function DocuSignModal({ isOpen, onClose, email, name }: DocuSignModalProps) {
  useEffect(() => {
    if (isOpen) {
      // Create PowerForm URL with the example form ID
      const powerFormUrl = `https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=dbf46535-d350-44d4-ac10-5359c909fbdc&env=demo&acct=2b44b280-f069-4d8c-b504-6a1b33923f4d&v=2&Signer_FullName=${encodeURIComponent(
        name
      )}&Signer_EmailAddress=${encodeURIComponent(email)}`;

      // Open PowerForm in a new window
      window.open(powerFormUrl, '_blank');
      
      // Close the modal
      onClose();
    }
  }, [isOpen, email, name, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Opening DocuSign...</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
