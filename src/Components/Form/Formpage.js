import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Formpage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_u9dd3ec', 'template_ceybq7l', form.current, {
        publicKey: 'ulBwvAs66-HdUpb6d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your Email send Successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email FAILED...', error.text);
        },
      );
  };

  return (
    <>
     <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-4 flex flex-col w-full mt-40 md:mr-60 md:ml-60">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-3">
              Sign Up
            </h2>
            <div class="relative mb-4">
    {/* <div style={{width :"500px" , height:"500px",margin:"10% auto"}}> */}

    <form ref={form} onSubmit={sendEmail}>
      
      <label for="exampleInputPassword1" class="form-label">Name</label>
    
      <input type="name" class="form-control " name="from_name" id="exampleInputPassword1" />
        
      <label for="exampleInputPassword1" class="form-label ">Email</label>
      <input type="name" class="form-control " name="user_email" id="exampleInputPassword1" />      
      <label for="exampleInputPassword1 " class="form-label">Message</label>
      <textarea type="name" class="form-control " name="message" id="exampleInputPassword1"/>
        <input type="submit" className=' btn-primary btn' value="Send" />
      </form>
      </div>
      {/* </div> */}
    </div>
     </>
   
  );
};

export default Formpage;