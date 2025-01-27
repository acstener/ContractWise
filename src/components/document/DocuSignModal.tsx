import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { FileText, Loader2 } from "lucide-react";

interface DocuSignModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const mockDocuments = [
  {
    name: "Service Agreement - Marketing.pdf",
    date: "Jan 15, 2024",
    size: "2.4 MB"
  },
  {
    name: "NDA - Engineering Team.pdf",
    date: "Jan 20, 2024",
    size: "1.8 MB"
  },
  {
    name: "Master Services Agreement.pdf",
    date: "Jan 22, 2024",
    size: "3.1 MB"
  },
  {
    name: "Statement of Work - Q1 2024.pdf",
    date: "Jan 25, 2024",
    size: "1.2 MB"
  }
];

export const DocuSignModal = ({ open, onOpenChange }: DocuSignModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="flex flex-col items-center gap-4">
          <img src="/docusign-logo.svg" alt="DocuSign" className="w-16 h-16" />
          <DialogTitle>
            Select Documents to Import
          </DialogTitle>
        </DialogHeader>
        <div className="py-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          ) : (
            <div className="space-y-2">
              {mockDocuments.map((doc, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 rounded-lg border bg-white hover:bg-gray-50/80 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{doc.name}</div>
                    <div className="text-sm text-gray-500">
                      Modified {doc.date} • {doc.size}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
