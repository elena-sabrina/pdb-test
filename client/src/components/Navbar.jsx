import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoscreenshot from "./../styles/images/logoscreenshot.png";
import close from "./../styles/images/close.svg";
import openmenu from "./../styles/images/openmenu.svg";
import "./Navbar.scss";
import "./NavbarAnimations.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: "closed"
    };
  }

  handleHamburgerClick = () => {
    const hamburger = this.state.hamburger;
    if (hamburger === "closed") {
      this.setState({
        hamburger: "open"
      });
    } else {
      this.setState({
        hamburger: "closed"
      });
    }
  };

  render() {
    const hamburger = this.state.hamburger;
    return (
      <div>
        {(hamburger === "closed" && (
          <div className='Nav'>
            <div className='Navbar'>
              <Link to='/' className='Link'>
                <img className='logo link' src={logoscreenshot} alt='logo' />
              </Link>

              <div
                className='hamburger hamburger-closed'
                onClick={this.handleHamburgerClick}
              >
                <img className='link' src={openmenu} alt='logo' />
              </div>
            </div>
          </div>
        )) || (
          <div className='Flyout'>
            <div className='Nav'>
              <div className='Navbar-open'>
                <img
                  className='link closeimage'
                  onClick={this.handleHamburgerClick}
                  src={close}
                  alt='close-button'
                />
              </div>

              <div className='wrapper'>
                <div className='flyout-body'>
                  <ul>
                    <li className='underline-navlinks'>
                      <Link
                        to='/'
                        className='Link'
                        onClick={this.handleHamburgerClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li className='underline-navlinks'>
                      <Link
                        to='/product'
                        className='Link'
                        onClick={this.handleHamburgerClick}
                      >
                        Order
                      </Link>
                    </li>

                    <li className='underline-navlinks'>
                      <Link
                        to='/contact'
                        className='Link'
                        onClick={this.handleHamburgerClick}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
