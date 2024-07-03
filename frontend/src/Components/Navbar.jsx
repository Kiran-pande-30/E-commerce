import {React, useState} from 'react';
import '../style/Navbar.css';

//Assets
import logo from '../Assets/Admin_Assets/nav-logo.svg'
import cart_icon from '../Assets/Admin_Assets/Product_Cart.svg'
export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' size={34}/>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}>Shop{menu === "shop" ? <hr/>: <></>}</li>
        <li onClick={() => {setMenu("mens")}}>Mens{menu === "mens" ? <hr/>: <></>}</li>
        <li onClick={() => {setMenu("women")}}>Women{menu === "women" ? <hr/>: <></>}</li>
        <li onClick={() => {setMenu("kids")}}>Kids{menu === "kids" ? <hr/>: <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=''/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
