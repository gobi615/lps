import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;

class HomeComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container" style={{marginTop : '10em'}}>
                <div className="card" style={{width: '16rem'}}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to='/all'>All Problems</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/prem">Premium Problems</Link>
                    </li>
                    
                </ul>
            </div>
            </div>
         );
    }
}
 
export default HomeComponent;