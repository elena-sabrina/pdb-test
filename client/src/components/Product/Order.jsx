import React, { Component } from "react";

import "./Order.scss";

class Order extends Component {
  constructor(props) {
    super(props);
    console.log("order props:", this.props);
    //this.state = {
    //  surfskate: "asdf"
    // };
  }
  render() {
    const wheelprops = this.props.wheel;
    const typeprops = this.props.type;
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='order-title'>
            <div>
              <h2>Order</h2>
              <p>
                {typeprops}
                {wheelprops}
              </p>
            </div>
          </div>
          <div className='order'>
            <table>
              <div className='foreach'>
                <tr>
                  <td>
                    <h4>Surfskate 1</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Type: ECHO</p>
                  </td>

                  <td>
                    <p>200.000 IDR</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Wheels: Green</p>
                  </td>

                  <td>
                    <p>50.000 IDR</p>
                  </td>
                </tr>
                <hr />
              </div>
              <tr>
                <td>
                  <p>Total</p>
                </td>

                <td>
                  <p>250.000 IDR</p>
                </td>
              </tr>
            </table>

            <div>
              <button>Order now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Order;
