import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem 0;
  width: 112rem;
  margin: 0 auto;

  img {
    cursor: pointer;
  }

  div.buttonsHome {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.2rem;

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      border-radius: 6px;
      font-size: 1.4rem;
    }

    button.geoip {
      color: ${(props) => props.theme["purple"]};
      background: ${(props) => props.theme["purple-light"]};
    }

    button.cart {
      cursor: pointer;
      color: ${(props) => props.theme["yellow-dark"]};
      background: ${(props) => props.theme["yellow-light"]};
      padding: 1rem;
      position: relative;

      &:disabled{
        cursor: not-allowed;
      }

      span {
        position: absolute;
        top: -8px;
        right: -8px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        color: ${(props) => props.theme["yellow-light"]};
        background: ${(props) => props.theme["yellow-dark"]};
        font-size: 12px;
        border-radius: 50%;
      }
    }
  }
`;
