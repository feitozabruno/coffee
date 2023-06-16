import React, { createContext, useState, ReactNode } from "react";

// Defina a interface para os itens do carrinho
interface CartItem {
  name: string;
  price: number;
  image: string;
  amount: number;
}

// Defina a interface para o endereço
interface Address {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

// Defina a interface para o contexto do carrinho
interface CartContextType {
  cartItems: CartItem[];
  address: Address;
  selectedOption: string;
  addToCart: (item: CartItem) => void;
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeItem: (name: string) => void;
  updateAddress: (newAddress: Address) => void;
  updateSelectedOption: (option: string) => void;
  resetCartItems: () => void;
}

// Crie o contexto do carrinho
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  address: {
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  },
  selectedOption: "",
  resetCartItems: () => {
    // Implementação padrão vazia
  },
  addToCart: () => {
    // Implementação padrão vazia
  },
  increaseQuantity: () => {
    // Implementação padrão vazia
  },
  decreaseQuantity: () => {
    // Implementação padrão vazia
  },
  removeItem: () => {
    // Implementação padrão vazia
  },
  updateAddress: () => {
    // Implementação padrão vazia
  },
  updateSelectedOption: () => {
    // Implementação padrão vazia
  },
});

// Crie o provedor do contexto
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [address, setAddress] = useState<Address>({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [selectedOption, setSelectedOption] = useState<string>("CARTÃO DE CRÉDITO");

  const updateSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  const resetCartItems = () => {
    setCartItems([]);
  };

  // Função para adicionar item ao carrinho
  const addToCart = (item: CartItem) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);
    if (itemIndex !== -1) {
      // O item já está no carrinho, incrementa a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].amount += 1;
      setCartItems(updatedCartItems);
    } else {
      // O item não está no carrinho, adiciona com quantidade 1
      setCartItems((prevItems) => [...prevItems, { ...item, amount: 1 }]);
    }
  };

  // Função para aumentar a quantidade de um item no carrinho
  const increaseQuantity = (name: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  // Função para diminuir a quantidade de um item no carrinho
  const decreaseQuantity = (name: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  // Função para remover um item do carrinho
  const removeItem = (name: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.name !== name)
    );
  };

  // Função para atualizar o endereço
  const updateAddress = (newAddress: Address) => {
    setAddress(newAddress);
  };

  console.log(address);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity, removeItem, address,updateAddress, selectedOption, updateSelectedOption, resetCartItems }}>
      {children}
    </CartContext.Provider>
  );
};
