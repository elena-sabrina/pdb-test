import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoscreenshot from "./../styles/images/logoscreenshot.png";
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
                <img className='logo logo-link' src={logoscreenshot} alt='logo' />
              </Link>

              <div className='hamburger hamburger-closed' onClick={this.handleHamburgerClick}>
                <div className='line lineone'></div>
                <div className='line linetwo'></div>
                <div className='line linethree'></div>
              </div>
            </div>
          </div>
        )) || (
          <div className='Flyout'>
            <div className='Nav'>
              <div className='Navbar'>
                <img className='logo' src={logoscreenshot} alt='logo' />

                <div className='hamburger hamburger-open' onClick={this.handleHamburgerClick}>
                  <div className='line lineone'></div>
                  <div className='line linetwo'></div>
                  <div className='line linethree'></div>
                </div>
              </div>

              <div className='wrapper'>
                <div className='flyout-body'>
                  <ul>
                    <li>
                      <Link
                        to='/'
                        className='Link'
                        onClick={this.handleHamburgerClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/product'
                        className='Link'
                        onClick={this.handleHamburgerClick}
                      >
                        Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='Link'
                        onClick={this.handleHamburgerClick}
                      >
                        About
                      </Link>
                    </li>
                    <li>
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
