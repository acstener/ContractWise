import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Clock, CheckCircle2, MessageSquare } from "lucide-react";

interface ContractMetricsProps {
  renewal: {
    daysRemaining: number;
    date: string;
  };
  status: {
    isActive: boolean;
    lastReviewed: string;
  };
  aiSummary: string;
}

export const ContractMetrics = ({
  renewal,
  status,
  aiSummary,
}: ContractMetricsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#9b87f5]" />
          Smart Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#9b87f5]" />
              <p className="text-sm text-gray-500">Renewal</p>
            </div>
            <p className="text-lg font-bold mt-1">{renewal.daysRemaining}d</p>
            <p className="text-xs text-gray-400">{renewal.date}</p>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <p className="text-sm text-gray-500">Status</p>
            </div>
            <p className="text-lg font-bold mt-1">
              {status.isActive ? 'Active' : 'Inactive'}
            </p>
            <p className="text-xs text-gray-400">Reviewed {status.lastReviewed}</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-500" />
              <p className="text-sm text-gray-500">Support</p>
            </div>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            Chat to the AI agent above - trained on your documents.
            </p>
          </div>
        </div>

        {/* AI Summary */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 leading-relaxed">
            {aiSummary}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};