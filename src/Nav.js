import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    
    render() {
        console.log('dog props are', this.props);
        
        const someDog = this.props.dogs.dogs.map( dg => { 
            return <NavLink key={dg.name}
                            exact to={`/dogs/:${dg.name}`}>
                    {dg.name}        
                    </NavLink>
        });
        return (
            <nav>
               {someDog}
            </nav>                
          
        );
    }
}

export default Nav;