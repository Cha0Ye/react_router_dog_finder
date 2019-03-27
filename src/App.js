import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Dog from './Dog';
import DogList from './DogList';
import whiskey from './whiskey.jpg';
import hazel from './hazel.jpg';
import tubby from './tubby.jpg';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  // Set up properties for potential dogs. Site is designed to be able to handle
  // a changing list of dogs in props.
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

  // Main render returns basic web page of routes with nav bar at the top.
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav dogs={this.props.dogs} />
          <Switch>
            <Route path="/dogs/:name" 
                   render={rtProps => <Dog dogs={this.props.dogs} {...rtProps} />} />
            <Route exact path="/dogs"
                   render={() => <DogList dogs={this.props.dogs} />} />
            <Redirect to="/dogs" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
