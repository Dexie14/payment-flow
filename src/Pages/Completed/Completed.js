import React from "react";
import classes from "./Completed.module.css";
import { Link } from "react-router-dom";
import check from "../../Assets/Profile/check.svg";

const Completed = () => {
  return (
    <div className={classes.complete}>
    <div className={classes.width}>
      <div className={classes.image}>
        <img src={check} alt=""/>
      </div>
      <h3>Purchase Completed</h3>
      <p>Please check your email for details concerning this transaction</p>
      <Link to = '/'>
        <h6>Return Home</h6>
      </Link>
    </div>
    </div>
  );
};

export default Completed;
