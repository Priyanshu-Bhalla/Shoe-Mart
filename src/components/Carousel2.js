import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";
const Carousel2 =({menhandleIncrement,womenhandleIncrement,kidshandleIncrement})=> {
   return(
       <> 
       <div id="line2"></div>
  <div    className="container-fluid bg-light" id="carousel-container-2">
<div id="my-carousel-2"    className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="15000"
 >
  <ol    className="carousel-indicators">
    <li data-bs-target="#my-carousel-2" data-bs-slide-to="0"    className="active"
     id="#carousel2-indicators"></li>
    <li data-bs-target="#my-carousel-2" data-bs-slide-to="1" >
    </li>
    <li data-bs-target="#my-carousel-2" data-bs-slide-to="2" >
    </li>
  </ol>
  <div    className="carousel-inner">
    <div    className="carousel-item active" id="men">
      <div    className="container">
        <div    className="row">
          <div    className="col-md-12 col-sm-6">
            <h3 >MENS SECTION</h3>
          </div>
        </div>

        <div    className="row">
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/Men1.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Adidas Flash2.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299
                </h5>
                <p    className="card-text">Men's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button onClick={menhandleIncrement}   className="btn btn-dark" >Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/Men2.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Adidas Originals &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹5399</h5>
                <p    className="card-text">Men's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={menhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/Men3.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Air Max
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6399</h5>
                <p    className="card-text">Men's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={menhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/men8.jfif"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Air Max
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6399</h5>
                <p    className="card-text">Men's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={menhandleIncrement} className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div    className="container" id="men-card-part-2">
        <div    className="row">
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/Men4.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Air Jordan Mid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6999
                </h5>
                <p    className="card-text">Men's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={menhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/Men5.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  RS-X&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹6799
                </h5>
                <p    className="card-text">Men's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={menhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/Men6.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Highs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299</h5>
                <p    className="card-text">Men's Sport shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={menhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/men 7.jfif"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Highs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299</h5>
                <p    className="card-text">Men's Sport shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={menhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* <!-- women section --> */}
    <div    className="carousel-item " id="women">
      <div    className="container">
        <div    className="row">
          <div    className="col-md-12 col-sm-6">
            <h3 >WOMEN SECTION</h3>
          </div>
        </div>
        <div    className="row">
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women1.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Blaze
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299
                </h5>
                <p    className="card-text">Women's Running Shoe</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women2.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Hyperactives &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3399</h5>
                <p    className="card-text">Women's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women3.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Adidas Hyperon &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3399</h5>
                <p    className="card-text">Women's Tennis Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={womenhandleIncrement} className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women 7.jfif"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Adidas Slick &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3399</h5>
                <p    className="card-text">Women's Tennis Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div    className="container" id="women-card-part-2">
        <div    className="row" >
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women4.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Adidas Energy
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹2999</h5>
                <p    className="card-text">Women's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women5.webp"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Flyers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4799
                </h5>
                <p    className="card-text">Women's Sport Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women6.webp"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Nitro&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299
                </h5>
                <p    className="card-text">Women's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/women 9.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Fly&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299
                </h5>
                <p    className="card-text">Women's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={womenhandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- kids section --> */}
    <div    className="carousel-item " id="kids">
      <div    className="container">
        <div    className="row">
          <div    className="col-md-12 col-sm-6">
            <h3>KID SECTION</h3>
          </div>
        </div>
        <div    className="row">
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid1.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Levi's Denim Shoes&nbsp;&nbsp;&nbsp;&nbsp;₹2100
                </h5>
                <p    className="card-text">Kid's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button  onClick={kidshandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid2.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike
                  Sneakers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4100</h5>
                <p    className="card-text">Kid's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={kidshandleIncrement}   className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid3.webp"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike
                  Superstar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4500</h5>
                <p    className="card-text">Kid's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={kidshandleIncrement}   className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid 7.jfif"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Mini&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4500
                </h5>
                <p    className="card-text">Kid's Running Shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button    onClick={kidshandleIncrement}  className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div    className="container" id="kid-card-part-2" >
        <div    className="row">
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid4.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Blaze
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3700
                </h5>
                <p    className="card-text">Kid's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={kidshandleIncrement}   className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid5.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Air Max
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4999
                </h5>
                <p    className="card-text">Kid's Sneakers</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={kidshandleIncrement}   className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid6.jpg"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Nike Stan Smith &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹3999 </h5>
                <p    className="card-text">Kid's Sport shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={kidshandleIncrement}   className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
          <div    className="col-sm">
            <div    className="card"  >
              <img src=" assets/img/kid 8.jfif"    className="card-img-top" alt="..."  />
              <div    className="card-body">
                <h5    className="card-title">Puma
                  Highs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₹4299</h5>
                <p    className="card-text">Kid's Sport shoes</p>
                 <a    className="btn btn-dark" href="payment.html"><Link to="/Payment">Buy Now</Link></a>
                <button   onClick={kidshandleIncrement}   className="btn btn-dark">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a    className="carousel-control-prev" href="#my-carousel-2" role="button" data-bs-slide="prev">
    <span    className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span    className="sr-only"></span>
  </a>
  <a    className="carousel-control-next" href="#my-carousel-2" role="button" data-bs-slide="next">
    <span    className="carousel-control-next-icon" aria-hidden="true"></span>
    <span    className="sr-only"></span>
  </a>
</div>

</div>


       </>
   )
}
export default Carousel2;