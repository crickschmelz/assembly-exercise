import styled from "styled-components";

export const Topbar = styled.div`
  height: 77px;
  width: 100%;
  border-bottom: 1px solid #C0C4CC;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;

  @media screen and (max-width: 500px) {
    height: 120px;
    flex-direction: column;
    padding: 10px;
  }
`
export const Logo = styled.div`
  display: flex;

  img {
    margin-right: 5px;
  }

  p {
    font-weight: bold;
    font-size: 12px;
    font-family: cursive;
    transform: skewY(-15deg)
  }
`
export const Search = styled.input`
  border: 1px solid #C0C4CC;
  border-radius: 2px;
  padding: 10px 10px 10px 30px;
  width: 180px;

  :focus {
    outline: none;
  }
`
export const Form = styled.form`
  position: relative;

  img {
    position: absolute;
    z-index: 1;
    left: 5%;
    top: 45%;
  }
`
