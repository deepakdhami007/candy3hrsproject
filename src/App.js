import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Formc from "./Components/Form";
import Header from "./Components/Header";
import CartContext from "./Components/store/cart-context";
import CartProvider from "./Components/store/CartProvider";
import ListProvider from "./Components/store/ListProvider";
import StoreList from "./Components/StoreList";

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const visibleCartHandler = () => {
    if (cartVisible == false) {
      setCartVisible(true);
    } else {
      setCartVisible(false);
    }
  };

  return (
    <CartProvider>
    <ListProvider>
  
        <Header cartHandler={visibleCartHandler} />
        <Formc />
        <StoreList />
        {cartVisible && <Cart />}
      
    </ListProvider>
    </CartProvider>
  );
}

export default App;
