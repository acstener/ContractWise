import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { useState } from "react";

interface Video {
  id: number;
  title: string;
  context: string;
  action: string;
  duration: string;
  playUrl: string;
  thumbnailUrl: string;
  previewUrl: string;
}

interface VideosProps {
  videos: Video[];
  onVideoSelect: (id: number) => void;
}

export const ContractVideos = ({ videos, onVideoSelect }: VideosProps) => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  return (
    <Card>
      <CardHeader>
        <div className="space-y-3">
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#9b87f5]/10 flex items-center justify-center">
              <Play className="h-3.5 w-3.5 text-[#9b87f5]" />
            </div>
            Key Agreement Challenges
          </CardTitle>
          <p className="text-sm text-gray-500">
            Your AI agent has selected key challenges from this document and is explaining them clearly in the videos below.
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {videos.map((video) => (
            <Dialog key={video.id}>
              <DialogTrigger asChild>
                <div 
                  className="p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => onVideoSelect(video.id)}
                  onMouseEnter={() => setHoveredVideo(video.id)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-lg overflow-hidden relative">
                        <img 
                          src={hoveredVideo === video.id 
                            ? video.previewUrl
                            : video.thumbnailUrl
                          }
                          alt={video.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{video.title}</h3>
                        <p className="text-sm text-gray-500">{video.context}</p>
                        <p className="text-sm text-[#9b87f5] mt-1">{video.action}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Watch</Button>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] p-0">
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe 
                    src={`${video.playUrl}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`}
                    loading="lazy" 
                    style={{ 
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      height: '100%',
                      width: '100%'
                    }}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                    allowFullScreen={true}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};