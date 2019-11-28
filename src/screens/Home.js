import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart, addItems} from '../redux/action';
import axios from 'axios';
import store from '../redux/store';
import {map, isNull, size} from 'lodash';

import logo from '../images/logo.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('https://my-bookshop-srv-fluent-platypus.cfapps.eu10.hana.ondemand.com/catalog/Products').then(response => {
      const cartData = map(response.data.value, (data) => {
        return {
          id: data.ID,
          title: data.Name,
          desc: data.Description,
          price: data.Price,
          img: logo,
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
    let itemList = this.props.items.map(item => {
      return (<div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title}/> {
            isNull(item.discoutinuedDate) && <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => {
                  this.handleClick(item.id)
                }}>
                <i className="material-icons">shopping_cart</i>
              </span>
          }

        </div>

        {
          !isNull(item.discoutinuedDate)
            ? (<div className="card-content">
              <span className="card-title">{item.title}</span>
              <p>Out of Stock</p>
            </div>)
            : (<div className="card-content">
              <span className="card-title">{item.title}</span>
              <p>{item.desc}</p>
              <p>
                <b>Price: ${item.price}</b>
              </p>
            </div>)
        }

      </div>)
    })

    return (<div className="container">
      <h3 className="center">Our items</h3>
      <div className="box">
        {itemList}
      </div>
      {size(this.props.items)<=0 &&
        <h3 className="center">
          <div class="preloader-wrapper small active">
            <div class="spinner-layer spinner-green-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
              </div>
            </div>
          </div>
        </h3>
      }
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
