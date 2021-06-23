import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";
import MenCounter from '../mencounter';
import WomenCounter from '../womencounter';
import KidsCounter from '../kidscounter';
const Jumbotron =({mencount,menhandleIncrement,menhandleDecrement,womencount,womenhandleDecrement,womenhandleIncrement,kidscount,kidshandleIncrement,kidshandleDecrement})=> {
   return(
<>

<div      className="container-fluid">
    <div      className="row">

      <div      className="col  col-xl-6">
        <div      className=" jumbotron jumbotron-fluid text-center" id="jumbo-cart">
          <div>
            <h5      className="display-5" id="cart-head"><strong>
                My Cart
              </strong></h5>
            <img src="assets/img/shopping-cart.png" alt="" id="cart-icon"/>

          </div>
          <div id="line" ></div>
          <div id="list-container">
            <h3>Cart List</h3>
            <br/>
            <div className="container">
             <img src="assets/img/man1.png" alt="" style={{height:"50px",width:"50px"}}/> <h4 id="cart-heading">Men Shoes</h4>
            </div>
            <div>
              <MenCounter mencount={mencount} menhandleIncrement={menhandleIncrement} menhandleDecrement={menhandleDecrement} />
            </div>
        
            <hr/>
            <br/>
            <div className="container">
             <img src="assets/img/woman1.png" alt="" style={{height:"50px",width:"50px"}}/>
            </div>
            <div>
              <h4>Women Shoes</h4>
              <WomenCounter womencount={womencount} womenhandleIncrement={womenhandleIncrement} womenhandleDecrement={womenhandleDecrement}
              />
            </div>
            
            <hr/>
            <br/>
            <div className="container">
             <img src="assets/img/boy1.png" alt="" style={{height:"50px",width:"50px"}}/>
            </div>
            <div>
              <h4>Kids Shoes</h4>
              <KidsCounter kidscount={kidscount} kidshandleIncrement={kidshandleIncrement} kidshandleDecrement={kidshandleDecrement}/>
            </div>
          </div>
          <div id="list-btns">
            {/* <button      className="btn btn-md btn-dark" id="remove">Remove</button> */}
              <a    className="btn btn-dark btn-lg" href="#" id="purchase"><Link to="/Payment">-Purchase Now-</Link></a>
          </div>
        </div>
      </div>





 
      <div      className="col  col-xl-6">
        <div      className="jumbotron jumbotron-fluid text-center" id="jumbo1">
          <a type="button"      className="btn btn-outline-dark btn-lg" id="jumbotron-button" target="_blank" href="https://www.stepshoes.com/blog.html">Explore</a>

          <h5      className="display-5"><strong>Burn through the skies</strong></h5>
          <br/>
          <p      className="lead"><em>A new bond of comfort and agility...</em></p>
        </div>
        <div      className="jumbotron jumbotron-fluid text-center" id="jumbo2">
          <a type="button"      className="btn btn-outline-dark btn-lg" id="jumbotron-button" target="_blank" href="https://www.stepshoes.com/blog.html">Explore</a>

          <h5      className="display-5"><strong>So many shoes but only TWO FEET! </strong></h5>
          <br/>
          <p      className="lead"><em>If The Shoe Fits....</em></p>
        </div>
      </div>

    </div>




  </div>
        
</>
       

       
       )

       }
       export default Jumbotron;