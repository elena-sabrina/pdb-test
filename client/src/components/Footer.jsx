import React, { Component } from "react";
import { Link } from "react-router-dom";
import insta from "./../styles/images/insta.png";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className='container footer'>
        <div className='wrapper'>
          <div className='adress'>
            <div>
              <h4>PDB Surfskates</h4>
              <p>
                711-2880 Nulla St.
                <br />
                Mankato Mississippi 96522
                <br />
                (257) 563-7401
              </p>
              <br />

              <button className='underline-button-reverse'>
                <a href='mailto: pdbsurfskates@gmail.com'>
                  pdbsurfskates@gmail.com
                </a>
              </button>
            </div>
          </div>
          <div className='about'>
            <h4>About us</h4>
            <p className='p-adding-line-height'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sunt iure.{" "}
            </p>
            <br />
            <br />
            <div className='links'>
              <a
                href='https://www.instagram.com/pdbsurfskates/'
                className='Link'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img className='insta link' src={insta} alt='logo' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
