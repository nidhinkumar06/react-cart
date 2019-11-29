import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {round} from 'lodash';
const Navbar = (props) => {
  const {cartItems, total} = props;
  return (<nav className="nav-wrapper">
    <div className="container">
      <Link to="/" className="brand-logo">Lutosa Shopping</Link>

      <ul className="right">
        {cartItems.length > 0 && <li>Total $:{round((total), 2).toFixed(2)}</li>}
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
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
