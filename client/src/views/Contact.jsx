import React, { Component } from "react";

import ContactHeader from "../components/Contact/ContactHeader";
import Team from "../components/Contact/Team";
import ContactUs from "../components/Contact/ContactUs";

class Contact extends Component {
  render() {
    return (
      <div>
        <ContactHeader />

        <Team />
      </div>
    );
  }
}

export default Contact;
