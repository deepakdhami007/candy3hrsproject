import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "./store/cart-context";
import ListContext from "./store/list-context";

const StoreList = (props) => {
  const listCtx = useContext(ListContext);
  const cartCtx = useContext(CartContext);


  const clickBuyOne = (event) => {
      const ele = event.target.parentElement.value;
    //   console.log(listCtx.items[ele])
    
    const eleTitem = {...listCtx.items[ele], quatity: 1}
    cartCtx.addItem({...eleTitem})
  };
  const clickBuyTwo = (event) => {
    const ele = event.target.parentElement.value;
    const eleTitem = {...listCtx.items[ele], quatity: 2}

    cartCtx.addItem({...eleTitem})
  };
  const clickBuyThree = (event) => {
    const ele = event.target.parentElement.value;
    const eleTitem = {...listCtx.items[ele], quatity: 3}
    cartCtx.addItem({...eleTitem})
  };

  return (
    <ul>
      {listCtx.items.map((i) => (
        <li style={{ padding: "10px" }} key={i.price}>
          <span style={{ padding: "10px" }}>{i.candyName}</span>
          <span style={{ padding: "10px" }}>{i.des}</span>
          <span style={{ padding: "10px" }}>{i.price}</span>
          <button style={{ padding: "10px" }} onClick={clickBuyOne}>
            Buy One
          </button>
          <Button style={{ padding: "10px" }} onClick={clickBuyTwo}>
            Buy Two
          </Button>
          <Button style={{ padding: "10px" }} onClick={clickBuyThree}>
            Buy Three
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default StoreList;
