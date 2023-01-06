const IFrame = ({
  videoId,
  className = "w-embed-youtubevideo youtube-2",
  title,
}) => {
  return (
    <div style={{ paddingTop: "56.17021276595745%" }} className={className}>
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
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default IFrame;
