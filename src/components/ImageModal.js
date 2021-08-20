import React, { useEffect, useRef } from "react";
import { ModalContainer, Modal, TitleContainer, BodyContainer, DetailsContainer } from "../styles/ImageModalStyles";
import exit from "../images/exit.svg";

const ImageModal = ({ image, closeModal }) => {
  const { title, url, author, ups } = image;
  const node = useRef();

  // if node is falsy, or if it contains the target element, do nothing
  // otherwise, close the modal
  const handleClickOutside = e => {
    if (!node.current || node.current.contains(e.target)) {
      return;
    }
    closeModal();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  return (
    <ModalContainer>
      <Modal ref={node}>
        <TitleContainer>
          <h3>{title}</h3>
          <img src={exit} alt="Exit button" onClick={closeModal} />
        </TitleContainer>
        <BodyContainer src={url}>

        </BodyContainer>
        <DetailsContainer>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Upvotes:</strong> {ups}</p>
        </DetailsContainer>
      </Modal>
    </ModalContainer>
  )
}

export default ImageModal;
