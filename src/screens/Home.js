import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart, addItems} from '../redux/action';
import axios from 'axios';
import store from '../redux/store';
import {map, isNull, size} from 'lodash';
import bannerImg from '../images/banner.jpg';
import footerImg from '../images/footer.jpg';
import c1 from '../images/c1.jpeg';
import c2 from '../images/c2.jpeg';
import c3 from '../images/c3.jpeg';
import c4 from '../images/c4.jpeg';


import logo from '../images/logo.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://services.odata.org/V3/OData/OData.svc/Products').then(response => {
      const cartData = map(response.data.value, (data) => {
        return {
          id: data.ID,
          title: data.Name,
          desc: data.Description,
          price: data.Price,
          img: data.Image || logo,
          discoutinuedDate: data.DiscontinuedDate,
          quantity: 0
        };
      });
      store.dispatch(addItems(cartData));
    }).catch(error => {
      console.log('Error', error);
    });
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
        <img src={c1} alt="Lutosa" className="app-category-image"/>
        <img src={c2} alt="Lutosa" className="app-category-image"/>
        <img src={c3} alt="Lutosa" className="app-category-image"/>
        <img src={c4} alt="Lutosa" className="app-category-image"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
