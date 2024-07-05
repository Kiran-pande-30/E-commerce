// Navbar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

// Assets
import logo from '../Assets/Admin_Assets/nav-logo.svg';
import cart_icon from '../Assets/Admin_Assets/Product_Cart.svg';
import { ShopContext } from '../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='' size={34} />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
