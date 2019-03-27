import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

class Dog extends Component {
    render() {       

       let dog = this.props.dogs.find( (dg) => {
           return dg.name === this.props.match.params.name
       });

       let facts = dog.facts.map(f => <li key={uuid()}>{f}</li> );
      
        return (
            <div>
                <h2>{dog.name}</h2>
                <img src={dog.src} alt={dog.name} width="150px" height="150px"/>
                <ul>
                    {facts}
                </ul>
                <Link exact to={`/dogs/`}>back</Link>
            </div>
        );
    }
}

export default Dog;