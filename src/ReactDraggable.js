import React, { Component } from 'react';
import Draggable from 'react-draggable'
import './App.css';


class ReactDraggable extends Component {
  render() {
    return (
      <div className="App">
        <Draggable
          // axis='x'
          // grid={[50, 50]}
          // bounds={{left: 200, right: 200}}
        >
          <div className='yellowDiv'>Yellow</div>
        </Draggable>
        <div className='greenParent'>
          <Draggable bounds='parent'>
            <div className='orangeDiv'></div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default ReactDraggable