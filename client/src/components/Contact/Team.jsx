import React, { Component } from "react";

import "./../Home/TeaserTwo.scss";

class Team extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='title'>
            <div>
              <h2>Meet the Team</h2>
            </div>
          </div>
          <div className='teaser-one'>
            <div>
              <h4>Brady</h4>
              <p>
                Your hybrid PDB. Enhance your pumping and turns with a classic
                skateboard feeling.
              </p>
            </div>
          </div>

          <div className='teaser-two'>
            <h4>Paul</h4>

            <p>
              Your advanced PDB. Perform radical turns and maneuvers with the
              most surf-like feeling.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
