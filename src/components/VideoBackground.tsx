interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

export function VideoBackground({ 
  src, 
  poster, 
  className = "", 
  overlayOpacity = 0.4,
  children 
}: VideoBackgroundProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      </video>
      
      {/* Overlay to ensure content readability */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 