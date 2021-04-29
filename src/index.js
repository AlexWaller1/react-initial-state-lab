import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
  <div>
    <ImageSlider />
    <Bomb initialCount={120} />
  </div>,
  document.getElementById('root')
);

// both components called ReactDOM.render so we'll see them
// when the page loads
// it is in this parent component that we pass the 
// the initialCount component to the Bomb component
