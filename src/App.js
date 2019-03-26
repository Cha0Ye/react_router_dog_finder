import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DogList from './DogList';
import whiskey  from './whiskey.jpg';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';
import Nav from './Nav';
class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 0,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina hates Tubby."
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav dogs={this.props} />
          <Switch>
            <Route path="/dogs/:name" 
                   render={ rtProps => < DogList {...rtProps } /> } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
