import React, { Component } from 'react';
class WomenCounter  extends Component {

    render() {

        return ( 

            <div>
                <span style={{fontSize:"24px",fontWeight:"bolder"}}>{this.props.womencount} Items</span>
                <br/>
                
                <button onClick={this.props.womenhandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.womenhandleDecrement} className="btn btn-danger btn-sm" style={{marginLeft:"10px"}}>Decrement</button>

           </div>
      );
        }


    }
 
export default WomenCounter;
