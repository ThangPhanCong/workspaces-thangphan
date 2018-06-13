import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
            numOfClicks: 0
                };
                  }
                  handleClick() {
                      console.log('From handleClick()', this);
                        }
                        render() {
                            console.log('From render()', this);
                                return (
                                      <div>
                                              <button onClick={this.handleClick}>Click Me!</button>
                                                      <p>Number of Times Clicked = {this.state.numOfClicks}</p>
                                                            </div>
                                                                )
                                                                  }
                                                                  }
export default App;
