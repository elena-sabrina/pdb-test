import React, { Component } from "react";

import "./Checkoutform.scss";

class Checkoutform extends Component {
  constructor(props) {
    super(props);
    console.log(" props", this.props);
    this.state = {
      name: "",
      email: "",
      adress: ""
    };
  }

  handleCheckoutChange = () => {
    const type = this.props.type;
    const wheel = this.props.wheel;
    const name = this.state.name;
    const email = this.state.email;
    const adress = this.state.adress;
    console.log("handleConfigureChange", type, wheel, name, email, adress);
    this.props.onCheckoutHasChanged(type, wheel, name, email, adress);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='wrapper form-wrapper'>
            <div className='form-title'>
              <div>
                <h2>Personal Details</h2>

                <p>
                  Thank you for your order. Tell us a bit more about yourself.
                </p>
              </div>
            </div>

            <form className='form'>
              <div>
                <h4> How can we reach you?</h4>
    

                <input
                  placeholder='Name'
                  id='input-name'
                  name='name'
                  type='text'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />

        

                <input
                placeholder='Email'
                  id='input-email'
                  name='email'
                  type='text'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <h4>Where should we send your order?</h4>

                <textarea
                  id='input-adress'
                  name='adress'
                  type='text'
                  rows='4'
                  cols='50'
                  value={this.state.adress}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <button
                  className='primary-button'
                  onClick={this.handleCheckoutChange}
                >
                  SEND ORDER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkoutform;
