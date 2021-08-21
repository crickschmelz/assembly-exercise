import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "radnika_next", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`

export const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  grid-gap: 26px;

  @media screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
  }
`
