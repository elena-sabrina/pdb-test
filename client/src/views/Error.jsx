import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./../components/Product/Header.scss";

export class Error extends Component {
  render() {
    return (
      <div className='container confirmation'>
        <div className='wrapper '>
          <div className='header header-copy-small'>
            <div>
              <h1>ERROR</h1>
              <p>There has been an error.</p>
              <button className='underline-button'>
                <Link to='/' className='Link'>
                  Back to home
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Error;
