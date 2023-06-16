import React, { useContext, useState } from "react";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CardComponentContainer } from "./styles";
import { CartContext } from "../../../../../context/CartContext";

interface CardProps {
  coffeeImage: string;
  title: string;
  description: string;
  price?: number;
  tag1?: string;
  tag2?: string;
  tag3?: string;
}

CardComponent.defaultProps = {
  price: 9.9,
};

export function CardComponent({
  coffeeImage, title, description, price, tag1, tag2, tag3
}: CardProps) {
  const [amountCoffees, setAmountCoffees] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setAmountCoffees(value);
    }
  };

  const handleDecrement = () => {
    if (amountCoffees > 1) {
      setAmountCoffees(amountCoffees - 1);
    }
  };

  const handleIncrement = () => {
    setAmountCoffees(amountCoffees + 1);
  };

  const numberFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  const formattedPrice = price
    ? numberFormat.format(price * amountCoffees)
    : numberFormat.format(CardComponent.defaultProps.price * amountCoffees);

  const currencySymbol = numberFormat.formatToParts(0)[0].value;

  const { addToCart } = useContext(CartContext);

  const product = {
    image: coffeeImage,
    amount: amountCoffees,
    name: title,
    price: (price || CardComponent.defaultProps.price) * amountCoffees,
  };
  

  return (
    <CardComponentContainer>
      <div className="card-header">
        <img src={coffeeImage} alt="" />
      </div>
      <div className="card-body">
        <div className="card-tags">
          {tag1 ? <strong className="tag">{tag1}</strong> : null}
          {tag2 ? <strong className="tag">{tag2}</strong> : null}
          {tag3 ? <strong className="tag">{tag3}</strong> : null}
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="card-footer">
          <div className="price">
            {currencySymbol} <span>{formattedPrice.substring(currencySymbol.length)}</span>
          </div>
          <div className="quantity">
            <button className="quantity-button" onClick={handleDecrement}>
              <Minus size={15} weight="fill" />
            </button>
            <input type="text" value={amountCoffees} onChange={handleChange} />
            <button className="quantity-button" onClick={handleIncrement}>
              <Plus size={15} weight="fill" />
            </button>
          </div>
          <button className="buy-button" onClick={() => addToCart(product)}>
            <ShoppingCart size={20} color="#F3F2F2" weight="fill" />
          </button>
        </div>
      </div>
    </CardComponentContainer>
  );
}
