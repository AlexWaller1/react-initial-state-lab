// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
// put state in constuctor because instructor goes first
    constructor(props) {
        // since bomb timers can differ, we'll pass in a prop
        // to our Bomb component to determine what the 
        // starting count should be.
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        // use a ternary here
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        // secondsLeft is a method of state
        return(
           <div>{message}</div>
        )
    }

}

export default Bomb;
// must always export