import React, { useState } from "react";
import "./egg.scss";
import Wave from "../../components/brain-waves/wave";
import DiscreteSliderSteps from "../../components/slider/slider";
import { BrowserRouter as Router, Link } from "react-router-dom";
import model from "./3dmodel.png";

class MyBrainWaves extends React.Component {
  componentDidMount() {
    /**
     *	Canvas Element and Canvas Context
     **/
    const canvas = document.getElementById("canvas1");
    const context = canvas.getContext("2d");

    /**
     *	WaveList to store all the waves in the list
     *	colors list to allow multiple colors to chose from
     **/
    const waveList = [];

    const load = () => {
      // Canvas will cover up the entire screen
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      /**
       *	Clear Method to clear the entire canvas
       **/
      const clear = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };

      /**
       *	Clear the canvas and then draw all the waves on the canvas. Utilize requestAnimationFrame for recursion.
       **/
      const draw = () => {
        clear();
        waveList.forEach((w) => w.redraw());
        requestAnimationFrame(draw);
      };

      /**
       *	Initialize the appliation
       **/
      for (let i = 0; i < 6; i++) {
        const multiplier = (3 - i) / 6;

        waveList.push(
          new Wave({
            canvas,
            lineWidth: i === 0 ? 3 : 1,
            shift: 10,
            amplitude: multiplier * 500,
            frequency: 0.02,
          })
        );
      }

      draw();
    };

    load();
  }

  render() {
    return <canvas id={this.props.plot}></canvas>;
  }
}

class MyEGG extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start:"trye"
        };
      }

  componentDidMount() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const waveList = [];

    const load = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const clear = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
      };
      const draw = () => {
        clear();
        waveList.forEach((w) => w.redraw());
        requestAnimationFrame(draw);
      };
      for (let i = 0; i < 6; i++) {
        const multiplier = (3 - i) / 6;

        waveList.push(
          new Wave({
            canvas,
            lineWidth: i === 0 ? 3 : 1,
            shift: 10,
            amplitude: multiplier * 500,
            frequency: 0.02,
          })
        );
      }

      draw();
    };

    load();
  }

  handleClick=()=>{
    //   alert("Hello")
      this.setState({
        start: "False"
      });
  }

  render() {
    return (
      <div className="whole">
        <h2>EEG Device connection</h2>

        <button 
        onClick={this.handleClick}
        >{this.state.start}</button>

        <div className="egg-left">
          <img src={model} />
        </div>
        <DiscreteSliderSteps />

        <div className="egg-right">
          {/* <canvas id="canvas"></canvas> */}
          <MyBrainWaves plot="canvas" />
          <MyBrainWaves plot="canvas1" />
          <Link to="/deshboard">
            <button>deshboard</button>
          </Link>

          {/* <MyBrainWaves/> */}
        </div>
      </div>
    );
  }
}

export { MyEGG };
