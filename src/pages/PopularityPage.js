import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popularity from "../components/Popularity";


class PopularityPage extends Component{
  state = { 
    mencount: 0,
    womencount: 0,
    kidscount: 0

 }

menhandleIncrement=()=>{
     this.setState({mencount: this.state.mencount +1});
}
womenhandleIncrement=()=>{
     this.setState({womencount: this.state.womencount +1});
}
kidshandleIncrement=()=>{
     this.setState({kidscount: this.state.kidscount +1});
}

menhandleDecrement = ()=>{
this.setState({mencount: this.state.mencount -1});
}
womenhandleDecrement = ()=>{
this.setState({womencount: this.state.womencount -1});
}
kidshandleDecrement = ()=>{
this.setState({kidscount: this.state.kidscount -1});
}

render(){

  return (
    <div>

<Popularity menhandleIncrement={this.menhandleIncrement}
             womenhandleIncrement={this.womenhandleIncrement}
             kidshandleIncrement={this.kidshandleIncrement}/>
    </div>
  );
  }
}
export default PopularityPage;