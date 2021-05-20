import React, { Component } from "react";
import { Link } from "react-router-dom";

import testvideo from "./../styles/images/scrollvideo/testvideo.mp4";
import image1 from "./../styles/images/scrollvideo/image1.png";

import "./../components/Home/Hero.scss";
import "./../components/Home/HeroAnimations.scss";

import BlackCenter from "./../components/Home/BlackCenter";
import TrucksSpecial from "./../components/Home/TrucksSpecial";
import TeaserTwo from "./../components/Home/TeaserTwo";
import Slider from "../components/Home/Slider";
import TeaserButtonHome from "../components/Home/TeaserButtonHome";

import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      scrollTop: "1",
      image: 0
    };
  }

  //SCROLL VIDEO
  handleVideoMounted = (video) => {
    console.log("handleVideoMounted mounted");
    if (video !== null) {
      video.currentTime = this.state.scrollTop;
    }
    console.log("video", video);
  };

  handleVideoScroll = (event) => {
    const scrollTop = this.myRef.current.scrollTop;
    console.log(` ${scrollTop}`);
    this.setState({
      scrollTop: scrollTop
    });
    this.RemountVideo();
  };

  RemountVideo = () => {
    let video = document.getElementById("video");
    this.handleVideoMounted(video);
  };

  //IMAGE SLIDER

  handleImageChange = async ({ image }) => {
    console.log("lifting up B running");
    console.log("dare", image);
    this.props.onImageChange({ image });
  };

  render() {
    return (
      <div>
        <div className='parallax'>
          <div
            className=' Scroll parallax__group'
            ref={this.myRef}
            onScroll={this.handleVideoScroll}
          >
            <div className=' container hero base parallax__layer parallax__layer--base'>
              <div className='wrapper wrapper-header'>
                <div className='hero-copy'>
                  <div>
                    <h1>
                      PDB <br /> Surfskates
                    </h1>
                    <p>
                      Develop your surf skills on land. Carve, trim, cutbacks,
                      snaps: Improve your technique. Shred the wave you create.
                    </p>
                    <button className='underline-button'>
                      <Link to='/product' className='Link'>
                        Order now
                      </Link>
                    </button>
                  </div>
                </div>
                <div className='video intro'>
                  <video
                    source
                    loop
                    autoPlay
                    muted
                    id='video'
                    src={testvideo}
                    poster={image1}
                    ref={this.handleVideoMounted}
                  />
                </div>
              </div>
            </div>
            <BlackCenter />
          </div>
        </div>

        <TeaserTwo />
        <Slider
          image={this.state.image}
          onImageChange={this.handleImageChange}
        />
        <TeaserButtonHome />
      </div>
    );
  }
}

export default Home;
