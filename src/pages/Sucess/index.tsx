import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { SucessContainer } from "./styles";
import { CurrencyCircleDollar, MapPin, Timer } from "phosphor-react";
import deliveryImg from "../../assets/delivery.svg";

export function Sucess() {
  const { address, selectedOption } = useContext(CartContext);

  return (
    <SucessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div className="cols">
        <div className="border">
          <ul>
            <li>
              <span>
                <MapPin size={18} weight="fill" />
              </span>
              <div>
                <p>Entrega em <strong>{`Rua ${address.rua}, ${address.numero}`}</strong></p>
                <p>{`${address.bairro} - ${address.cidade}, ${address.uf}`}</p>
              </div>
            </li>

            <li>
              <span>
                <Timer size={18} weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <p><strong>20 min - 30 min</strong></p>
              </div>
            </li>

            <li>
              <span>
                <CurrencyCircleDollar size={18} weight="fill" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <p><strong>{selectedOption}</strong></p>
              </div>
            </li>
          </ul>

        </div>
        <img src={deliveryImg} alt="" />
      </div>
    </SucessContainer>
  );
}