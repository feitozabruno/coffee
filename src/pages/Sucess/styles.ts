import styled from "styled-components";

export const SucessContainer = styled.section`
  padding: 8rem 0;
  width: 112rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .cols {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3.2rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-family: 'Roboto';
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 4rem;
  }

  .border {
    background: linear-gradient(100deg, #DBAC2C 0%, #8047F8 100%);
    width: 526px;
    height: 320px;
    border-radius: 6px 36px;
    padding: 1px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    list-style: none;
    background: ${(props) => props.theme["background"]};
    width: 524px;
    height: 318px;
    border-radius: 6px 36px;
    padding: 4rem;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1.2rem;

      p {
        font-size: 1.6rem;
        line-height: 1.3;
        margin: 0;
        color: ${(props) => props.theme["base-text"]};
      }

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
        background: ${(props) => props.theme["purple"]};
      }

      :nth-child(2) span {
        background: ${(props) => props.theme["yellow"]};
      }

      :nth-child(3) span {
        background: ${(props) => props.theme["yellow"]};
      }

      :nth-child(4) span {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }

  /* .border {
    background: linear-gradient(100deg, #DBAC2C 0%, #8047F8 100%);
    width: 526px;
    height: 270px;
    border-radius: 6px 36px;
    padding: 1px;
  }

  div.cols {
    display: flex;
    width: 112rem;
    justify-content: space-between;
    align-items: center;

    div.col-a {
      background: #fff;
      width: 524px;
      height: 268px;
      border-radius: 6px 36px;

      p {
        margin: 0;
      }

      div.address {
        display: flex;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          padding: 8px;
          border-radius: 1000px;
          color: ${(props) => props.theme["yellow-dark"]};
        }
      }
    }
  } */
`;