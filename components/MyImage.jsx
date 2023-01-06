import Image, { getImageSizes } from "next/image";

const MyImage = ({ src, alt = "", ...args }) => {
  return <img src={src} alt={alt} loading="lazy" {...args} />;
};

export default MyImage;
