import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";
import Logo2 from "../img/logo2.png";


const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);



  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo2} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/bakery">
            <h6>BAKERY</h6>
          </Link>
          <Link className="link" to="/beverage">
            <h6>BEVERAGE</h6>
          </Link>
          <Link className="link" to="/dairy">
            <h6>DAIRY</h6>
          </Link>
          <Link className="link" to="/fruits">
            <h6>FRUITS</h6>
          </Link>
          <Link className="link" to="/meat">
            <h6>MEAT</h6>
          </Link>
          <Link className="link" to="/vegetables">
            <h6>VEGETABLES</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/cart">
              Cart
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
