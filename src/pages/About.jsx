import React from 'react';
// import BannerImage1 from '../assets/Images2/AbBanner1.jpg';
// import BannerImage2 from '../assets/Images2/AbBanner2.jpg';
// import BannerImage3 from '../assets/Images2/AbBanner3.jpg';
import HighlightText from '../components/core/HomePage/HighlightText';
import Quote from '../components/core/AboutPage/Quote';
import FoundingStory from '../assets/Images2/Founder.jpg';
import StatsComponent from '../components/core/AboutPage/StatsComponent';
import LearningGrid from '../components/core/AboutPage/LearningGrid';
import ContactFormSection from '../components/core/AboutPage/ContactFormSection';
import MagicPattern from '../assets/patterns/magicpattern.png';
import patternImage from '../assets/patterns/pattern.png';
import doodle1 from '../assets/patterns/Coding-doodle.png';
import doodle2 from '../assets/patterns/Coding-cuate.png';
import Footer from '../components/Common/Footer';
import ReviewSlider from '../components/Common/ReviewSlider';




const About = () => {
  return (
    <div>
        <section className=' relative z-0'>
            <img src={doodle1} alt="doodle1"  className=' absolute top-0 left-0 -z-50 w-[28%] hidden lg:block'/>
            <img src={doodle2} alt="doodle2"  className=' absolute top-0 right-0 -z-50 w-[28%]  hidden lg:block'/>
            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
            <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
                Driving Innovation in Online Education for a
                <HighlightText text={"Brighter Future"} />
                <p className="mx-auto mt-10 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                Studynotion is at the forefront of driving innovation in online
                education. We're passionate about creating a brighter future by
                offering cutting-edge courses, leveraging emerging technologies,
                and nurturing a vibrant learning community.
                </p>
            </header>
            <div className="sm:h-[70px] lg:h-[150px]"></div>
            {/* <div className="absolute lg:hidden bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
                <img src={BannerImage1} alt="" loading='lazy' />
                <img src={BannerImage2} alt="" loading='lazy'/>
                <img src={BannerImage3} alt="" loading='lazy'/>
            </div> */}
            </div>
        </section>

        <section  className=' bg-[#FAF8FF]'>
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="h-[40px] "></div>
            <Quote />
            </div>
        </section>

        <section className=' relative z-0'>
            <img src={MagicPattern} alt="magicpattern" className='absolute blur-sm -z-50 h-auto hidden lg:block 
            lg:h-screen w-[1200px] '/>
            <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                    Our Founding Story
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                    Our e-learning platform was born out of a shared vision and
                    passion for transforming education. It all began with a group of
                    educators, technologists, and lifelong learners who recognized
                    the need for accessible, flexible, and high-quality learning
                    opportunities in a rapidly evolving digital world.
                </p>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                    As experienced educators ourselves, we witnessed firsthand the
                    limitations and challenges of traditional education systems. We
                    believed that education should not be confined to the walls of a
                    classroom or restricted by geographical boundaries. We
                    envisioned a platform that could bridge these gaps and empower
                    individuals from all walks of life to unlock their full
                    potential.
                </p>
                </div>

                <div>
                <img
                    src={FoundingStory}
                    alt=""
                    width={570}
                />
                </div>
            </div>
            <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]  bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                    Our Vision
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                    With this vision in mind, we set out on a journey to create an
                    e-learning platform that would revolutionize the way people
                    learn. Our team of dedicated experts worked tirelessly to
                    develop a robust and intuitive platform that combines
                    cutting-edge technology with engaging content, fostering a
                    dynamic and interactive learning experience.
                </p>
                </div>
                <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                <h1 className="bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
                </h1>
                <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                </p>
                </div>
            </div>
            </div>
        </section>

        <StatsComponent/>
        <section className=" mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        </section>

        <section className="relative z-0">
            <div className=' mx-auto my-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white'>
            <ContactFormSection />
            </div>
            <img src={patternImage} alt="" className=' absolute left-0 top-0'/>
            <img src={patternImage} alt="" className=' absolute right-1 bottom-6 rotate-180 scale-125'/>
        </section>

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

export default About