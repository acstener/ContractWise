import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import googleLogo from '../assets/google-logo.svg';
import { DocumentHeader } from "@/components/document/DocumentHeader";

const mockMetrics = {
  activeAgreements: 3,
  upcomingRenewals: 2,
  riskScore: 85,
  avgProcessingTime: "2.5 days",
};

const mockContracts = [
  {
    id: "1",
    title: "OpenAI Service Agreement",
    value: "$250,000",
    renewal: "March 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    logoFallback: "OAI"
  },
  {
    id: "2",
    title: "Google Cloud Platform",
    value: "$280,000",
    renewal: "August 2024",
    logo: googleLogo,
    logoFallback: "GCP"
  },
  {
    id: "3",
    title: "Salesforce CRM License",
    value: "$175,000",
    renewal: "December 2024",
    logo: "https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg",
    logoFallback: "SF"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#F1F0FB]">
        <AppSidebar />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Contract Dashboard</h1>
                <p className="text-gray-500 mt-1">Manage and track your contracts</p>
              </div>
              <SidebarTrigger />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="hover:shadow-lg transition-shadow bg-white border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Agreements</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockMetrics.activeAgreements}</div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow bg-white border-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Upcoming Renewals</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{mockMetrics.upcomingRenewals}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-lg transition-shadow bg-white border-none mb-8">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Add New Document</CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <DocumentHeader />
              </CardContent>
            </Card>

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Your Contracts</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {mockContracts.map((contract) => (
                <Card 
                  key={contract.id}
                  className="hover:shadow-lg transition-shadow bg-white border-none p-4 sm:p-6 cursor-pointer"
                  onClick={contract.id === "1" ? () => navigate(`/contract/${contract.id}`) : undefined}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                        <AvatarImage src={contract.logo} />
                        <AvatarFallback>{contract.logoFallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{contract.title}</h2>
                        <p className="text-gray-500">Active Contract</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-gray-500 text-sm sm:text-base">Contract Value</p>
                      <p className="text-lg sm:text-xl font-semibold">{contract.value}</p>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-gray-500 text-sm sm:text-base">Renewal Date</p>
                      <p className="text-lg sm:text-xl font-semibold">{contract.renewal}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;