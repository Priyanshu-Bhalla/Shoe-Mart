import React, { Component } from 'react';
class MenCounter  extends Component {

    render() {

        return ( 

            <div>
                <span style={{fontSize:"24px",fontWeight:"bolder"}}>{this.props.mencount} Items </span>
                <br/>
                
                <button onClick={this.props.menhandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.menhandleDecrement} className="btn btn-danger btn-sm" style={{marginLeft:"10px"}}>Decrement</button>

           </div>
      );
        }
        


    }
 
export default MenCounter;
