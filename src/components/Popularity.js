import React from "react";
import { Link } from "react-router-dom";



const Popularity = ({menhandleIncrement,womenhandleIncrement,kidshandleIncrement}) => {
  return (
<div>
<div class="container-fluid bg-light"  style={{marginTop: "100px", padding: "30px 100px"}} id="men1">
        <h3 style={{ paddingBottom: "15px"}}>MENS SECTION</h3>
        <div class="row">
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/Men4.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Air Jordan Mid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6999
                </h5>
                <p class="card-text">Men's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={menhandleIncrement} class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/Men5.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Puma
                  RS-X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6799
                </h5>
                <p class="card-text">Men's Sneakers</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={menhandleIncrement} class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/Men3.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Nike Air Max
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6399</h5>
                <p class="card-text">Men's Running Shoes</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={menhandleIncrement}  class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/men8.jfif" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Nike Air Max
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6399</h5>
                <p class="card-text">Men's Running Shoes</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={menhandleIncrement} class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>


     
{/* <!-- women --> */}

      <div class="container-fluid bg-light" style={{marginTop: "110px", padding: "20px 100px"}} id="women1">
        <h3 style={{ paddingBottom: "15px"}}>WOMEN SECTION</h3>
        <div class="row">
        <div class="col-sm">
            <div class="card" >
                <img src="assets/img/women1.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Nike Blaze
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299
                  </h5>
                  <p class="card-text">Women's Running Shoe</p>
                    <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                  <button onClick={womenhandleIncrement} class="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" >
                <img src="assets/img/women2.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Nike Hyperactives &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3399</h5>
                  <p class="card-text">Women's Sneakers</p>
                    <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                  <button onClick={womenhandleIncrement} class="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" >
                <img src="assets/img/women3.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Adidas Hyperon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3399</h5>
                  <p class="card-text">Women's Tennis Shoes</p>
                    <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                  <button onClick={womenhandleIncrement} class="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <div class="card" >
                <img src="assets/img/women 7.jfif" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Adidas Slick &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3399</h5>
                  <p class="card-text">Women's Tennis Shoes</p>
                    <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                  <button onClick={womenhandleIncrement} class="btn btn-dark">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
{/* <!-- kids --> */}



<div class="container-fluid bg-light" style={{marginTop:"145px", padding: "20px 100px"}} id="kids1">
  <h3 style={{ paddingBottom: "15px"}} >KID SECTION</h3>
    <div class="row">
        <div class="col-sm">
            <div class="card" >
              <img src="assets/img/kid 7.jfif" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Puma
                  Mini&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4500
                </h5>
                <p class="card-text">Kid's Running Shoes</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={kidshandleIncrement}  class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/kid1.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Levi's Denim Shoes&nbsp;&nbsp;&nbsp;&nbsp;₹2100
                </h5>
                <p class="card-text">Kid's Running Shoes</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={kidshandleIncrement}  class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/kid2.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Nike
                  Sneakers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4100</h5>
                <p class="card-text">Kid's Sneakers</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={kidshandleIncrement}  class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card" >
              <img src="assets/img/kid3.webp" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Nike
                  Superstar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4500</h5>
                <p class="card-text">Kid's Running Shoes</p>
                  <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={kidshandleIncrement}  class="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>

          </div>
          </div>
          
</div>
  )
};
export default Popularity;