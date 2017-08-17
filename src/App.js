import React, { Component } from 'react';
import ReactHowler from 'react-howler'
import kick1 from './sounds/kick1.wav'
import snare1 from './sounds/snare1.wav'
import hi1 from './sounds/hi_hat1.wav'
import open1 from './sounds/open_hat1.wav'
import './App.css';

var sound = new Howl({
      src: ['sound.webm', './sounds/kick1.wav']
    });

    sound.play();
    console.log("playing howler");

class Pad extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value : null,
    }
    this.playSound = this.playSound.bind(this)
  }
  playSound(i) {
    let pad0 = new Audio(kick1);
    let pad1 = new Audio(snare1);
    let pad2 = new Audio(hi1);
    let pad3 = new Audio(open1);
    console.log("sound playing");
    switch (i) {
      default:
      break;
      case 0:
      pad0.play();
      break;
      case 1:
      pad1.play();
      break;
      case 2:
      pad2.play();
      break;
      case 3:
      pad3.play();
      break;
    }
  }
  handleKeyPress = (event) => {
    if(event.key === 'q'){
      this.playSound(0);
    }
    if(event.key === 'w'){
      this.playSound(1);
    }
    if(event.key === 'e'){
      this.playSound(2);
    }
    if(event.key === 'r'){
      this.playSound(3);
    }
  }
  render() {
    return(
      <div>
        {/* Pads */}
        <div className="all-pads">
          <div className="pads center">
            <button className="pad"
              onKeyDown={this.handleKeyPress}
              onClick={() => {this.playSound(0)}}
              ></button>
            <button className="pad" onClick={() => {this.playSound(1)}}></button>
            <button className="pad" onClick={() => {this.playSound(2)}}></button>
            <button className="pad" onClick={() => {this.playSound(3)}}></button>
          </div>
        </div>

       {/* Sequencer */}
        <div className="seq center">
          <button className="inst" onClick={() => {this.playSound(0)}}>Instrument</button>
          <button className="box" onClick={() => this.setState({value: "X"}) }> {this.state.value}</button>
          <button className="box" />
          <button className="box" />
          <button className="box" />
          <button className="box2" />
          <button className="box2" />
          <button className="box2" />
          <button className="box2" />
        </div>

      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="bg-color">
        <h1 id="title">Dilla Machine</h1>
        <Pad />
      </div>
    );
  }
}

export default App;
