import React, { Component } from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createOrder } from "./services/order.js";
import "./styles/main.css";

import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Product from "./views/Product";
import Checkout from "./views/Checkout";
import Confirmation from "./views/Confirmation";
import Contact from "./views/Contact";
import Scrolltest from "./views/Scrolltest";
import Error from "./views/Error";

export class App extends Component {
  constructor(props) {
    super(props);

    console.log("App props", this.props);

    this.state = {
      order: []
    };
  }

  handleCreateOrder = async (type, wheel) => {
    console.log("handleCreateOrder running");
    const data = {
      type,
      wheel
    };
    if (!type || !wheel) {
      alert("Please select type and wheel!");
    } else {
      const order = await createOrder(data);
      console.log("order app:", order);
      this.setState({
        order
      });
      console.log("order state app:", this.state.order);
      window.location.href = `/product/checkout/${order._id}`;
    }
  };

  render() {
    return (
      <BrowserRouter className='App'>
        <>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route
              path='/product'
              render={(props) => (
                <Product
                  {...props}
                  onConfigureChange={this.handleCreateOrder}
                />
              )}
              exact
            />
            <Route
              path='/product/checkout/:id'
              render={(props) => (
                <Checkout {...props} order={this.state.order} />
              )}
              exact
            />

            <Route
              path='/product/confirmation/:id'
              render={(props) => (
                <Confirmation {...props} order={this.state.order} />
              )}
              exact
            />

            <Route path='/contact' component={Contact} exact />
            <Route path='/scrolltest' component={Scrolltest} exact />
            <Route path='/error' component={Error} />

            <Redirect to='/error' />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
