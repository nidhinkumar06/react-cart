import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import logo from '../images/appLogo.jpg';
import InputBox from '../components/InputBox';
import validate from './validate';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        return (
          <div class="valign-wrapper row login-box">
             <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                 <form onSubmit={this.props.handleSubmit}>
                    <div class="card-content">
                       <img src={logo} className="center" />
                       <div class="row">
                          <div class="input-field col s12">
                            <Field
                              name="email"
                              component={InputBox}
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div class="input-field col s12">
                            <Field
                              name="password"
                              component={InputBox}
                              type="password"
                              placeholder="Password"
                            />
                          </div>
                        </div>
                        <div class="center">
                       <button class="btn waves-effect waves-light">Login
                        </button>
                    </div>
                    </div>
                    
                 </form>
             </div>
          </div>
        );
    }
}

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
