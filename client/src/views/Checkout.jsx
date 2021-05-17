import React, { Component } from "react";

import CheckoutHeader from "../components/Checkout/CheckoutHeader";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import Summary from "../components/Checkout/Summary";

import { loadOrderforCheckout, finalizeOrder } from "./../services/order.js";

class Checkout extends Component {
  state = {
    type: "",
    wheel: "",
    adress: "",
    name: "",
    email: ""
  };

  async componentDidMount() {
    const order = await loadOrderforCheckout(this.props.match.params.id);
    console.log("order in confirmation", order.type);
    const { type, wheel } = order;
    console.log(type);
    this.setState({
      type,
      wheel
    });
    console.log(this.state.type);
  }

  handleFinalizeOrder = async (type, wheel, name, email, adress) => {
    console.log("handleFinalizeOrder running");
    const data = {
      type,
      wheel,
      name,
      email,
      adress
    };
    const order = await finalizeOrder(this.props.match.params.id, data);
    console.log("going to set state");
    this.setState({
      order
    });
    console.log("going to REDIRECT");
    window.location.href = `/product/confirmation/${order._id}`;
  };

  /*  <Summary
          type={this.state.type}
          wheel={this.state.wheel}
          adress={this.state.adress}
          name={this.state.name}
          location={this.state.location}
        />
        
        */

  render() {
    const { type, wheel, name, email, adress } = this.state;
    return (
      <div>
        {(type && (
          <>
            <CheckoutHeader type={type} wheel={wheel} />
            <CheckoutForm
              type={type}
              wheel={wheel}
              onCheckoutHasChanged={this.handleFinalizeOrder}
            />
            <h1>{name}</h1>
          </>
        )) || <p>Error no order found</p>}
      </div>
    );
  }
}

export default Checkout;
