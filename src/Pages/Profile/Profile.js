import React from 'react';
import classes from "./Profile.module.css";
import personal from "../../Assets/Profile/personal.svg";
import FormGroup from '../../FormGroup/FormGroup';
import { Link } from "react-router-dom";

const Profile = () => {
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
             <img src={personal} alt="progress"/> 
             </div>
             </div>

             <FormGroup
             label="Name"
             type="text"
             placeholder="Opara Linus Ahmed"
              />
             <FormGroup
             label="Email Address"
             type="email"
             span={true}
             text={true}
             placeholder="OparaLinusAhmed@devmail.com"
              />
             <FormGroup
             label="Address 1"
             type="text"
             placeholder="The address of the user goes here"
              />
             <FormGroup
             label="Address 2"
             type="text"
             placeholder="and here"
              />

              <div className={classes.group}>
                <FormGroup
                label="Local Government "
                type="text"
                placeholder="Surulere"
                names={classes.styled}
                />
                <div className={classes.style}>
                    <h5>States</h5>
                   <select className={classes.selected}>
                              <option disabled selected hidden>
                                Lagos
                              </option>
                                <option>Lagos</option>
                                <option>Ogun</option>
                                <option>Abuja </option>
                                <option>Ibadan</option>
                  </select>
                  </div>
              </div>

              <div className={classes.buttonDiv}>
                <Link to = "/billing">
                <button className={classes.button}>Next</button>
                </Link>  
                <h5>Cancel Payment</h5>
              </div>
            
    </div>
  )
}

export default Profile