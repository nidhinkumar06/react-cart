import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addToCart, addItems} from '../redux/action';
import axios from 'axios';
import store from '../redux/store';
import {map, isNull, size} from 'lodash';
import bannerImg from '../images/banner.jpg';
import footerImg from '../images/footer.jpg';
import PieCharts from './PieChart'

import logo from '../images/logo.jpg';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'June', frozen: 2390, chilled: 5000, flakes: 2500, organic: 1000,
  },
  {
    name: 'July', frozen: 5000, chilled: 3500, flakes: 3500, organic: 2500,
  },
  {
    name: 'August', frozen: 2500, chilled: 4000, flakes: 1750, organic: 4000,
  },
  {
    name: 'September', frozen: 1000, chilled: 2000, flakes: 1990, organic: 5000,
  },
  {
    name: 'October', frozen: 4500, chilled: 1800, flakes: 3440, organic: 3500,
  },
  {
    name: 'November',frozen: 4900, chilled: 4800, flakes: 4439, organic: 1450,
  },
  {
    name: 'December', frozen: 3000, chilled: 3600, flakes: 3578, organic: 999,
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (id) => {
    this.props.addToCart(id);
  }

  render() {
    return (<div className="box dashboard">
      <div>
      <b>Recent sales</b>
      <LineChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="frozen" stroke="#40adef" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="chilled" stroke="#4b115e" />
      <Line type="monotone" dataKey="flakes" stroke="#2467ab" />
      <Line type="monotone" dataKey="organic" stroke="#8cc63f" />
    </LineChart>
  </div>
  <div>
  <b>Revenue by category(%)</b>
  <PieCharts />
</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
