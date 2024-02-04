import React from 'react';

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

import timelineImage from "../../../assets/Images/practicing.jpg";


const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
];

const TimelineSection = () => {
  return (
        <div className='flex flex-col lg:flex-row gap-40 items-center '>
            {/* left section */}
            <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
                {
                    timeline.map((ele,index)=>{
                        return(
                            <div className=' flex flex-col' key={index}>
                                <div className='flex flex-row gap-6'>
                                    <div className='w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center'>
                                    <   img src={ele.Logo} alt='logo' />
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{ele.heading}</h2>
                                        <p className='text-base'>{ele.Description}</p>
                                    </div>
                                </div>

                                <div className="hidden lg:block   h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]"></div>
                            </div>
                        )
                })}
            </div>

            {/* Right section */}
            <div className="relative w-fit h-fit shadow-xl">
                <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-[#8ab1fe] flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
                    {/* Section 1 */}
                    <div className="flex gap-5 items-center lg:border-r border-[#536997] px-7 lg:px-14">
                    <h1 className="text-3xl font-bold w-[75px]">10</h1>
                    <h1 className="text-[#536997] text-sm w-[75px]">
                        Years experiences
                    </h1>
                    </div>

                    {/* Section 2 */}
                    <div className="flex gap-5 items-center lg:px-14 px-7">
                    <h1 className="text-3xl font-bold w-[75px]">250</h1>
                    <h1 className="text-[#536997] text-sm w-[75px]">
                        types of courses
                    </h1>
                    </div>
                </div>
                <img
                    src={timelineImage}
                    alt="timelineImage"
                    className="w-[550px]  shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
                />
            </div>

        </div>
  )
}

export default TimelineSection