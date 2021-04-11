import React, {useState} from "react";
import emailjs from "emailjs-com";
//import {useForm} from "react-hook-form";



const Contact = () => {
   const [successMessage, setSuccessMessage]= useState("");
//   const {register, handleSubmit, errors} = useForm();
  

   
  const serviceID="service_ID";
  const templateID="template_ID";
  const userID="user_odCHTPQw7UXhl6yne58Tw"; 

  const sendEmail=(e)=> {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  {/* 
  const onSubmit=(data ,r) => {
      sendEmail(
          serviceID,
          templateID,
          {
              name:data.name,
              phone:data.phone,
              email:data.email,
              subject:data.subject,
              description :data.description
            
            },
            userID
      )
         r.target.reset();
  }
  const sendEmail = (serviceID, templateID, vaiables, userID) =>{
  

    emailjs.send(serviceID, templateID, vaiables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfuly! We'll contact you as soon as possible.");
      }).catch(err=> console.error(`something went wrong ${err}`));
  }

*/}
    return (
        <div className="contacts">
            <div className="text-center">
                <h1>CONTACT US</h1>
                <p>Please fill yout the form and We'll contact you as soon as possible.</p>
                <span class="success-messag">{successMessage}</span>
            </div>
            <div className="container">
              <form onSubmit={sendEmail}>
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <div class="row">
                 <div className="col-md-6 col-xs-12">

                     <input
                    
                     type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      
                    //   ref={
                    //      register({
                    //          required:"please enter you name",
                    //         maxLength:{
                    //             value:20,
                    //             message:"please enter a name with fewer than 20 characters"
                    //       }
                    //      })
                    //    }

                      />
                       <div className="line"></div>
                        {/* <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>  */}

                      <input
                     
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      />
                      <div className="line"></div>
                     <input
                     
                     type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      />
                      <div className="line"></div>
                       <input
                       
                       type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      />
                      <div className="line"></div>
                 </div>
                   <div className="col-md-6 col-xs-12">

                       <textarea
                       id="description"
                       type="text"
                       className="form-control"
                       placeholder="Please describe shortly ..."
                       name="description"
                       
                       >
                       </textarea>
                       <div className="line"></div>
                       <button className="btn-contact contact-btn" type="submit">CONTACT US</button>
                   </div>
                </div>
                </form>
            </div>
            
        </div>
    )
}

export default Contact;
