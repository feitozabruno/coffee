import styled from "styled-components";

export const CartContainer = styled.section`
  form {
    display: flex;
    gap: 3.2rem;
    width: 112rem;
    margin: 4rem auto;
  }

  h2 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  .empty {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 112rem;
    margin: 4rem auto;

    a {
      text-decoration: none;
    }

    button {
      display: flex;
      align-items: center;
      width: fit-content;
      padding: 1.2rem 2.4rem;
      justify-content: flex-start;
      color: ${(props) => props.theme["base-title"]};
      background: ${(props) => props.theme["purple"]};
      border-radius: 8px;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const CartAdress = styled.div``;

export const CartAdressContent = styled.div`
  width: 64rem;
  padding: 4rem;
  margin-bottom: 1.2rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    gap: 8px;
    margin-bottom: 3.2rem;

    h3 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  input {
    font-size: 1.4rem;
    background: none;
    border: none;
    padding: 1rem;
    background: ${(props) => props.theme["base-input"]};
    margin-bottom: 1.6rem;
    border: 1px solid #e6e5e5;
    border-radius: 4px;

    &:focus {
      outline: 0;
      box-shadow: none;
    }

    :nth-child(1) {
      width: 20rem;
    }

    :nth-child(2) {
      width: 100%;
    }

    /* :nth-child(3) {
      width: calc((100% / 2) - 1.2rem);
      margin-right: 1.2rem;
      &::-webkit-input-placeholder {
        color: #4c4;
      }
    } */

    :nth-child(4) {
      width: 40%;
      margin-right: 1.2rem;
    }

    :nth-child(5) {
      width: 40%;
      margin-right: 1.2rem;
    }

    :nth-child(6) {
      width: calc((100% - 80%) - 2.4rem);
    }
  }

  div.child-3 {
    display: flex;
    gap: 1.2rem;
  }

  div.opcional {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    background: ${(props) => props.theme["base-input"]};
    border: 1px solid #e6e5e5;
    border-radius: 4px;
    margin-bottom: 1.2rem;
    width: 100%;

    input {
      background: none;
      border: none;
      margin: 0;
      width: 100%;
    }

    span {
      font-size: 1.2rem;
      font-style: italic;
      margin-inline: 1rem;
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const CartPayment = styled.div`
  width: 64rem;
  padding: 4rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    gap: 8px;
    margin-bottom: 3.2rem;

    h3 {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.3;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme["base-text"]};
    }
  }

  .cards {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.2rem;
    background: ${(props) => props.theme["base-card"]};

    .card {
      display: flex;
      align-items: center;
      flex: 1;
      gap: 1.2rem;
      padding: 1.6rem;
      border-radius: 6px;
      background: ${(props) => props.theme["base-button"]};
      cursor: pointer;
    }

    .selected {
      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["base-text"]};
      border: 1px solid ${(props) => props.theme["purple"]};
      border-radius: 6px;
    }

  }
`;

export const CartCoffees = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 4rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  h2 {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }

  /* hr {
    width: 368px;
    height: 0px;
    border: 1px solid #e6e5e5;
  } */
`;

export const CartComponent = styled.div`
  ul {
    list-style: none;
  }

  section {
    padding: 4rem;
    gap: 2.4rem;
    border-radius: 6px 44px;
    background: ${(props) => props.theme["base-card"]};
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 6.4rem;
    height: 6.4rem;
  }

  .itemcoffee {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .buttonscoffee {
      display: flex;
      align-items: center;
      gap: 8px;

      div {
        display: flex;
        align-items: center;
        gap: 8px;
        border-radius: 6px;
        background: ${(props) => props.theme["base-button"]};
      }

      span {
        font-size: 1.6rem;
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: fit-content;
        padding: 8px;
        gap: 4px;
        font-size: 1.2rem;
        border-radius: 6px;
        background: ${(props) => props.theme["base-button"]};

        svg {
          cursor: pointer;
        }

        &:nth-child(2) {
          cursor: pointer;
        }
      }
    }
  }

  .itemprice {
    font-weight: 700;
    font-size: 1.6rem;
    color: #574f4d;
  }
`;

export const ResumeCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.4rem;

  div.wrap {
    display: flex;
    justify-content: space-between;

    &:nth-child(3) {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 2rem;
    }
  }

  button {
    padding: 1.2rem 0.8rem;
    border-radius: 6px;
    margin-block: 2.4rem;
    background: ${(props) => props.theme["yellow"]};
    color: #fff;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;
  }
`;
