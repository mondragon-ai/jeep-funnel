const MyImage = ({ src, alt = "", ...args }) => {
  return <img src={src} alt={alt} loading="lazy" {...args} style={{
    borderRadius: "10px"
  }} />;
};

export default MyImage;
