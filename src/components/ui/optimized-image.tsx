import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface OptimizedImageProps {
  src: string;
  alt: string;
  aspectRatio?: number;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  aspectRatio = 16/9,
  className,
}: OptimizedImageProps) {
  return (
    <div className="overflow-hidden rounded-t-lg">
      <AspectRatio ratio={aspectRatio} className="bg-muted">
        <img 
          src={src} 
          alt={alt} 
          className={`object-cover w-full h-full transition-all duration-300 hover:scale-105 ${className || ''}`}
          loading="lazy"
        />
      </AspectRatio>
    </div>
  );
}