import axios from "axios";
import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [itemsArr, setItemsArr] = useState([]);

  const addItemHandler = async (candy) => {
    setItemsArr([...itemsArr, candy]);

    await axios.post('https://crudcrud.com/api/665e1887aa3d4b3d8727dc7175231a4d/cart', candy);
  };

  const onRefresh = async () => {
    const res = await axios.get('https://crudcrud.com/api/665e1887aa3d4b3d8727dc7175231a4d/cart');
    const items = res.data;
    setItemsArr(items);
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const cartContext = {
    items: itemsArr,
    addItem: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
