import React from "react";
import Builder from "../slide_1.png";

const AboutUS = () => {
    return (
        <div id="about" className="container py-5">
           <div className="row">
              <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap mb-5"><img className="profile-img" src={Builder} alt="marquise"></img></div>
             </div>
              <div className="col-lg-6 col-xm-12 mt-3">
                  <h2 className="about-heading">About Marquise</h2>
                            <p>
                              We are experienced Toronto custom home builders with a passion for perfection, and a dedication to ensure you are in love with your quality custom home built for you and your family and generations to come. When you choose Marquise, you demand a higher-standard, custom-built home that is just as unique as you.
                            </p>

                            <p>
                            As our valued client, we translate your vision into a reality with our team of experts in the art of home-building who value your time and money. We are process-driven custom home builders who strive to ensure your values are incorporated throughout the building process to meet your requirements, while combining our value-added market knowledge and our dedication for exceptional quality. Our success is intrinsically tied to your complete satisfaction and we pride ourselves in going above and beyond to ensure your requirements are met and exceeded... just ask any of our proud home owners.
                            </p>
                            <p>
                            Let us help you build the exquisite home of your dreams...
                            </p>
                  
                  </div>  
           </div> 
        </div>
    )
}

export default AboutUS;
