import React from "react";
import PropTypes from "prop-types";
import { Thumb, Title } from "../styles/ImageThumbStyles";

const ImageThumb = ({ image, openModal }) => {
  const { url, title } = image.data;

  return (
    <Thumb image={url} onClick={() => openModal(image.data)}>
      <Title>{title}</Title>
    </Thumb>
  )
}

ImageThumb.propTypes = {
  image: PropTypes.object,
  openModal: PropTypes.func
}

export default ImageThumb;
