import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "./store/cart-context";

function Cart() {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items)

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            {cartCtx.items.map((i) => (
              <li>
                <span style={{ padding: "10px" }}>{i.candyName}</span>
                <span style={{ padding: "10px" }}>{i.des}</span>
                <span style={{ padding: "10px" }}>{i.price}</span>
                <span style={{ padding: "10px" }}>
                  {i.quatity}
                </span>
              </li>
            ))}
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Buy</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Cart;
