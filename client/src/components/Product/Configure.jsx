import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.svg";
import ULU from "./../../styles/images/ULU.svg";
import wheel from "./../../styles/images/wheel.png";

import "./ChooseWheels.scss";
import "./ChooseType.scss";
import "./Summary.scss";

class Configure extends Component {
  constructor(props) {
    super(props);
    console.log("Configure props", this.props);
    this.state = {
      type: "",
      wheel: ""
    };
  }

  handleTypeChange = (type) => {
    this.setState({
      type: type
    });

    console.log("handleTypeChange", this.state.type, this.state.wheel);

    //this.props.onTypeHasChanged(type);
  };

  handleWheelChange = (wheel) => {
    this.setState({
      wheel: wheel
    });
    console.log("handleTypeChange", this.state.type, this.state.wheel);

    //this.props.onWheelHasChanged(wheel);
  };

  handleConfigureChange = () => {
    const type = this.state.type;
    const wheel = this.state.wheel;
    console.log("handleConfigureChange", type, wheel);
    this.props.onConfigureHasChanged(type, wheel);
  };

  render() {
    const typestate = this.state.type;

    const wheelstate = this.state.wheel;

    return (
      <div>
        <div className='container'>
          <div className='wrapper'>
            <div className='choose-type-title'>
              <div>
                <h2>Type</h2>

                <p>
                  Select one of our surfskate models to improve your surf.
                  Remember the ulu model is for ... while the echo helps you
                  improve.
                </p>
              </div>
            </div>

            <div className='types'>
              <button
                className='choose-type-teaser type-one'
                onClick={() => this.handleTypeChange("echo")}
              >
                {(typestate === "echo" && (
                  <div className='selection selected-type'>
                    <img src={ECHO} alt='surfskateimage' />
                    <div>
                      <h4>ECHO</h4>
                      <p className='p'>Your hybrid PDB.</p>
                      <p>2.500.000 IDR</p>
                    </div>
                  </div>
                )) || (
                  <div className='selection not-selected-type'>
                    <img src={ECHO} alt='surfskateimage' />
                    <div>
                      <h4>ECHO</h4>
                      <p className='p'>Your hybrid PDB.</p>
                      <p>2.500.000 IDR</p>
                    </div>
                  </div>
                )}
              </button>

              <button
                className='choose-type-teaser type-two'
                onClick={() => this.handleTypeChange("ulu")}
              >
                {(typestate === "ulu" && (
                  <div className='selection selected-type'>
                    <img src={ULU} alt='surfskateimage' />
                    <div>
                      <h4>ULU</h4>
                      <p className='p'>Your advanced PDB.</p>
                      <p>2.500.000 IDR</p>
                    </div>
                  </div>
                )) || (
                  <div className='selection not-selected-type'>
                    <img src={ULU} alt='surfskateimage' />
                    <div>
                      <div>
                        <h4>ULU</h4>
                        <p className='p'>Your advanced PDB.</p>
                        <p>2.500.000 IDR</p>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='wrapper'>
            <div className='choose-wheels-title'>
              <div>
                <h2>Wheels</h2>
                <p>
                  We choose the best wheeltype for you. Now you only need to
                  choose the color.
                </p>
              </div>
            </div>
            <div className='wheels'>
              <button
                className='choose-wheels-teaser wheel-one'
                onClick={() => this.handleWheelChange("white")}
              >
                {(wheelstate === "white" && (
                  <div className='choose selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>White</p>
                  </div>
                )) || (
                  <div className='choose not-selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>White</p>
                  </div>
                )}
              </button>

              <button
                className='choose-wheels-teaser wheel-two'
                onClick={() => this.handleWheelChange("green")}
              >
                {(wheelstate === "green" && (
                  <div className='choose selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Green</p>
                  </div>
                )) || (
                  <div className='choose not-selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Green</p>
                  </div>
                )}
              </button>

              <button
                className='choose-wheels-teaser wheel-three'
                onClick={() => this.handleWheelChange("red")}
              >
                {(wheelstate === "red" && (
                  <div className='choose selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Red</p>
                  </div>
                )) || (
                  <div className='choose not-selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Red</p>
                  </div>
                )}
              </button>

              <button
                className='choose-wheels-teaser wheel-four'
                onClick={() => this.handleWheelChange("black")}
              >
                {(wheelstate === "black" && (
                  <div className='choose selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Black</p>
                  </div>
                )) || (
                  <div className='choose not-selected-wheels'>
                    <img src={wheel} alt='surfskateimage' />
                    <p>Black</p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='wrapper'>
            <div className='summary-title'>
              <div>
                <h2>Your Order</h2>

                <p>Please your selection before submitting your order. </p>
              </div>
            </div>

            <div className='summary'>
              <table>
                <tr>
                  <td>
                    <p>Type: </p>
                  </td>
                  <td className='right'>
                    {(typestate && <p>{typestate}</p>) || <p>Select model</p>}
                  </td>
                </tr>
                <tr>
                  <td className='underline'>
                    <p>Wheels:</p>
                  </td>
                  <td className='right'>
                    {(wheelstate && <p>{wheelstate}</p>) || (
                      <p>Select wheels</p>
                    )}
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>Total</p>
                  </td>
                  {(typestate && (
                    <td className='right'>
                      <p>2500.000 IDR</p>
                    </td>
                  )) || (
                    <td>
                      {" "}
                      <p></p>
                    </td>
                  )}
                </tr>
              </table>

              <button
                className='summary-button primary-button '
                onClick={this.handleConfigureChange}
              >
                ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Configure;
