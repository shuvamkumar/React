import React, { Component } from 'react'
import Counter from "./counter.jsx"

class Counters extends Component {
    state={
        counters:[
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
            {id:5,value:0},
        ]
    }
    handleDelete=(counterId)=>{
       const counters=this.state.counters.filter(c=>c.id!==counterId)
       this.setState({counters:counters});
    };
    handleReset=()=>{
      const counters=  this.state.counters.map(c=>{
            c.value=0;
            return c;
        })
        this.setState({counters:counters})
    }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleReset}
                 className="btn btn-primary btn-sm-m-2">Reset</button>
         {this.state.counters.map(counter=>
         <Counter key={counter.id} value={counter.value} selected={true} onDelete={this.handleDelete} id={counter.id}>
             <h1>Title #{counter.id}</h1>
         </Counter>)}
            </div>
        );
    }
}
 
export default Counters;