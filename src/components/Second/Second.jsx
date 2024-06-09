import React from 'react';
import {Link} from "react-router-dom";
import Right from "../assets/right.png";
import Wrong from "../assets/red.jpg";
import "./Second.css";
const Second = () => {
  return (
    <div className="main">
     <h1>Create New Accont <span className="span">Contact Us</span></h1>
     <div className="main-b">
     <div className="main-c">
     <div className="box2 boxsetx"><h5>1</h5><h3>Your Profile</h3></div>
      <div className="box2 boxset2"><h5>2</h5><h3>Business Information</h3></div>
      <div className="box2 boxset3"><h5>3</h5><h3>Additional users</h3></div>
     </div>
     <div className="text">
     <p>Step 2</p>
     <h2>Bussiness Information</h2>
     <p>Please enter information about your company</p>
     </div>
     <form className='fr'>
      <h3>GENERAL INFORMATION</h3>
      <div className="form-group">
      <div className='form1'>
       <lebal>Brand Name*</lebal>
       <input type="text" name="name" placeholder="Input your Brand Name" required/>
      </div>

      <div className='form1'>
       <lebal>Brand Type* <span className='spn'> ?</span></lebal>
       <div class="hide">Local:Brands with distribution in 3 divisions or 
       less  OR Multiple divisions but a total of 150 stores or less.
       <br/> 
       National:Brands with distribution in 4 divisions or 
       less  OR Multiple divisions but a total of 150 stores or less
       .</div>
       <input type="text" name="brand" placeholder="Input your Last Name" required/>
      </div>
      
      </div>
      <div className="form-group">
      <div className='form1'>
       <lebal>Street Address*</lebal>
       <input type="text" name="street" placeholder="Input Your Street Address" required/>
      </div>
      <div className='form1'>
       <lebal>City*</lebal>
       <input type="text" name="city" placeholder="Input City" required/>
      </div>
      </div>
      <div className="form-group">
      <div className='form1'>
       <lebal>Zip Code*</lebal>
       <input type="text" name="name" placeholder="First Name" required/>
      </div>
      <div className='form1'>
       <lebal>Text Id Number*</lebal>
       <input type="text" name="name" placeholder="Input your Last Name" required/>
      </div>
      </div>
      <h3>Documents</h3>
      <p>Once the following documents are signed, you'll be ready to get started.</p>
      <div className="text-agreements">
        <p>Electronically sign the agreements{" (s)"} <span><img src={Right}/></span></p>
        <h2>{">"}</h2>
      </div>
      <div className="text-agreements">
        <p>Non adult beverages kroger market supplier waiver and release. <span><img src={Wrong}/></span></p>
        <h2>{">"}</h2>
      </div>
      <h3>COI PDF UPLOAD</h3>
      <p>Once the following documents are signed, you'll be ready to get started.</p>
      <div className="text-agreements">
        <p>Electronically sign the agreements{" (s)"} <span><img src={Right}/></span></p>
        <h2>{">"}</h2>
      </div>
     </form>
     </div>
     <div className='lower'>
      <p>{"< "} Back to Login</p>
      <div className='btns'>
      <Link to="/"><button className='bnt1'>{"< "} Previous Step </button></Link>
      <button className='btnx2'>Next Step {">"}</button>
      </div>
     </div>  
    </div>
  )
}

export default Second
