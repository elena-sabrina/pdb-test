import React, { Component } from "react";

import "./../Home/TeaserTwo.scss";
import brady from "./../../styles/images/brady.mp4";
import paul from "./../../styles/images/paul.png";

import "./Team.scss";

class Team extends Component {
  render() {
    return (
      <div className='container'>
        <div className='wrapper'>
          <div className='title-contact'>
            <div>
              <h2>Meet the Team</h2>
            </div>
          </div>
          <div className='teaser-contact-one'>
            <div>
              <video
                className='team-image'
                source
                loop
                autoPlay
                muted
                id='team-image'
                src={brady}
                //poster={image1}
                ref={this.handleVideoMounted}
              />
              <h4>Brady</h4>
              <p>
                Your hybrid PDB. Enhance your pumping and turns with a classic
                skateboard feeling.
              </p>
            </div>
          </div>

          <div className='teaser-contact-two'>
            <img className='team-image' src={paul} alt='paul' />
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
