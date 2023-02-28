import { useEffect, useState } from "react";

const IFrame = ({
  videoId,
  className = "w-embed-youtubevideo youtube-2",
  title,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])
  return (
    <div style={{
      paddingTop: "56.17021276595745%",
      borderRadius: "10px",
      height: windowWidth > 720 ? "500px" : "300px",
      padding: "1rem 0"
    }}
      className={className}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=1&autoplay=0&mute=0&start=0`}
        frameBorder={0}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
          borderRadius: "10px"
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default IFrame;
