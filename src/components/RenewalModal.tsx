import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RenewalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onChatClick: () => void;
  onDocuSignClick: () => void;
}

export const RenewalModal = ({
  isOpen,
  onClose,
  onChatClick,
  onDocuSignClick,
}: RenewalModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Contract Renewal Overview
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Key Changes at a Glance</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Payment Terms → Net-15 (previously Net-30)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>New Data Retention Requirements</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Updated Support SLA</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span>Revised Compliance Standards</span>
            </li>
          </ul>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={onChatClick}
            >
              Chat with AI Assistant
            </Button>
            <Button
              className="w-full"
              onClick={onDocuSignClick}
            >
              Continue to DocuSign
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};