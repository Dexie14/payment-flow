import React from "react";
import classes from "./Pay.module.css";
import billing from "../../Assets/Profile/billing.svg";
import { Link } from "react-router-dom";
import naira from "../../Assets/Profile/naira.svg"


const Pay = () => {
  return (
    <div className={classes.profile}>
      <h3>Complete your Purchase</h3>
      <div className={classes.nav}>
        <h5>Personal Info</h5>
        <h5>Billing Info</h5>
        <h5>Confirm Payment</h5>
      </div>
      <div className={classes.progress}>
        <div className={classes.image}>
          <img src={billing} alt="progress" />
        </div>
      </div>

      <div className={classes.box}>
        <div className={classes.naira}>
            <div className={classes.items}>
            <h6>Item Name</h6>
            <h6><span><img src ={naira} alt='naira'/></span>Price</h6>
            </div>
        </div>
        <div className={classes.list}>
            <h6>Data science and usability</h6>
            <h6>50,000.00</h6>
        </div>
        <div className={classes.list}>
            <h6>Shipping</h6>
            <h6>0.00</h6>
        </div>
        <hr></hr>
        <div className={classes.total}>
            <h6>Total</h6>
            <h6>50,000.00</h6>
        </div>
      </div>
            
           
         

         <div className={classes.buttonDiv}>
                <Link to = "/completed">
                <button className={classes.button}>Pay</button>
                </Link>  
                <Link to = "/">
                <h5>Cancel Payment</h5>
                </Link>
        </div>
    </div>
  );
};

export default Pay;
