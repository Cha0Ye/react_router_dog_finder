import React, { Component } from 'react';
import Dog from './Dog';
import { Link } from 'react-router-dom';

class DogList extends Component {
    render() {
        const showDogs = this.props.dogs.map( dg => {
            return (
                    <div>
                        
                        <img src={dg.src} alt={dg.name} width="150px" height="150px"/>
                        <Link to={`/dogs/${dg.name}`}>{dg.name}</Link>
                    </div>
                    )
        
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

//<Dog key={dg.name} src={dg.src} name={dg.name}