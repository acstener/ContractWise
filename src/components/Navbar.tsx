import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary-600" />
            <span className="font-semibold text-xl">ContractWise</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};