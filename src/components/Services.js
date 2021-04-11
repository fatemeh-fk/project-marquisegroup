import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
          <h1 className="py-5">MY SERVICES</h1>
            <div className="container">
                <div className="row">
                   <div className="col-md-3 col-sm-6">
                       <div className="box">
                           <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                           <h3>Builder1</h3>
                           <p>I approch each project individually and always focus on the result</p>
                       </div>
                   </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                       <div className="box">
                       <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                           <h3>Builder2</h3>
                           <p>project2</p>
                       </div>
                   </div>
                   {/*  */}
                   <div className="col-md-3 col-sm-6">
                       <div className="box">
                       <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} size="2x" /></div>
                           <h3>Builder3</h3>
                           <p>project 3</p>
                       </div>
                   </div>
                    {/*  */}
                    <div className="col-md-3 col-sm-6">
                       <div className="box">
                       <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                           <h3>Builder4</h3>
                           <p>project 4</p>
                       </div>
                   </div>
                </div>
            </div>

          </div>

        
    )
}

export default Services;
