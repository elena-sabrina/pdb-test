import React, { Component } from "react";
import { Link } from "react-router-dom";

import { loadOrderforConfirmation } from "./../services/order.js";

export class Confirmation extends Component {
  state = {
    type: "",
    wheel: "",
    adress: "",
    name: "",
    email: ""
  };

  async componentDidMount() {
    const order = await loadOrderforConfirmation(this.props.match.params.id);
    console.log("order in confirmation", order.type);
    const { type, wheel, adress, name, email } = order;
    console.log(type);
    this.setState({
      type,
      wheel,
      adress,
      name,
      email
    });

    console.log(this.state.type);
  }
  render() {
    const { type, wheel, adress, name, email } = this.state;
    return (
      <div className='container header '>
        {(type && (
          <>
            <div className='wrapper'>
              <div className='header-copy'>
                <div>
                  <h1>Hey {name},</h1>
                  <h4>
                    Thanks for ordering a {type} Model with {wheel} wheels.
                    We’ll get back to you via:
                    {email}
                  </h4>
                  <h4>
                    Your adress:
                    {adress}
                  </h4>
                </div>
              </div>
            </div>
          </>
        )) || <p>Error no order found</p>}
      </div>
    );
  }
}
export default Confirmation;
