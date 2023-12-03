import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import CartImage2 from "../img/cart2.jpg";

import { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {

  const[CartList, setCartList] = useState([]);
  const[Cart2List, setCart2List] = useState(0);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const resCartList = await axios.get("/carts");     
        setCartList(resCartList.data);

        const resCart2List = await axios.get("/carts/2");
        setCart2List(resCart2List.data[0]['Sum(Price)']);

        

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);



  return (
    <div>
    {/* CART*/}
  
  
    <div className="centered-box">
      {/* First Row: Big Image */}
      <div className="rowA">
        <img src={CartImage2} alt="" className="big-image" />
      </div>

      {/* Second Row: Text */}
      <div className="rowA">
        <p>MY CART</p>
      </div>

     {/* CART INFO */}
    
      <div className="rowItems">
        <p>MY CART INFORMATION</p>

        <h1>Total Price: {Cart2List}</h1>
        {CartList.map((val) => {
      return <h1> Item Name: {val.Item_Name} | Price: {val.Price} </h1>
    })}


       
  

      </div>

  </div>

  

  </div>
    
    
  );
}

export default Cart;
