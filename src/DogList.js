import React, { Component } from 'react';
import Dog from './Dog';

class DogList extends Component {
    render() {
        const showDogs = this.props.dogs.map( dg => {
            return <Dog key={dg.name} src={dg.src} name={dg.name} />
        });
        return (
            <div>
                {showDogs}
            </div>
        );
    }
}

export default DogList;