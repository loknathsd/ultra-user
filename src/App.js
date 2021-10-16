import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import data from './fakeData/fakeData.json';
import User from './compoonents/User/User';
import Cart from './compoonents/Cart/Cart';

function App() {
  const [users,setUsers] = useState([]);
  const [cart,setCart] = useState([]);
  useEffect(()=>{
    setUsers(data)
  },[]);
   
  const handleAddParson=(user)=>{
    const newCart = [...cart,user]
    setCart(newCart);
    console.log(cart)
  }

  return (
    <div className="App">
      <h3>Added Person : {cart.length}</h3>
      <Cart cart ={cart} ></Cart>
      {
        users.map(user=><User handleAddParson ={handleAddParson} user ={user}></User>)
      }
     
    </div>
  );
}

export default App;
