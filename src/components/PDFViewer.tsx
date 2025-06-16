import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

interface PDFViewerProps {
  pdfUrl: string;
  buttonText?: string;
  className?: string;
}

const PDFViewer = ({ pdfUrl, buttonText = "View Document", className = "" }: PDFViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          <FileText className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
        {isMobile ? (
          <div className="flex flex-col items-center justify-center h-full p-6">
            <p className="text-center mb-4">PDF viewing is optimized for desktop. Please download the document to view on mobile.</p>
            <Button onClick={handleDownload}>
              Download PDF
            </Button>
          </div>
        ) : (
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full border-none"
            title="PDF Viewer"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PDFViewer;