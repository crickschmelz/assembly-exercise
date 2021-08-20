import React from "react";
import { Thumb, Image, Title } from "../styles/ImageThumbStyles";

const ImageThumb = ({ image, openModal }) => {
  const { url, title } = image.data;

  return (
    <Thumb image={url} onClick={() => openModal(image.data)}>
      <Title>{title}</Title>
    </Thumb>
  )
}

export default ImageThumb;
