import React, { Component } from 'react';
import http from './service/service'

class ProblemsComponent extends Component {
    state = { 
        problems : []
     }
     async componentDidMount() {
        const {data} = await http.get(process.env.REACT_APP_BACKEND_URL+'all');
        this.setState({problems : data}) ;        
     }
    render() {
        let tagProbs = this.state.problems;
        let comp = this.props.match.params.comp
        if(comp){
           tagProbs = tagProbs.filter((p)=> p.tag.includes(comp))
        }
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
                            <th>Mark Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tagProbs.map((problem)=>{
                    return (<tr key={problem.id}>
                                <td>{problem.isSolved ? <i style={{color:"green"}} className="fa fa-check" /> : ""}</td>
                                <td>{problem.id}</td>
                                <td><a target="_blank" href={problem.url}>{this.isPremium(problem.isPremium)} {problem.title}</a></td>
                                <td>{problem.difficulty}</td>
                                <td>{this.calculateFreq(problem.frequency).toFixed(2)+'%'}</td>
                                <td><button onClick={() => this.markSolved(problem)}>MarkSolved</button></td>
                            </tr>)
                })}
                    </tbody>
                </table>                
            </div>
         );
    }

    markSolved = async (p)=>{
        p.isSolved = !p.isSolved;
        let probs = [...this.state.problems];

        probs = probs.map(prb=>{
            if(prb.id === p.id){
                prb.isSolved = p.isSolved;
            }
            return prb;
        }) ;
        this.setState({problems : probs})
        await http.put(process.env.REACT_APP_BACKEND_URL+'leet/'+p.id, p);
    }

    calculateFreq = (freq)=>{
        return (freq / 5) *100 ;
    }
    isPremium = (prem)=>{
        return prem ? <i className="fa fa-trophy" style={{color:'gold', fontWeight : 'bold'}}/> : ""
    }
}
 
export default ProblemsComponent;