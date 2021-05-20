import React, { Component } from "react";

import "./../Product/Header.scss";

const ConfirmationHeader = ({
  type,
  wheel,
  receiver,
  street,
  city,
  name,
  email
}) => {
  return (
    <div className='container confirmation'>
      {(type && (
        <>
          <div className='wrapper '>
            <div className='header header-copy-small'>
              <div>
                <h1>We've received your order</h1>
              </div>
            </div>
            <div className='header-small-info'>
              <div>
                <h4>Hi {name}!</h4>
                <h4>
                  Thanks for ordering a {type} Model with {wheel} wheels. We’ll
                  get back to you via: <br />
                  {email}
                </h4>
                <h4>
                  Delivery adress:
                  <br />
                  {receiver}
                  <br />
                  {street}
                  <br />
                  {city}
                  <br />
                </h4>
              </div>
            </div>
          </div>
        </>
      )) || <p>Error no order found</p>}
    </div>
  );
};

export default ConfirmationHeader;
