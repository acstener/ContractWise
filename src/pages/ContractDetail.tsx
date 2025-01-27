import { useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/AppSidebar";
import { RenewalModal } from "@/components/RenewalModal";
import { ContractMetrics } from "@/components/contract/ContractMetrics";
import { ContractVideos } from "@/components/contract/ContractVideos";
import { ContractTimeline } from "@/components/contract/ContractTimeline";
import { ContractAssistant } from "@/components/contract/ContractAssistant";
import { DocuSignModal } from "@/components/DocuSignModal";

const mockMetrics = {
  contractHealth: { score: 85 },
  timeToRenewal: { days: 60 },
  actionItems: { total: 5 },
  compliance: { isCompliant: true },
  renewal: {
    daysRemaining: 60,
    date: "March 1, 2025"
  },
  status: {
    isActive: true,
    lastReviewed: "2 days ago"
  },
  aiSummary: "This Service Agreement outlines the terms for API access and usage. Key points include data processing requirements, payment terms (Net-15), and compliance obligations. The agreement is currently active and due for renewal in 60 days."
};

const mockVideos = [
  { 
    id: 1, 
    title: "Contract Overview", 
    context: "Complete walkthrough of contract terms and conditions",
    action: "Review key points and obligations",
    duration: "5:30",
    playUrl: "https://iframe.mediadelivery.net/embed/58602/b83719e0-18e0-4c54-b6aa-c20d48ca4f64",
    thumbnailUrl: "https://vz-912fa748-f05.b-cdn.net/b83719e0-18e0-4c54-b6aa-c20d48ca4f64/thumbnail.jpg",
    previewUrl: "https://vz-912fa748-f05.b-cdn.net/b83719e0-18e0-4c54-b6aa-c20d48ca4f64/preview.webp"
  },
  { 
    id: 2, 
    title: "Payment Terms Changing", 
    context: "Payment window updating from Net-30 to Net-15",
    action: "New billing cycle starts next quarter",
    duration: "8:15",
    playUrl: "https://iframe.mediadelivery.net/embed/58602/b83719e0-18e0-4c54-b6aa-c20d48ca4f64",
    thumbnailUrl: "https://vz-912fa748-f05.b-cdn.net/b83719e0-18e0-4c54-b6aa-c20d48ca4f64/thumbnail.jpg",
    previewUrl: "https://vz-912fa748-f05.b-cdn.net/b83719e0-18e0-4c54-b6aa-c20d48ca4f64/preview.webp"
  },
  { 
    id: 3, 
    title: "Data Processing Updates", 
    context: "Updated data retention policies",
    action: "New compliance requirements added",
    duration: "12:45",
    playUrl: "https://iframe.mediadelivery.net/embed/58602/b83719e0-18e0-4c54-b6aa-c20d48ca4f64",
    thumbnailUrl: "https://vz-912fa748-f05.b-cdn.net/b83719e0-18e0-4c54-b6aa-c20d48ca4f64/thumbnail.jpg",
    previewUrl: "https://vz-912fa748-f05.b-cdn.net/b83719e0-18e0-4c54-b6aa-c20d48ca4f64/preview.webp"
  }
];

const mockTimelineEvents = [
  { 
    date: "2024-01-15", 
    title: "Contract Signed", 
    description: "Initial agreement established",
    hasDocuSign: true 
  },
  { 
    date: "2024-03-01", 
    title: "Service Activation", 
    description: "API access granted",
    hasDocuSign: false 
  },
  { 
    date: "2025-03-01", 
    title: "Renewal Due", 
    description: "Contract renewal deadline",
    hasDocuSign: true,
    isPending: true 
  },
];

const ContractDetail = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isRenewalModalOpen, setIsRenewalModalOpen] = useState(false);
  const [isDocuSignModalOpen, setIsDocuSignModalOpen] = useState(false);

  const handleTimelineDocuSignClick = () => {
    setIsDocuSignModalOpen(true);
  };

  const handleRenewalDocuSignClick = () => {
    setIsRenewalModalOpen(false);
    setIsDocuSignModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-[#F1F0FB]">
      <AppSidebar />
      <main className="flex-1 overflow-auto">
        <div className="w-full px-4 sm:px-6 py-4 sm:py-8">
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col items-start gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" />
                <AvatarFallback>OAI</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">OpenAI Service Agreement</h1>
                <p className="text-gray-500 mt-1">Active Contract</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <ContractMetrics 
              renewal={mockMetrics.renewal}
              status={mockMetrics.status}
              aiSummary={mockMetrics.aiSummary}
            />
            <ContractVideos 
              videos={mockVideos} 
              onVideoSelect={setSelectedVideo} 
            />
            <ContractTimeline 
              events={mockTimelineEvents}
              onRenewalClick={() => setIsRenewalModalOpen(true)}
              onDocuSignClick={handleTimelineDocuSignClick}
            />
          </div>
        </div>
      </main>
      <ContractAssistant />
      <RenewalModal
        isOpen={isRenewalModalOpen}
        onClose={() => setIsRenewalModalOpen(false)}
        onChatClick={() => setIsRenewalModalOpen(false)}
        onDocuSignClick={handleRenewalDocuSignClick}
      />
      <DocuSignModal
        isOpen={isDocuSignModalOpen}
        onClose={() => setIsDocuSignModalOpen(false)}
        email="user@example.com"
        name="John Doe"
      />
    </div>
  );
};

export default ContractDetail;