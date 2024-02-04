import React from 'react';
import Instructor from "../../../assets/Images/instructor2.jpg";
import HighlightText from './HighlightText';
import CTAButton from "./Button";
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16 mb-16'>
      <div className='flex flex-col lg:flex-row gap-20 items-center'>

        <div className='lg:w-[50%] w-fit'>
            <img
                src={Instructor}
                alt="Instructor"
                style={{boxShadow: '10px 10px 0px 0px rgba(256,256,256)'}}
                className=' w-[433px] h-[394px] shadow-white shadow-2xl'
            />
        </div>

        <div className='lg:w-[50%] w-fit flex flex-col gap-10'>
            <div className='text-4xl font-semobold w-[50%]'>
                Become an
                <HighlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection