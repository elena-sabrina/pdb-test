import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./TeaserTwo.scss";

class TeaserTwo extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='title'>
            <div>
              <h2>Models</h2>
            </div>
          </div>
          <div className='teaser-one'>
            <div>
              <h4 className='heavier'>ECHO</h4>
              <p>
                Your hybrid PDB. Enhance your pumping and turns with a classic
                skateboard feeling.
              </p>
              <button className='underline-button'>
                <Link to='/product' className='Link'>
                  Order now
                </Link>
              </button>
            </div>
          </div>

          <div className='teaser-two'>
            <h4 className='heavier'>ULU</h4>

            <p>
              Your advanced PDB. Perform radical turns and maneuvers with the
              most surf-like feeling.
            </p>
            <button className='underline-button'>
              <Link to='/product' className='Link'>
                Order now
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TeaserTwo;
