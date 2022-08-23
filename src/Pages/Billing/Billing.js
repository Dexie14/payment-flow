import React from "react";
import classes from "./Billing.module.css";
import billing from "../../Assets/Profile/billing.svg";
import FormGroup from '../../FormGroup/FormGroup';
import { Link } from "react-router-dom";


const Billing = () => {
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
            <FormGroup
                label="Name on Card"
                type="text"
                span={true}
                placeholder="Opara Linus Ahmed"
            />
            <div className={classes.style}>
                    <h5>States</h5>
                   <select className={classes.selected}>
                              <option disabled selected hidden>
                                Visa
                              </option>
                                <option>Visa</option>
                                <option>Master Card</option>
                                <option>Verve</option>
                  </select>
            </div>
            <div className={classes.group}>
            <FormGroup
                label="Card details"
                type="number"
                span={true}
                names={classes.styledone}
                placeholder="44960 44960 44960 44960"
            />
            <div className={classes.grouptwo}>
            <FormGroup
                label="Expiry date"
                type="number"
                span={true}
                names={classes.styletwo}
                placeholder="04 / 23"
            />
            <FormGroup
                label="CVV"
                type="number"
                span={true}
                names={classes.stylethree}
                placeholder="923"
            />
            </div>
         </div>

         <div className={classes.buttonDiv}>
                <Link to = "/pay">
                <button className={classes.button}>Next</button>
                </Link>  
                <Link to = "/">
                <h5>Cancel Payment</h5>
                </Link>
              </div>
    </div>
  );
};

export default Billing;
