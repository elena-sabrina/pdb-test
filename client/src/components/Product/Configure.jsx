import React, { Component } from "react";

import ECHO from "./../../styles/images/ECHO.png";
import ULU from "./../../styles/images/ULU.png";
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
                  Choose <br />
                </p>
              </div>
            </div>

            <div className='types'>
              <button
                className='choose-type-teaser type-one'
                onClick={() => this.handleTypeChange("echo")}
              >
                {(typestate === "echo" && (
                  <div className='selected-type'>
                    <div className='choose-type-box'>
                      <img src={ECHO} alt='surfskateimage' />
                      <h4>ECHO</h4>
                      <p>Your hybrid PDB.</p>
                      <p>2.500.000 IDR</p>
                    </div>
                  </div>
                )) || (
                  <div className='not-selected-type'>
                    <div className='choose-type-box'>
                      <img src={ECHO} alt='surfskateimage' />
                      <h4>ECHO</h4>
                      <p>Your hybrid PDB.</p>
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
                  <div className='selected-type'>
                    <div className='choose-type-box'>
                      <img src={ULU} alt='surfskateimage' />
                      <h4>ULU</h4>
                      <p>Your advanced PDB.</p>
                      <p>2.500.000 IDR</p>
                    </div>
                  </div>
                )) || (
                  <div className='not-selected-type'>
                    <div className='choose-type-box'>
                      <img src={ULU} alt='surfskateimage' />
                      <h4>ULU</h4>
                      <p>Your advanced PDB.</p>
                      <p>2.500.000 IDR</p>
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
                Choose {wheelstate}
                <br />
              </div>
            </div>
            <div className='wheels'>
              <button
                className='choose-wheels-teaser wheel-one'
                onClick={() => this.handleWheelChange("white")}
              >
                {(wheelstate === "white" && (
                  <div className='selected-wheels'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>White</p>
                    </div>
                  </div>
                )) || (
                  <div className='not-selected-wheels'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>White</p>
                    </div>
                  </div>
                )}
              </button>

              <button
                className='choose-wheels-teaser wheel-two'
                onClick={() => this.handleWheelChange("green")}
              >
                {(wheelstate === "green" && (
                  <div className='selected-wheels'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>Green</p>
                    </div>
                  </div>
                )) || (
                  <div className='not-selected-wheels'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>Green</p>
                    </div>
                  </div>
                )}
              </button>

              <button
                className='choose-wheels-teaser wheel-three'
                onClick={() => this.handleWheelChange("red")}
              >
                {(wheelstate === "red" && (
                  <div className='selected-wheels'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>Red</p>
                    </div>
                  </div>
                )) || (
                  <div className='not-selected-wheels'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>Red</p>
                    </div>
                  </div>
                )}
              </button>

              <button
                className='choose-wheels-teaser wheel-four'
                onClick={() => this.handleWheelChange("black")}
              >
                {(wheelstate === "black" && (
                  <div className='selected'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>Black</p>
                    </div>
                  </div>
                )) || (
                  <div className='not-selected'>
                    <div className='choose-wheels-box'>
                      <img src={wheel} alt='surfskateimage' />
                      <p>Black</p>
                    </div>
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
                  <td>Type: </td>
                  <td>{typestate}</td>
                </tr>
                <tr>
                  <td className='underline'>Wheels: </td>
                  <td>{wheelstate}</td>
                </tr>

                <tr>
                  <td>Total</td>
                  {(typestate && <td>2500.000 IDR</td>) || <td></td>}
                </tr>
              </table>
              <button
                className='primary-button '
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
