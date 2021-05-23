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
                    <li className="list-group-item">
                        <Link to='/all/amazon'>Amazon</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/google'>Google</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/microsoft'>MicroSoft</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/goldmansacs'>Goldman Sachs</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/facebook'>Facebook</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/apple'>Apple</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/cisco'>Cisco</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/samsung'>Samsung</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/jpmorgan'>JP Morgan</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/all/morganstanely'>Morgan Stanely</Link>
                    </li>
                </ul>
            </div>
            </div>
         );
    }
}
 
export default HomeComponent;