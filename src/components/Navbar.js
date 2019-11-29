import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {round} from 'lodash';
import appLogo from '../images/appLogo.jpg';

const Navbar = (props) => {
  const {cartItems, total} = props;
  return (<nav className="nav-wrapper app-nav">
    <div className="container">
      <Link to="/" className="brand-logo">
      <img src={appLogo} alt="Lutosa" />
      <span className="app-logoName">ONLINE STORE</span>
      </Link>

      <ul className="right">
        {cartItems.length > 0 && <li>Total $:{round((total), 2).toFixed(2)}</li>}
        <li className="app-link">
          <Link to="/">Home</Link>
        </li>
        <li className="app-link">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="app-link">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="app-link">
          <Link to="/cart">My cart {cartItems.length > 0 && <span className="badge white">{cartItems.length} item(s)</span>}
          </Link>
        </li>
      </ul>
    </div>
  </nav>)
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.addedItems,
    total: state.cart.total
  }
}

export default connect(mapStateToProps)(Navbar);
