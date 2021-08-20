import styled from "styled-components";

export const ModalContainer = styled.div`
  background: rgba(0,0,0,0.7);
  position: fixed;
  z-index: 5;
  height: 100%;
  width: 100%;
`
export const Modal = styled.div`
  background: #ffffff;
  min-height: 100px;
  min-width: 100px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;

  @media screen and (max-width: 800px) {
    min-height: 300px;
    width: 100%;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;

  img {
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  img:hover {
    transform: scale(1.1);
  }
`
export const BodyContainer = styled.img`
  align-self: center;
  max-width: 100%;
  height: auto;

  @media screen and (max-width: 800px) {
    max-width: 60%;
  }
`
export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`
