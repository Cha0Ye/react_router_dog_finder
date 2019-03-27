import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import uuid from 'uuid/v4';

class Nav extends Component {
    
    render() {
        // Duynamically create links to all dogs in props.
        const someDog = this.props.dogs.map(dg => { 
            return <NavLink key={uuid()}
                            exact to={`/dogs/${dg.name}`}>
                    {dg.name}        
                    </NavLink>
        });
        return (
            <nav className="dog-nav">
                <NavLink exact to="/dogs">Home</NavLink>
               {someDog}
            </nav>                
          
        );
    }
}

export default Nav;