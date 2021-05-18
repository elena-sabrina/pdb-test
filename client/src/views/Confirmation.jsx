import React, { Component } from "react";
import { Link } from "react-router-dom";

import { loadOrderforConfirmation } from "./../services/order.js";
import ConfirmationHeader from "./../components/Confirmation/ConfirmationHeader.jsx";

export class Confirmation extends Component {
  state = {
    type: "",
    wheel: "",
    receiver: "",
    street: "",
    city: "",
    name: "",
    email: ""
  };

  async componentDidMount() {
    const order = await loadOrderforConfirmation(this.props.match.params.id);
    console.log("order in confirmation", order.type);
    const { type, wheel, receiver, street, city, name, email } = order;
    console.log(type);
    this.setState({
      type,
      wheel,
      receiver,
      street,
      city,
      name,
      email
    });

    console.log(this.state.type);
  }
  render() {
    const { type, wheel, receiver, street, city, name, email } = this.state;
    return (
      <div>
        <ConfirmationHeader
          type={this.state.type}
          wheel={this.state.wheel}
          name={this.state.name}
          receiver={this.state.receiver}
          street={this.state.street}
          city={this.state.city}
          email={this.state.email}
        />
      </div>
    );
  }
}
export default Confirmation;
