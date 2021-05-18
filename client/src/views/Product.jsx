import React, { Component } from "react";

import Header from "../components/Product/Header";
import Configure from "../components/Product/Configure";

//import "./Home.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    console.log("product props", this.props);
    //this.state = {
    //  surfskate: "asdf"
    // };
  }

  /*

   <Order type={this.props.type} wheel={this.props.wheel} />
        */

  render() {
    return (
      <div>
        <Header />
        <Configure
          type={this.props.type}
          wheel={this.props.wheel}
          name={this.props.name}
          receiver={this.props.receiver}
          street={this.props.street}
          city={this.props.city}
          email={this.props.email}
          onConfigureHasChanged={this.props.onConfigureChange}
        />
      </div>
    );
  }
}

export default Product;
