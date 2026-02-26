import { useRef } from "react";

export function ReelCard({ video, title }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    // videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="reel-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={video}
        loop
        playsInline
        preload="metadata"
        controls
        muted
      />
      <div className="overlay">
        <p>{title}</p>
      </div>
    </div>
  );
}