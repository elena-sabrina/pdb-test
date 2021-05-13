import React, { Component } from "react";

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
          <div className='wrapper'>
            <div className='title'>
              <div>
                <h2>Personal Details</h2>

                <p>...</p>
              </div>
            </div>
            <form className='teaser-one'>
              <div>
                <h4>Name</h4>

                <input
                  id='input-name'
                  name='name'
                  type='text'
                  placeholder='Name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <h4>Email</h4>

                <input
                  id='input-email'
                  name='email'
                  type='text'
                  placeholder='Email'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div>
                <h4>Location</h4>

                <input
                  id='input-adress'
                  name='adress'
                  type='text'
                  placeholder='Adress'
                  value={this.state.adress}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className='container'>
          <div className='wrapper TeaserButton'>
            <div>
              <button
                className='choose-type-teaser type-two'
                onClick={this.handleCheckoutChange}
              >
                Buuuuuuuttton
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkoutform;
