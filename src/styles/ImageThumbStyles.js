import styled from "styled-components";

export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 348px;
  width: 280px;
  radius: 8px;
  border: 1px solid #E1E3E6;
  box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
  color: #000000;
  position: relative;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: all .2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`

export const Title = styled.h3`
  background: #ffffff;
  color: #000000;
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: -1px;
  margin: 0;
  padding: 10px;
  width: inherit;
`
