import React, { Component } from "react";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className='container header '>
        <div className='wrapper'>
          <div className='header-copy'>
            <div>
              <h1>
                Choose <br />
                your Surfskate
              </h1>
              <p>
                Choose your surfskate models and colors. Delivery only in Bali.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
