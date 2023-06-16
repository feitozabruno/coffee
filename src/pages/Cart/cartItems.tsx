import React, { useContext } from "react";
import { CartComponent, CartItemContainer, ResumeCart } from "./styles";
import { CartContext } from "../../context/CartContext";
import { Minus, Plus, Trash } from "phosphor-react";

export function CartItems() {
  const { cartItems, decreaseQuantity, increaseQuantity, removeItem } = useContext(CartContext);

  const numberFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.amount,
    0
  );

  return (
    <>
      <CartComponent>
        <h2>Cafés selecionados</h2>
        <section>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.name}>
                    <CartItemContainer>
                      <img src={item.image} alt="" />
                      <div className="itemcoffee">
                        <p>{item.name}</p>
                        <div className="buttonscoffee">
                          <div>
                            <button onClick={() => decreaseQuantity(item.name)}>
                              <Minus size={14} color="#8047F8"/>
                            </button>
                            <span>{item.amount}</span>
                            <button onClick={() => increaseQuantity(item.name)}>
                              <Plus size={14} color="#8047F8"/>
                            </button>
                          </div>
                          <button onClick={() => removeItem(item.name)}>
                            <Trash size={14} color="#8047F8"/>
                          REMOVER
                          </button>
                        </div>
                      </div>
                      <div className="itemprice">{numberFormat.format(item.price * item.amount)}</div>
                    </CartItemContainer>
                    <Divisor />
                  </li>
                ))}
              </ul>
              <ResumeCart>
                <div className="wrap">
                  <span>Total de itens</span>
                  <span>{numberFormat.format(total)}</span>
                </div>
  
                <div className="wrap">
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </div>
  
                <div className="wrap">
                  <strong>Total</strong>
                  <strong>{numberFormat.format(total + 3.5)}</strong>
                </div>
  
                <button type="submit" disabled={cartItems.length === 0}>CONFIRMAR PEDIDO</button>
              </ResumeCart>
            </>
          )}
        </section>
      </CartComponent>
      
    </>
  );
}

function Divisor() {
  return (
    <hr
      style={{
        width: "36.8rem",
        margin: "2.4rem 0 2.4rem 0",
        height: "0px",
        border: "1px solid #e6e5e5",
      }}
    />
  );
}