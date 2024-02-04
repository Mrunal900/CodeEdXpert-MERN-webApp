import React from 'react';
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-[#242331]">
        We are passionate about revolutionizing the way we learn. Our
        innovative platform <HighlightText text={"combines technology"} />,{" "}
        <span className="text-[#7faaff] font-bold">
            {" "}
            expertise
        </span>
        , and community to create an
        <span className="text-[#7faaff] font-bold">
            {" "}
            unparalleled educational
        experience.
        </span> 
    </div>
  )
}

export default Quote