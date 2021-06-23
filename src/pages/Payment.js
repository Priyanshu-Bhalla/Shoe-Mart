import React from "react";


const Payment = () => {
  return (
<div>

<div class="container" style={{width: "1000px", marginTop: "50px"}}>
  
    <form class="container bg-light" style={{border:"2px solid grey", borderRadius: "20px"}} name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
        <div class=" container-fluid bg-dark text-light" style={{borderRadius: "10px",height: "50px"}}>
            <h3 style={{paddingLeft: "0px", paddingTop: "8px"}}>Payment Form</h3>
        </div><br/>
        
            <div class="form-group">
              <label for="firstname" > First Name: </label>
              <input type="text" name="firstname" id="firstname" required maxlength="45" style={{width: "350px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter First Name"/>

           
              <label for="lastname" style={{marginLeft: "50px;"}}> Last Name: </label>
              <input type="text" name="lastname" id="lastname" required maxlength="45"  style={{width: "350px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter Last Name"/>
            </div>
            <br/>
            
           
      
        <div class="form-row">
          <div class="form-group col-6">
            <label for="Email" >Email Address: </label>
            <input type="email" name="Email" id="Email" required maxlength="45" style={{width: "450px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter Email Adderess"/>
          </div>
          <div class="form-group col-6">
            <label for="password" >Password: </label>
            <input type="password" name="password" id="password" required maxlength="45" style={{width: "450px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter Password"/>
          </div>
        </div>
         
        <div class="form-row">
          <div class="form-group col-6 ">
            <label for="Adderess" >Address: </label>
            <input type="text" name="Adderess" id="Adderess" required maxlength="45" style={{width: "450px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter Adderess"/>
          </div>
          <div class="form-group col-6">
            <label for="city" >City: </label>
            <input type="text" name="city" id="city" required maxlength="45" style={{width: "450px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter City"/>
          </div>
        </div>
        <br/>
          
        
        <div class="form-group">
          <label for="passcode" > PassCode: </label>
          <input type="password" name="passcode" id="passcode" required maxlength="45" style={{width: "350px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter PassCode"/>

       
          <label for="zip" style={{marginLeft: "50px"}}> Zip: </label>
          <input type="number" name="zip" id="zip" required maxlength="45"  style={{width: "350px",borderRadius: "3px", border: "1px solid lightgray", padding: "5px 5px"}} placeholder="Enter Zip Code"/>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <button id="paybtn"  type="submit" value="Submit" class="btn btn-dark btn-lg" style={{marginLeft:"400px", marginBottom: "20px",marginTop: "50px", width: "150px"}}>
              Pay Now
             </button>
          </div>
        </div>

      </form>
</div>
          
</div>
  )
};
export default Payment;
