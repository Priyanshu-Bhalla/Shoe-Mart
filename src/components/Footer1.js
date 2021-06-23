import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";
const Footer1 =()=> {
   return(
       <>
       <div class="row">
    <div class="col">
      <footer class="page-footer font-small stylish-color-dark pt-4 bg-dark text-light" >
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <a href="#" class="btn btn-light btn-rounded"><Link to="/Login">Sign up!</Link></a>
          </li>
        </ul>
        <ul class="list-unstyled list-inline text-center bg-light">
          <li class="list-inline-item">
            <a href="https://www.facebook.com/" className="fa fa-facebook"></a>
          </li>
          <li class="list-inline-item">
            <a href="https://twitter.com/?lang=en" className="fa fa-twitter"></a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.google.com/" className="fa fa-google"></a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
          </li>
        </ul>
        
      </footer>
    </div>
  </div>
       </>
   )
}
export default Footer1;