import React from 'react';
import {Link} from 'react-router-dom';
import "./First.css";
const First = () => {
  return (
    <div className="main">
     <h1>Create New Accont <span className="span">Contact Us</span></h1>
     <div className="main-b">
     <div className="main-c">
     <div className="box1 boxset1"><h5>1</h5><h3>Your Profile</h3></div>
      <div className="box1 boxsety"><h5>2</h5><h3>Business Information</h3></div>
      <div className="box1 boxset3"><h5>3</h5><h3>Additional users</h3></div>
     </div>
     <div className="text">
     <p>Step 1</p>
     <h2>our Profile</h2>
     <p>Enter the login information for your account.You will
     be able to create additional users after registering</p>
     </div>
     <form className='fr'>
      <div className="form-group">
      <div className='form1'>
       <lebal>First Name*</lebal>
       <input type="text" name="name" placeholder="Input your First Name" required/>
      </div>
      <div className='form1'>
       <lebal>Last Name*</lebal>
       <input type="text" name="name" placeholder="Input your Last Name" required/>
      </div>
      </div>
      <div className="form-group">
      <div className='form1'>
       <lebal>Email*</lebal>
       <input type="email" name="name" placeholder="Input Your Email" required/>
      </div>
      <div className='form1'>
       <lebal>Phone Number*</lebal>
       <input type="number" name="name" placeholder="Input your phone number" required/>
      </div>
      </div>
      <div className="form-group">
      <div className='form1'>
       <lebal>Password*</lebal>
       <input type="password" name="name" placeholder="First Name" required/>
      </div>
      <div className='form1'>
       <lebal>Confirm Password*</lebal>
       <input type="password" name="name" placeholder="Input your Last Name" required/>
      </div>
      </div>
     </form>
     </div>
     <div className='lower'>
      <p>{"< "} Back to Login</p>
      <Link to="/second"><button>Next Step {">"}</button></Link>
     </div>  
    </div>
  )
}

export default First