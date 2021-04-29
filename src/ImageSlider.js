// your ImageSlider code here!
import React from 'react';

class ImageSlider extends React.Component {
   // state goes in the constructor because the constructor goes first.
    constructor() {
      super() 
      // we need to call super() in the constructor since
      // we are inheriting from another class via
      // the extends keyword
      this.state = {
        currentSlideIndex: 0
      }
    }
  
    render() {
      return (
        <h1>I am on slide {this.state.currentSlideIndex}</h1>
      )
    }
  }
  
  export default ImageSlider;