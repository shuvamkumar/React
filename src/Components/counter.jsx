import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super()
        this.state={
         count:props.value,
         names:["Shuvam","Dibyam","Uttam","Subasini","Dhananjay",]
    }
    this.formatCount=this.formatCount.bind(this);
    this.handleIncreament=this.handleIncreament.bind(this)
    
}
    handleIncreament=()=>{this.setState({count:this.state.count +1})}
    render() { 
        console.log("props",this.props)
        return (
            <React.Fragment>
                {this.props.children }
                 <span style={{fontSize:19}}className={this.getBadgeClass()}>{this.formatCount()}</span>
                 <button className="btn btn-secondary btn-sm"
                 onClick={this.handleIncreament}>Increment</button>
                 <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
              
            </React.Fragment>
         );
    }
    getBadgeClass() {
        let classes = "badge m-2 ";
        classes += (this.state.count) ? "badge-primary" : "badge-warning";
        return classes;
    } 

    formatCount(){ 
    const {count}=this.state;
    return count===0?"Zero":count;
    }
}


 
export default Counter;