import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Nav extends Component {
    
    render() {
        
        const someDog = this.props.dogs.map( dg => { 
            return <NavLink key={dg.name}
                            exact to={`/dogs/${dg.name}`}>
                    {dg.name}        
                    </NavLink>
        });
        return (
            <nav className="dog-nav">
                <p><NavLink exact to="/dogs">HOME</NavLink></p>
               {someDog}
            </nav>                
          
        );
    }
}

export default Nav;