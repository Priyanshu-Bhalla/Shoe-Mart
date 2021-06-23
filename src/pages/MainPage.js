
import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Jumbotron from "../components/Jumbotron";
import Carousel2 from "../components/Carousel2";
import Pricing from "../components/Pricing";


class MainPage extends Component{
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
  if(this.state.mencount>0){

    this.setState({mencount: this.state.mencount -1});
  }

}
womenhandleDecrement = ()=>{
  if(this.state.womencount>0){

    this.setState({womencount: this.state.womencount -1});
  }

}
kidshandleDecrement = ()=>{
  if(this.state.kidscount>0){

    this.setState({kidscount: this.state.kidscount -1});
  }

}
  render(){

    return (
      <div>
  <Carousel/>
  <Jumbotron mencount={this.state.mencount} menhandleIncrement={this.menhandleIncrement} menhandleDecrement={this.menhandleDecrement}
             womencount={this.state.womencount} womenhandleIncrement={this.womenhandleIncrement} womenhandleDecrement={this.womenhandleDecrement}
             kidscount={this.state.kidscount} kidshandleIncrement={this.kidshandleIncrement} kidshandleDecrement={this.kidshandleDecrement} />
  <Carousel2 menhandleIncrement={this.menhandleIncrement}
             womenhandleIncrement={this.womenhandleIncrement}
             kidshandleIncrement={this.kidshandleIncrement}/>
  <Pricing/>
  
      </div>
    );
  }
  
};

export default MainPage;
