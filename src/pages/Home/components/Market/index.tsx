import React from "react";
import { MarketContainer } from "./styles";
import { CardComponent } from "./CardComponent/index";

import ExpressoTradicional from "../../../../assets/ExpressoTradicional.png";
import ExpressoAmericano from "../../../../assets/ExpressoAmericano.png";
import ExpressoCremoso from "../../../../assets/ExpressoCremoso.png";
import ExpressoGelado from "../../../../assets/ExpressoGelado.png";
import CafecomLeite from "../../../../assets/CafecomLeite.png";
import Latte from "../../../../assets/ExpressoTradicional.png";
import Capuccino from "../../../../assets/Capuccino.png";
import Macchiato from "../../../../assets/Macchiato.png";
import Mocaccino from "../../../../assets/Mocaccino.png";
import ChocolateQuente from "../../../../assets/ChocolateQuente.png";
import Cubano from "../../../../assets/Cubano.png";
import Havaiano from "../../../../assets/Havaiano.png";
import Arabe from "../../../../assets/Arabe.png";
import Irlandes from "../../../../assets/Irlandes.png";

export function Market() {

  const products = [
    {
      image: ExpressoTradicional,
      name: "Expresso Tradicional",
      tags: ["TRADICIONAL"],
      description: "O tradicional café feito com água quente e grãos moídos",
    },
    {
      image: ExpressoAmericano,
      name: "Expresso Americano",
      tags: ["TRADICIONAL"],
      description: "Expresso diluído, menos intenso que o tradicional",
    },
    {
      image: ExpressoCremoso,
      name: "Expresso Cremoso",
      tags: ["TRADICIONAL"],
      description: "Café expresso tradicional com espuma cremosa",
    },
    {
      image: ExpressoGelado,
      name: "Expresso Gelado",
      tags: ["TRADICIONAL", "GELADO"],
      description: "Bebida preparada com café expresso e cubos de gelo",
    },
    {
      image: CafecomLeite,
      name: "Café com Leite",
      tags: ["TRADICIONAL", "COM LEITE"],
      description: "Meio a meio de expresso tradicional com leite vaporizado",
    },
    {
      image: Latte,
      name: "Latte",
      tags: ["TRADICIONAL", "COM LEITE"],
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    },
    {
      image: Capuccino,
      name: "Capuccino",
      tags: ["TRADICIONAL", "COM LEITE"],
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    },
    {
      image: Macchiato,
      name: "Macchiato",
      tags: ["TRADICIONAL", "COM LEITE"],
      description: "Café expresso misturado com um pouco de leite quente e espuma",
    },
    {
      image: Mocaccino,
      name: "Mocaccino",
      tags: ["TRADICIONAL", "COM LEITE"],
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
    },
    {
      image: ChocolateQuente,
      name: "Chocolate Quente",
      tags: ["ESPECIAL", "COM LEITE"],
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
    },
    {
      image: Cubano,
      name: "Cubano",
      tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    },
    {
      image: Havaiano,
      name: "Havaiano",
      tags: ["ESPECIAL"],
      description: "Bebida adocicada preparada com café e leite de coco",
    },
    {
      image: Arabe,
      name: "Árabe",
      tags: ["ESPECIAL"],
      description: "Bebida preparada com grãos de café árabe e especiarias",
    },
    {
      image: Irlandes,
      name: "Irlandês",
      tags: ["ESPECIAL", "ALCOÓLICO"],
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    },
  ];

  return (
    <MarketContainer>
      <h2>Nossos cafés</h2>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <CardComponent
              coffeeImage={product.image}
              tag1={product.tags[0]}
              tag2={product.tags[1]}
              tag3={product.tags[2]}
              title={product.name}
              description={product.description}
            />
          </li>
        ))}
      </ul>
    </MarketContainer>
  );
}
