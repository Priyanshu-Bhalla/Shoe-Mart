import React from 'react';
import '../index.css';
const Pricing =()=> {
   return(
       <>
       <div id="my-carousel3"  className="container    carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4500" >
    <ol  className="carousel-indicators">
      <li data-bs-target="#my-carousel3" data-bs-slide-to="0"  className="active"></li>
      <li data-bs-target="#my-carousel3" data-bs-slide-to="1"></li>
      <li data-bs-target="#my-carousel3" data-bs-slide-to="2"></li>
    </ol>
    <div  className="carousel-inner">
     

      <div  className="carousel-item active">
        <img src="assets/img/adidas-performance-zx-2k-4d-solar-yellow-hi-res-red-s18-core-black-fv9028-sneaker-outdoor-1.jpg"  className="d-block w-100" id="carousel3-img1" alt="..."/>
        <div  className="carousel-caption d-none d-lg-block" id="img1">
            <h3 id="carousel3-1">UPTO 70% OFF</h3>
            <h4 id="carousel3-2">Offer valid till 31st May</h4>
            <h5 id="carousel3-3">REEBOK</h5>
         
        </div>

      </div>
      <div  className="carousel-item">
        <img src="assets/img/Capture.PNG"  className="d-block w-100"  id="carousel3-img2"  alt="..."/>
        <div  className="carousel-caption d-none d-lg-block">
        
        </div>
        
      </div>
      <div  className="carousel-item ">
        <img src="assets/img/1_51_1615361391.jpg"  className="d-block w-100" id="carousel3-img3"alt="..."/>
        <div  className="carousel-caption d-none d-lg-block">
        
        </div>

     
      </div>
    </div>
    <a  className="carousel-control-prev" href="#my-carousel3" role="button" data-bs-slide="prev">
      <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span  className="sr-only"></span>
    </a>
    <a  className="carousel-control-next" href="#my-carousel3" role="button" data-bs-slide="next">
      <span  className="carousel-control-next-icon" aria-hidden="true"></span>
      <span  className="sr-only"></span>
    </a>
  </div>

       </>
   )
}
export default Pricing;