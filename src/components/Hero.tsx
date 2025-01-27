import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Zap, MessageSquare, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-50">
      <div className="w-full px-4 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-primary-600">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">AI-Powered Contract Management</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Transform Your Contracts into 
                <span className="text-primary-600"> Clear Insights</span>
              </h1>
              <p className="text-xl text-gray-600 md:text-2xl max-w-3xl mx-auto">
                Stop drowning in contract complexity. Our AI assistant extracts key terms, tracks deadlines, and answers your questions in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="gap-2" onClick={() => navigate('/dashboard')}>
                  Try for Free <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Watch Demo <Zap className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
              <FeatureCard
                icon={<MessageSquare className="w-6 h-6" />}
                title="AI Assistant"
                description="Chat with your contracts and get instant answers to any questions."
              />
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="Smart Analysis"
                description="Get instant insights about key terms, dates, and obligations."
              />
              <FeatureCard
                icon={<FileText className="w-6 h-6" />}
                title="Visual Dashboard"
                description="See all your contracts and deadlines in one beautiful interface."
              />
            </div>

            <div className="mt-16 flex flex-col items-center gap-3">
              <p className="text-sm text-gray-500">Powered by</p>
              <img src="/docusign-logo.svg" alt="DocuSign" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm">
      <div className="p-3 rounded-lg bg-primary-50 text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};