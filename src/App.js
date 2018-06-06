import React, { Component } from 'react';
import OrderTasks from './OrderTasks';

class App extends Component{
    render(){
        return(
            <div>
                <OrderTasks>
                    <li style={{padding: '5px', margin: '10px', background:'gray'}}>a</li>
                    <li style={{padding: '5px', margin: '10px', background:'gray'}}>b</li>
                    <li style={{padding: '5px', margin: '10px', background:'gray'}}>c</li>
                    <li style={{padding: '5px', margin: '10px', background:'gray'}}>d</li>
                    <li style={{padding: '5px', margin: '10px', background:'gray'}}>e</li>
                </OrderTasks>
            </div>
        )
    }
}

export default App;