import React, { Component } from "react";
import { Link } from "react-router-dom";

import arrowright from "./../../styles/images/arrow-right.svg";
import arrowleft from "./../../styles/images/arrow-left.svg";
import "./Slider.scss";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /* dare: props.dare, */
      image: 1
    };
  }

  /* handleImagesliderPlus() {
    console.log("handleImagesliderPlus");

    const oldimage = this.props.image;
    const image = oldimage + 1;
    console.log(image);
    this.props.onImageChange({ image });
  }

  /*
  handleImagesliderPlus = (image) => {
    console.log("handleImagesliderPlus mounted");
    this.addState(image);
    console.log("...", image);
    this.props.onImageChange({});
  };

  addState = (image) => {
    console.log("addstate");

    console.log(image);
    const x = this.props.image;
    const y = x + 1;
    console.log("x");
    console.log(x);
    console.log("y");
    console.log(y);
    this.setState({ image: y });
    console.log("state");
    const state = this.state.image;
    console.log(state);
    console.log(image);
  };*/

  incrementCount = () => {
    const sliderLength = 2;
    const { image } = this.state;
    var end = image < sliderLength ? false : true;
    if (end) {
      this.setState({
        image: this.state.image - (sliderLength - 1)
      });
    } else {
      this.setState({
        image: this.state.image + 1
      });
    }
    console.log(this.state.image);
  };

  decrementCount = () => {
    const sliderLength = 2;
    const { image } = this.state;
    var start = image < 2 ? true : false;
    if (start) {
      this.setState({
        image: this.state.image + (sliderLength - 1)
      });
    } else {
      this.setState({
        image: this.state.image - 1
      });
    }
    console.log(this.state.image);
  };

  render() {
    const image = this.state.image;
    return (
      <div>
        <div className='container'>
          <div className='wrapper'>
            <div className='title'>
              <div>
                <h2>Wheels </h2>
              </div>
            </div>
            <div className='teaser-copy'>
              <div>
                <p>
                  Your wheels have that extra-grip power to take hold of the
                  asphalt. Radical turns, powerful carves: you'll never skid.
                  Unless you’re really going for it…
                </p>
              </div>
            </div>

            {(image === 1 && (
              <div className='teaser-slider image1'>
                <button className='slider-button' onClick={this.decrementCount}>
                  <img src={arrowleft} alt='arrow-left' />
                </button>

                <div className='slideshow-container'></div>
                <button className='slider-button' onClick={this.incrementCount}>
                  <img src={arrowright} alt='arrow-right' />
                </button>
              </div>
            )) ||
              (image === 2 && (
                <div className='teaser-slider image2'>
                  <button
                    className='slider-button'
                    onClick={this.decrementCount}
                  >
                    <img src={arrowleft} alt='arrow-left' />
                  </button>

                  <div className='slideshow-container'></div>
                  <button
                    className='slider-button'
                    onClick={this.incrementCount}
                  >
                    <img src={arrowright} alt='arrow-right' />
                  </button>
                </div>
              )) ||
              (image === 3 && (
                <div className='teaser-slider image3'>
                  <button
                    className='slider-button'
                    onClick={this.decrementCount}
                  >
                    <img src={arrowleft} alt='arrow-left' />
                  </button>

                  <div className='slideshow-container'></div>
                  <button
                    className='slider-button'
                    onClick={this.incrementCount}
                  >
                    <img src={arrowright} alt='arrow-right' />
                  </button>
                </div>
              )) ||
              (image === 4 && (
                <div className='teaser-slider image4'>
                  <button
                    className='slider-button'
                    onClick={this.decrementCount}
                  >
                    <img src={arrowleft} alt='arrow-left' />
                  </button>

                  <div className='slideshow-container'></div>
                  <button
                    className='slider-button'
                    onClick={this.incrementCount}
                  >
                    <img src={arrowright} alt='arrow-right' />
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
