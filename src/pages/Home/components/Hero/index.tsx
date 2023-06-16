import React from "react";
import { HeroContainer } from "./styles";
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import Product from "../../../../assets/product.png";

export function Hero() {
  return (
    <HeroContainer>
      <section>
        <div className="mainContainer">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <ul>
            <div>
              <li>
                <span>
                  <ShoppingCart size={18} weight="fill" />
                </span>
                Compra simples e segura
              </li>

              <li>
                <span>
                  <Package size={18} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </li>

              <li>
                <span>
                  <Timer size={18} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </li>

              <li>
                <span>
                  <Coffee size={18} weight="fill" />
                </span>
                O café chega fresquinho até você
              </li>
            </div>
          </ul>
        </div>
        <img src={Product} alt="" />
      </section>
    </HeroContainer>
  );
}
