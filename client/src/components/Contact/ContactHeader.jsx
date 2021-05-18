import React, { Component } from "react";

import "./../Product/Header.scss";

class ContactHeader extends Component {
  render() {
    return (
      <div className='container  contact-header'>
        <div className='wrapper'>
          <div className='header-copy'>
            <div>
              <h1>Contact</h1>
              <p>
                Blaa..Now you can develop your surfing skills in and out of the
                water. Improve your turns and learn to generate ...
              </p>
              <p>
                Jl. Umpeng Sari No.78, Padang Padang, Kec. Kuta Sel., Kabupaten
                Badung, Bali 80364
              </p>
              <p>Email </p>
              <p> Telefon</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactHeader;
