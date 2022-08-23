import React from 'react';
import classes from "./PaymentLayout.module.css";

const PaymentLayout = ({children}) => {
  return (
    <div className={classes.layout}>
        <div className={classes.pagewidth}>
        {children}
             
        </div>
    </div>
  )
}

export default PaymentLayout