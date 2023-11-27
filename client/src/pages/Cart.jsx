import React from 'react';
import '../css/bakery.css'; // Import your CSS file
import CartImage2 from "../img/cart2.jpg";
import Walmart from "../img/walmart.png";
import Freshco from "../img/freshco.png";
import Real from "../img/real.png";
import Safeway from "../img/safeway.png";

const Cart = () => {
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
      </div>

  </div>

  

  </div>
    
    
  );
}

export default Cart;
