import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../../styles/General.scss";

class TeaserButtonHome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper TeaserButton'>
          <div>
            <h2>
              This is an animating copy so they click on the button. It'
              important.
            </h2>
            <button className='primary-button'>
              <Link to='/product' className='Link'>
                ORDER
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserButtonHome;
