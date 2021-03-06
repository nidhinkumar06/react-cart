import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart} from '../redux/action';
import bannerImg from '../images/banner.jpg';
import footerImg from '../images/footer.jpg';
import c1 from '../images/c1.jpeg';
import c2 from '../images/c2.jpeg';
import c3 from '../images/c3.jpeg';
import c4 from '../images/c4.jpeg';
import {Link} from 'react-router-dom';
import { compose } from 'redux';
import withAuthentication from '../hoc/withAuthentication';


import logo from '../images/logo.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render() {
    return (<div className="container">
      <img src={bannerImg} alt="Lutosa" className="app-home-banner"/>
      <div>
        <b>More than just potatoes</b>
        <p>
          Aside from frozen pre-fried french fries and
          refrigerated fresh pre-fried french fries,
          Lutosa produces potato flakes and a very wide
          range of frozen potato specialities.
          It also supplies an organic range composed of frozen
          french fries and specialities and flakes.
        </p>
        <p>
          Most Lutosa products are made from potatoes belonging
          to the Bintje variety, recognised for its excellent taste,
          its beautifully-coloured flesh and its exceptional culinary
          quality. For french fries, different varieties are used so as
          to precisely meet the specific needs of customers (Fontane,
          Asterix, Agria etc.).
        </p>
        <br />
        <div>
        <Link to="/shop?category=frozen"><img src={c1} alt="Lutosa" className="app-category-image"/></Link>
        <Link to="/shop?category=chilled"><img src={c2} alt="Lutosa" className="app-category-image"/></Link>
        <Link to="/shop?category=flakes"><img src={c3} alt="Lutosa" className="app-category-image"/></Link>
        <Link to="/shop?category=organic"><img src={c4} alt="Lutosa" className="app-category-image"/></Link>
        </div>
      </div>
      <img src={footerImg} alt="Lutosa" className="app-home-banner"/>
    </div>)
  }

}

const mapStateToProps = (state) => {
  return {items: state.cart.items}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

export default compose(
  withAuthentication(),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
