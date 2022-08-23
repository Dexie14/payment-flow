import React from 'react';
import classes from "./FormGroup.module.css";

const FormGroup = ({label, span, names, text, ...props}) => {
  return (
    <div className={`${classes.formGroup} ${names}`}>
        <label className={classes.formLabel}>{label} {span && <span>*</span>} </label>
        {text && <p>The purchase reciept would be sent to this address</p>}
        <input {...props}className={classes.formInput}/>
    </div>
  )
}

export default FormGroup