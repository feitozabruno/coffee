import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContainer, CartAdress, CartPayment, CartAdressContent } from "./styles";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CartItems } from "./cartItems";
import { CartContext } from "../../context/CartContext";

export function Cart() {
  const navigate = useNavigate();
  const { cartItems, selectedOption, updateSelectedOption, resetCartItems } = useContext(CartContext);
  const { address, updateAddress } = useContext(CartContext);

  const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateAddress({ ...address, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    updateAddress(address);
    navigate("/sucess");
    resetCartItems();
  };

  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <div className="empty">
          <h1>Ops!</h1>
          <h2>O seu carrinho está vazio</h2>
          <p>Clique no botão abaixo para voltar a loja.</p>
          <Link to="/"><button>Voltar à loja</button></Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="col-1">
            <CartAdress>
              <h2>Complete seu pedido</h2>
              <CartAdressContent>
                <header>
                  <MapPinLine size={22} color="#C47F17" />
                  <div>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </header>
                <div className="address">
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="CEP"
                    value={address.cep}
                    onChange={handleAddressChange}
                    required
                  />
                  <input
                    type="text"
                    id="rua"
                    name="rua"
                    placeholder="Rua"
                    value={address.rua}
                    onChange={handleAddressChange}
                    required
                  />
                  <div className="child-3">
                    <input
                      type="text"
                      id="numero"
                      name="numero"
                      placeholder="Número"
                      value={address.numero}
                      onChange={handleAddressChange}
                      required
                    />
                    <div className="opcional">
                      <input
                        type="text"
                        id="complemento"
                        name="complemento"
                        placeholder="Complemento"
                        value={address.complemento}
                        onChange={handleAddressChange}
                      />
                      <span>Opcional</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Bairro"
                    value={address.bairro}
                    onChange={handleAddressChange}
                    required
                  />
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Cidade"
                    value={address.cidade}
                    onChange={handleAddressChange}
                    required
                  />
                  <input
                    type="text"
                    id="uf"
                    name="uf"
                    placeholder="UF"
                    value={address.uf}
                    onChange={handleAddressChange}
                    required
                  />
                </div>
              </CartAdressContent>
            </CartAdress>

            <CartPayment>
              <header>
                <CurrencyDollar size={22} color="#8047F8" />
                <div>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </header>
              <div className="cards">
                <div
                  className={`card ${selectedOption === "CARTÃO DE CRÉDITO" ? "selected" : ""}`}
                  onClick={() => updateSelectedOption("CARTÃO DE CRÉDITO")}
                >
                  <CreditCard size={16} color="#8047F8" />
                  <span>CARTÃO DE CRÉDITO</span>
                </div>

                <div
                  className={`card ${selectedOption === "CARTÃO DE DÉBITO" ? "selected" : ""}`}
                  onClick={() => updateSelectedOption("CARTÃO DE DÉBITO")}
                >
                  <Bank size={16} color="#8047F8" />
                  <span>CARTÃO DE DÉBITO</span>
                </div>
                <div
                  className={`card ${selectedOption === "DINHEIRO" ? "card selected" : ""}`}
                  onClick={() => updateSelectedOption("DINHEIRO")}
                >
                  <Money size={16} color="#8047F8" />
                  <span>DINHEIRO</span>
                </div>
              </div>
            </CartPayment>
          </div>
          <div className="col-2">
            <CartItems />
          </div>
        </form>
      )}
      
    </CartContainer>
  );
}
