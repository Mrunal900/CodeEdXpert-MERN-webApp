import React from 'react';
import ContactDetails from '../components/ContactPage/ContactDetails';
import ContactForm from '../components/ContactPage/ContactForm';
import Footer from '../components/Common/Footer';
import ReviewSlider from '../components/Common/ReviewSlider';


const Contact = () => {
  return (
    <div className='contact-bg'>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className=' relative w-11/12 mx-auto max-w-maxContent flex-col items-center 
        justify-between gap-8 first-letter text-white'>
        <div className='hidden lg:block'>
              {/* Reviws from Other Learner */}
          <h1 className="text-center text-4xl font-semibold mt-8">
            Reviews from other learners
          </h1>
          <ReviewSlider />
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact