import React, { Component } from "react";
import { Link } from "react-router-dom";

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

              <p>hello@pdbsurfskates.com</p>
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
              <Link to='/' className='Link'>
                Home
              </Link>
              <Link to='/product' className='Link'>
                Order
              </Link>

              <Link to='/contact' className='Link'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
