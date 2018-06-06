import React, { Component } from 'react';
import './App.css';

class DragonDrop extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [{name: 'Do Stuff', category:"todo", bgcolor: "yellow"},
              {name: 'Skip Rocks', category:"todo", bgcolor: "blue"},
              {name: 'Eat Food', category:"complete", bgcolor: "gray"}]
    }
  }

  onDragOver(e) {
    e.preventDefault()
  }

  onDragStart(e, id) {
    console.log('onDragStart: ', id)
    e.dataTransfer.setData("id", id)
  }

  onDrop(e, category) {
    let id = e.dataTransfer.getData("id")
    var tasks = this.state.tasks.filter(x => {
      if (x.name === id) {
        x.category = category
      }
      return x
    })
    this.setState({...this.state, tasks})
  }

  render() {
    var tasks = {
        todo: [],
        complete: []
    }

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div key={t.name} 
             className="draggie" 
             style={{background: t.bgcolor}}
             draggable 
             onDragStart={e => this.onDragStart(e, t.name)}
        >
        {t.name}
        </div>
      )
    })

    return (
      <div className="App">
        <section className='todo' 
                 onDragOver={(e) => this.onDragOver(e)} 
                 onDrop={e => this.onDrop(e, "todo")}>
          <h2>Todo</h2>
          {tasks.todo}
        </section>
        <section className='completed' 
                 onDragOver={(e) => this.onDragOver(e)} 
                 onDrop={e => this.onDrop(e, "complete")}>
          <h2>Completed</h2>
          {tasks.complete}
        </section>
      </div>
    );
  }
}

export default DragonDrop;