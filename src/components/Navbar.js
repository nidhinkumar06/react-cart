import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
const Navbar = (props) => {
  const {cartItems} = props;
  console.log("cart items", cartItems);
  return (<nav className="nav-wrapper">
    <div className="container">
      <Link to="/" className="brand-logo">Shopping</Link>

      <ul className="right">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">My cart {cartItems.length > 0 && <span className="badge white">{cartItems.length}</span>}
          </Link>

        </li>
      </ul>
    </div>
  </nav>)
}

const mapStateToProps = (state) => {
  return {cartItems: state.cart.addedItems}
}

export default connect(mapStateToProps)(Navbar);
