import React from 'react';
import '../index.css'
import { Link } from "react-router-dom";
const Carousel=()=> {
   return(
       <>
       <div id="my-carousel"      className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4500">
    <ol      className="carousel-indicators">
      <li data-bs-target="#my-carousel" data-bs-slide-to="0"      className="active"></li>
      <li data-bs-target="#my-carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#my-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div      className="carousel-inner">
      <div      className="carousel-item active">
        <img src="assets/img/sneakers.jpg" className="d-block w-100" id="carousel1-img1"  alt="..."/>
        <div      className="carousel-caption d-none d-lg-block" id="img1">
          <h5 id="carousel-1">NEW COLLECTION</h5>
          <p id="carousel-para">FRESH|TRENDY</p>
          <a href="https://www.converse.com/" target="_blank"><button className="btn btn-outline-light btn-large" id="carousel-btn1">What's New</button></a>
          <a    className="btn btn-outline-light btn-large" href="#"id="carousel-btn2"><Link to="/Payment">Purchase</Link></a>
        </div>

      </div>
      <div      className="carousel-item ">
        <img src="assets/img/snearker3.jpg" className="d-block w-100"  id="carousel1-img2"alt="..."/>
        <div      className="carousel-caption d-none d-lg-block">
          <h3 id="carousel-2">Special Offers</h3>
          <h2 id="craousel-h2">DISCOUNT UPTO 50% ON COLLECTION</h2>
          <a href="https://www.nike.com/" target="_blank"><button className="btn btn-outline-light btn-large" id="carousel-btn3">Visit Now</button></a>
        </div>

      </div>
      <div      className="carousel-item">
        <img src="assets/img/carousel9.jpg" className="d-block w-100"  id="carousel1-img3" alt="..."/>
        <div      className="carousel-caption d-none d-lg-block">
          <h1 id="carousel-3">Get Yours Now!!</h1>
          <a    className="btn btn-outline-light btn-large" href="#"id="carousel-btn3"><Link to="/Payment">Pre Order Now</Link></a>
        </div>

      </div>
    </div>
    <a      className="carousel-control-prev" href="#my-carousel" role="button" data-bs-slide="prev">
      <span      className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span      className="sr-only"></span>
    </a>
    <a      className="carousel-control-next" href="#my-carousel" role="button" data-bs-slide="next">
      <span      className="carousel-control-next-icon" aria-hidden="true"></span>
      <span      className="sr-only"></span>
    </a>
  </div>
       </>
   );
}
export default Carousel;