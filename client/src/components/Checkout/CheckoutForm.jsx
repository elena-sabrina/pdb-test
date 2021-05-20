import React, { Component } from "react";

import "./Checkoutform.scss";

class Checkoutform extends Component {
  constructor(props) {
    super(props);
    console.log(" props", this.props);
    this.state = {
      name: "",
      email: "",
      receiver: "",
      street: "",
      city: ""
    };
  }

  handleCheckoutChange = () => {
    const { type, wheel } = this.props;

    const { name, email, receiver, street, city } = this.state;

    console.log(
      "handleConfigureChange",
      type,
      wheel,
      name,
      email,
      receiver,
      street,
      city
    );
    this.props.onCheckoutHasChanged(
      type,
      wheel,
      name,
      email,
      receiver,
      street,
      city
    );
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
          {/* <div className='form-title'>
              <div>
                <h2>Personal Details</h2>

                <p>
                  Thank you for your order. Tell us a bit more about yourself.
                </p>
              </div>
            </div>*/}

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
                <input
                  id='input-receiver'
                  name='receiver'
                  type='text'
                  rows='1'
                  cols='50'
                  placeholder='Receiver / Villa name'
                  value={this.state.receiver}
                  onChange={this.handleInputChange}
                  required
                />
                <br />
                <input
                  id='input-street'
                  name='street'
                  type='text'
                  rows='1'
                  cols='50'
                  placeholder='Street name, number'
                  value={this.state.street}
                  onChange={this.handleInputChange}
                  required
                />
                <br />
                <input
                  id='input-city'
                  name='city'
                  type='text'
                  rows='1'
                  cols='50'
                  placeholder='Village, Districts, Regencies, Province'
                  value={this.state.city}
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
