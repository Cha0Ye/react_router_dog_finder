import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dog extends Component {
    render() {
       const { name, src } = this.props;
        return (
            <div>
                <img src={src} alt={name} width="150px" height="150px"/>
                <Link exact to={`/dogs/${name}`}>{name}</Link>
            </div>
        );
    }
}

export default Dog;