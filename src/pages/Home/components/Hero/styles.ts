import styled from "styled-components";
import bgmain from "../../../../assets/background.png";

export const HeroContainer = styled.main`
  background-image: url(${bgmain});

  section {
    padding: 9.4rem 0;
    width: 112rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .mainContainer {
    width: 60rem;
  }

  h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 1.3;
    margin-bottom: 1.6rem;
  }

  p {
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 6.6rem;
  }

  ul {
    list-style: none;

    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }

    li {
      display: flex;
      align-items: center;
      flex-basis: 50%;
      margin-bottom: 2rem;
      gap: 1.2rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 8px;
        border-radius: 1000px;
        color: ${(props) => props.theme["background"]};
      }

      :nth-child(1) span {
        background: ${(props) => props.theme["yellow-dark"]};
      }

      :nth-child(2) span {
        background: ${(props) => props.theme["base-text"]};
      }

      :nth-child(3) span {
        background: ${(props) => props.theme["yellow"]};
      }

      :nth-child(4) span {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }
`;
