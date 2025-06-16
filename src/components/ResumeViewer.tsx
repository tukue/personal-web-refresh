import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ResumeViewer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">My Resume</h2>
          <Button onClick={toggleFullScreen} variant="outline">
            {isFullScreen ? 'Exit Full Screen' : 'View Full Screen'}
          </Button>
        </div>
        <div className={`relative ${isFullScreen ? 'fixed inset-0 z-50 bg-background p-6' : 'h-[600px]'}`}>
          <iframe
            src="/Tukue-Resume.pdf"
            className="w-full h-full border-none"
            title="Tukue's Resume"
          />
          {isFullScreen && (
            <Button
              className="absolute top-2 right-2"
              onClick={toggleFullScreen}
              variant="destructive"
              size="sm"
            >
              Close
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeViewer;