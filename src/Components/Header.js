import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartContext from './store/cart-context';


function BasicExample(props) {

   const cartCtx = useContext(CartContext)

   let q = 0

   cartCtx.items.forEach(element => {
       q += Number(element.quatity)
       
   });

    const clickCartHandler = (event)=>{
        props.cartHandler();
    }
  return (
    <Navbar expand="lg" bg='dark' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Candy Store</Navbar.Brand>
      </Container>
      <Button variant="warning" onClick={clickCartHandler}>Cart {q}</Button>
    </Navbar>
  );
}

export default BasicExample;