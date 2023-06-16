import styled from "styled-components";

export const MarketContainer = styled.section`
  width: 112rem;
  margin: 0 auto;
  margin-bottom: 15rem;

  h2 {
    margin-top: 3.2rem;
    margin-bottom: 5.4rem;
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 3.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25.6rem, 0.25fr));
    grid-auto-flow: dense;
    gap: 3.2rem;
    list-style: none;
  }
`;
