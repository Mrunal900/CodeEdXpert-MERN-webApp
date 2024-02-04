import React from 'react';
import ContactUsForm from '../../ContactPage/ContactUsForm';


function ContactFormSection() {
  return (
    <div className="mx-auto w-[90%] lg:w-auto border border-richblack-600 bg-[#0000003b] rounded-3xl p-5">
      <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
      <p className="text-center text-richblack-300 mt-3">
        We&apos;d love to here for you, Please fill out this form.
      </p>
      <div className="mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactFormSection