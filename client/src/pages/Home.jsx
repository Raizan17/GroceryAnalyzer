import React from 'react';
import '../css/Home.css'; // Import your CSS file

import Mango from "../img/mango.jpg";
import Bread from "../img/bread.jpg";
import Onions from "../img/onions.jpg";
import Tomato from "../img/tomato.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1 className="main-heading">Welcome to The Grocery Analyzer!</h1>
        <p className="sub-heading">Fresh and Delicious Groceries Just for You</p>
        {/* Add any other header content or navigation here */}
      </header>

      <section className="featured-products">
        <h2 className="section-heading">Featured Products</h2>
        <div className="product-container">
          {/* Add featured product components or images here */}
          <div className="product">
            <img src={Bread} alt="" />
            <p>Western Family Bread</p>
          </div>
          <div className="product">
            <img src={Mango} alt="Featured Product 2" />
            <p>Fresh Mangoes</p>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <h2 className="section-heading">Special Offers</h2>
        <div className="offer-container">
          {/* Add special offer components or images here */}
          <div className="offer">
            <img src={Onions}alt="Special Offer 1" />
            <p>Red and White Onions (Buy 2 pounds get 1 pound for free!)</p>
          </div>
          <div className="offer">
            <img src={Tomato} alt="Special Offer 2" />
            <p>Fresh Tomatoes (Buy 2 pounds get 1 pound for free!)</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2 className="section-heading">About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu mauris vel ligula
          tincidunt condimentum.
        </p>
        {/* Add any other content about your grocery store */}
      </section>

      <footer>
        <p>&copy; 2023 TheGroceryAnalyzer</p>
        {/* Add any other footer content or links here */}
      </footer>
    </div>
  );
};

export default Home;