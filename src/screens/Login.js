import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { login } from '../redux/action/login';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {};      
    }

    handleSumit = (values) => {      
      if (this.props.auth.email === values.email && this.props.auth.password === values.password) {
        this.props.dispatch(login(true));
        this.props.history.push('/');
        toast.success("Logged in successfully");
      } else {
        toast.error("Invalid email / password");
      }
      
    }
  
      render() {
        return (
          <LoginForm  onSubmit={this.handleSumit}/>
        );
      }
  }
  
function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(Login);