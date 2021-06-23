import React, { Component } from 'react';
class KidsCounter  extends Component {

    render() {

        return ( 

            <div>
                <span style={{fontSize:"24px",fontWeight:"bolder"}}>{this.props.kidscount} Items</span>
                <br/>
                
                <button onClick={this.props.kidshandleIncrement} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.kidshandleDecrement} className="btn btn-danger btn-sm" style={{marginLeft:"10px"}}>Decrement</button>

           </div>
      );
        }


    }
 
export default KidsCounter;
