import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddFileModal } from "./AddFileModal";

export const DocumentHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <Button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-white hover:bg-gray-50"
        variant="outline"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add File
      </Button>
      <AddFileModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};
