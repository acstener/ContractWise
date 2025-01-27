import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  hasDocuSign: boolean;
  isPending?: boolean;
}

interface TimelineProps {
  events: TimelineEvent[];
  onRenewalClick: () => void;
  onDocuSignClick: () => void;
}

export const ContractTimeline = ({ events, onRenewalClick, onDocuSignClick }: TimelineProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-[#9b87f5]" />
          Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="w-24 pt-1 text-sm text-gray-500 font-medium">{event.date}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{event.description}</p>
                {event.hasDocuSign && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5] hover:text-white mt-2"
                    onClick={() => event.isPending ? onRenewalClick() : onDocuSignClick()}
                  >
                    {event.isPending ? "Prepare Renewal" : "View in DocuSign"}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};