import React, { Component } from 'react';
import http from './service/service'

class PremiumComponent extends Component {
    state = { 
        problems : []
     }
     async componentDidMount(){
        const {data} = await http.get(process.env.REACT_APP_BACKEND_URL+'all');
        const filtered = data.filter(d=>d.isPremium) ;
        this.setState({problems : filtered})
     }
    render() { 
        return ( 
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>IsSolved</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Difficulty</th>
                            <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.problems.map((problem)=>{
                    return (<tr key={problem.id}>
                                <td>{problem.isSolved ? <i style={{color:"green"}} className="fa fa-check" /> : ""}</td>
                                <td>{problem.id}</td>
                                <td><a target="_blank" href={problem.url}>{this.isPremium(problem.isPremium)} {problem.title}</a></td>
                                <td>{problem.difficulty}</td>
                                <td></td>
                                <td>{this.calculateFreq(problem.frequency).toFixed(2)+'%'}</td>
                            </tr>)
                })}
                    </tbody>
                </table>

                
            </div>
         );
    }

    calculateFreq = (freq)=>{
        return (freq / 5) *100 ;
    }
    isPremium = (prem)=>{
        return prem ? <i className="fa fa-trophy" style={{color:'gold', fontWeight : 'bold'}}/> : ""
    }
}
 
export default PremiumComponent;