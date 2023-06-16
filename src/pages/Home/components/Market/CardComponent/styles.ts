import styled from "styled-components";

export const CardComponentContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ddd;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 6px 36px;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-header img {
    width: 12rem;
    height: 12rem;
    position: relative;
    top: -2rem;
  }

  .card-body {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -2rem;
    flex-grow: 1;
  }

  .card-tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  .tag {
    width: fit-content;
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 1rem;
    padding: 4px 8px;
    margin-bottom: 1.6rem;
    border-radius: 100px;
    background: ${(props) => props.theme["yellow-light"]};
  }

  .title {
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 8px;
  }

  .description {
    font-size: 1.4rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme["base-label"]};
    margin-bottom: 3.3rem;
    display: flex;
  }

  .card-footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2.4rem;
  }

  .price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 1.4rem;
    color: ${(props) => props.theme["base-text"]};
    margin-right: 1rem;

    span {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: 2.4rem;
    }
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    margin-right: 0.8rem;
  }

  .quantity-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    padding: 0 0.3rem;
    color: ${(props) => props.theme["purple"]};
    cursor: pointer;

    &:nth-child(1) {
      margin-right: 3px;
    }

    &:nth-child(2) {
      margin-left: 3px;
    }

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  input[type="text"] {
    border: none;
    background-color: ${(props) => props.theme["base-button"]};
    width: 3rem;
    text-align: center;
  }

  .buy-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    padding: 1rem;
    background: ${(props) => props.theme["purple-dark"]};
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: ${(props) => props.theme["purple"]};
    }
  }
`;
