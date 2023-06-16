import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { ShoppingCart, MapPin } from "phosphor-react";
import { HeaderContainer } from "./styles";
import { GeoIP } from "./GeoIP";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export function Header() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.length;

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="buttonsHome">
        <button className="geoip">
          <MapPin size={22} weight="fill" />
          <GeoIP />
        </button>

        {cartItemCount > 0 ? (
          <Link to="/cart">
            <button className="cart">
              <ShoppingCart size={22} weight="fill" />
              {cartItemCount > 0 && <span className="item-count">{cartItemCount}</span>}
            </button>
          </Link>
        ) : (
          <button className="cart" disabled>
            <ShoppingCart size={22} weight="fill" />
            {cartItemCount > 0 && <span className="item-count">{cartItemCount}</span>}
          </button>
        )}
      </div>
    </HeaderContainer>
  );
}
