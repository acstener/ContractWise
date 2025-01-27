import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export const ContractAssistant = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const existingScript = document.querySelector('script[src*="convai-widget"]');
    if (existingScript) {
      setIsLoading(false);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => setIsLoading(false);
    script.onerror = () => {
      setError("Failed to load ElevenLabs widget");
      setIsLoading(false);
    };
    
    document.body.appendChild(script);

    return () => {
      if (existingScript) return;
      try {
        document.body.removeChild(script);
      } catch (error) {
        console.error("Error cleaning up script:", error);
      }
    };
  }, []);

  if (error) {
    return (
      <div className="fixed top-4 right-4 bg-red-100 text-red-700 p-4 rounded-lg shadow-lg">
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <elevenlabs-convai 
      agent-id="5DKEKdjZx0TPPDh9hoKX"
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        zIndex: 50,
        maxHeight: 'calc(100vh - 4rem)'
      }}
    />
  );
};