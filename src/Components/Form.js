import { useContext, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListContext from "./store/list-context";

function Formc() {
    const candyInputRef=useRef();
    const priceInputRef=useRef();
    const desInputRef=useRef();

    const listCtx = useContext(ListContext);
    
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredCandy = candyInputRef.current.value;
        const enteredDes = desInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        

        const candyI ={
            candyName: enteredCandy,
            des: enteredDes,
            price: enteredPrice
        }
        listCtx.addListItem({...candyI});
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>T-shirt</Form.Label>
        <Form.Control type="text" ref={candyInputRef} />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" ref={desInputRef} />
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" ref={priceInputRef} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandler}>
        Add Product
      </Button>
    </Form>
  );
}

export default Formc;
