import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

class DogList extends Component {
    render() {
        const showDogs = this.props.dogs.map(dg => {
            // Map over props to create a small intro for each dog, including link
            // to dog's page.
            return (
                <div key={uuid()} className="dog-list">
                    <img src={dg.src} alt={dg.name} width="150px" height="150px"/>
                    <Link to={`/dogs/${dg.name}`}>{dg.name}</Link>
                </div>
            );
        });
        return (
            <div>
                <h1>We have doooogzzzzz</h1>
                {showDogs}
            </div>
        );
    }
}

export default DogList;
