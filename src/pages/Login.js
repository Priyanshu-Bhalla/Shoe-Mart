import React from 'react';
import '../login.css';

const Login =()=>{
    return(
        <>
            <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="login-card" id="login-card">
          <div className="row no-gutters">
            <div className="col-md-5">
              <img src="assets/img/login.jpg" alt="login" className="login-card-img"/>
              <p className="text-white font-weight-medium text-center flex-grow align-self-end footer-link text-small">
               
              </p>
            </div>
            <div className="col-md-7">
              <div  id="card-body">
                <div className="brand-wrapper">
                 <img src="assets/img/logo2.jpg" alt="logo" className="logo" style={{height: "70px", width: "70px"}} />
                  <h2 style={{marginLeft:"70px", marginTop: "-53px", fontWeight: "bold", color: "rgb(0, 24, 92)"}}>
                      Shoe-Mart
                  </h2>
  
                </div>
                <p className="login-card-description" id="login-card-description">Sign into your account</p>
                <form action="#!">
                    <div className="form-group">
                      <label for="email" className="sr-only">Email</label>
                      <input type="email" name="email" id="email" className="form-control" id="form-control" placeholder="Email address"/>
                    </div>
                    <div className="form-group mb-4">
                      <label for="password" className="sr-only">Password</label>
                      <input type="password" name="password" id="password" className="form-control" id="form-control" placeholder="***********"/>
                    </div>
                    <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login"/>
                  </form>
                  <a href="#!" className="forgot-password-link">Forgot password?</a>
                  <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                  <nav className="login-card-footer-nav">
                    <a href="#!">Terms of use.</a>
                    <a href="#!">Privacy policy</a>
                  </nav>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </main>
        </>
    )
}
export default Login;