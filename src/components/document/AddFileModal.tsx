import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";
import { DocuSignModal } from "./DocuSignModal";

interface AddFileModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AddFileModal = ({ open, onOpenChange }: AddFileModalProps) => {
  const [docuSignModalOpen, setDocuSignModalOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Document</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <Button
              onClick={() => {
                onOpenChange(false);
                setDocuSignModalOpen(true);
              }}
              className="h-auto py-6 bg-white hover:bg-gray-50 group w-full"
              variant="outline"
            >
              <div className="flex flex-col items-center w-full">
                <img
                  src="/docusign-logo.svg"
                  alt="DocuSign"
                  className="w-12 h-12 mb-3 group-hover:scale-105 transition-transform"
                />
                <span className="text-sm font-medium">Add from Docusign</span>
              </div>
            </Button>
            <Button
              onClick={() => {}}
              variant="outline"
              className="h-auto py-6 bg-white hover:bg-gray-50 group w-full"
            >
              <div className="flex flex-col items-center w-full">
                <Upload className="w-8 h-8 mb-3 group-hover:scale-105 transition-transform" />
                <span className="text-sm font-medium">Upload from Device</span>
              </div>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <DocuSignModal open={docuSignModalOpen} onOpenChange={setDocuSignModalOpen} />
    </>
  );
};
