import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      boxes: [
        {id: 1, name: 'steve', bgColor: 'yellow'},
        {id: 2, name: 'john', bgColor: 'green'},
        {id: 3, name: 'sammi', bgColor: 'teal'}
      ]
    }
  }
  allowDrop(e) {
    e.preventDefault()
  }

  drag(e, id) {
    e.dataTransfer.setData("id", id)
  }

  drop(e) {
    e.preventDefault()
    let data = e.dataTransfer.getData('id')
    e.target.appendChild(document.getElementById(data))
  }

  render() {
    let mappedBoxes = this.state.boxes.map((x, i) => {
      return (
        <div key={x.name + i} id={x.id} style={{width: '50px', height: '50px', background: x.bgColor}}
             draggable onDragStart={e => this.drag(e, x.id)}
        ></div>
      )
    })
    return (
      <div className="App">
        {mappedBoxes}
        <section onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)} style={{width: '200px', height: '200px', background: 'mistyrose'}}>Drop here</section>
      </div>
    );
  }
}

export default App;
