import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../../styles/General.scss";

class TeaserButtonHome extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper TeaserButton'>
          <div>
            <button className='primary-button'>
              <Link to='/product' className='Link'>
                Buy now
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserButtonHome;
