import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import HighlightText  from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
// import Welcome from "../assets/Images/Welcome.mp4";
import prog from "../assets/patterns/Programmerpana.png";
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import patternImage from '../assets/patterns/pattern.png';
// import patternImage2 from "../assets/patterns/honeycomb.png";
import ExploreMore from '../components/core/HomePage/ExploreMore';
import { FaArrowRight } from 'react-icons/fa';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningSection from '../components/core/HomePage/LearningSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../components/Common/Footer';
import ReviewSlider from '../components/Common/ReviewSlider';


const Home = () => {
  return (
    <div>
        {/* section1 */}
        <div className='home-bg2 relative z-0'>
          
          <div className=' flex flex-col lg:flex-row w-11/12 mx-auto mb-24 '>
            <div className='relative mx-auto flex flex-col  max-w-maxContent items-center 
            text-white justify-center gap-2 '>
              <div className=' mt-8'>
                <TypeAnimation
                  sequence={[
                    '<',
                    650,
                    '</', //  Continuing previous Text
                    650,
                    '</>',
                    650,
                    '</>|',
                    650,
                    '</>|c',
                    650,
                    '</>|co',
                    650,
                    '</>|cod',
                    650,
                    '</>|code',
                    650,
                    '</>|codeEd',
                    650,
                    '</>|codeEdX',
                    650,
                    '</>|codeEdX',
                    650,
                    '</>|codeEdXp',
                    650,
                    '</>|codeEdXpe',
                    650,
                    '</>|codeEdXper',
                    650,
                    '</>|codeEdXpert',
                    650,
                    '',
                    650,
                  ]}
                  style={{ fontSize: '2em', color: '#7faaff'}}
                  repeat={Infinity}
                />
              </div>
              <Link>
                  <div className=' group mt-12 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                      transition-all duration-200 hover:scale-95 w-fit'>
                      <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                      transition-all duration-200 group-hover:bg-richblack-900'>
                          <p>Become an Instructor</p>
                          <BsFillArrowRightCircleFill />
                      </div>
                  </div>
              </Link>

              <div className='text-center text-4xl font-semibold mt-7'>
                  Empower Your Future with
                  <HighlightText text={"Coding Skills "} />
              </div>

              <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-200'>
                  With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
              </div>
              
              <div className='flex flex-row gap-7 mt-8'>
                  <CTAButton active={true} linkto={"/signup"}> 
                      Learn More
                  </CTAButton>

                  <CTAButton active={false} linkto={"/login"}> 
                      Book a Demo
                  </CTAButton>
              </div>

              {/* <div className=' relative z-0 mx-3 mt-12 mb-36  w-[770px] h-[432px] bg-shadow'>
                  <video
                  muted
                  autoPlay
                  >
                  <source  src={Welcome} type="video/mp4" />
                  </video>
                  <div className=' absolute -z-10 top-4 left-4  w-[770px] h-[432px] bg-[rgba(255,255,255,0.2)]'>

                  </div>
              </div> */}
              

            </div>
            <div>
                <img src={prog} alt="prog" className='w-[80%] mx-auto'/>
            </div>
          </div>
          
          <img src={patternImage} alt="" className=' absolute left top-0'/>
          <img src={patternImage} alt="" className=' absolute right-1 bottom-6 rotate-180 scale-125'/>
          {/* <img src={patternImage2} alt="" className=' absolute -z-10 top-0' /> */}
          

          
          
        </div>

        <div className=' w-11/12 h-1 line'></div>

        {/* Code Section */}
        <div className='relative mx-auto flex flex-col h-auto w-11/12 max-w-maxContent items-center
         text-white justify-between'>
          {/* Code Section 1  */}
          <div>
            <CodeBlocks
              position={"lg:flex-row"}
              heading={
                <div className="text-4xl font-semibold">
                  Unlock your
                  <HighlightText text={"coding potential"} /> with our online
                  courses.
                </div>
              }
              subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
              }
              ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-white"}
              codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
              backgroudGradient={<div className="codeblock1 absolute"></div>}
            />
          </div>

          {/* Code Section 2 */}
          <div>
            <CodeBlocks
              position={"lg:flex-row-reverse"}
              heading={
                <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                  Start
                  <HighlightText text={"coding in seconds"} />
                </div>
              }
              subheading={
                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
              }
              ctabtn1={{
                btnText: "Continue Lesson",
                link: "/signup",
                active: true,
              }}
              ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
              }}
              codeColor={"text-white mb-3"}
              codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
              backgroudGradient={<div className="codeblock2 absolute"></div>}
            />
          </div>
          <div className=' w-11/12 h-1 line'></div>
          <ExploreMore/>
        </div>

        <div className=' w-11/12 h-1 line'></div>

        {/*Section 2  */}
        <div className='bg-pure-greys-5 text-richblack-650'>
          <div className='homepage_bg h-[310px]'>

            <div className='w-11/12  max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
              <div className='h-[150px]'></div>
              <div className='flex flex-row gap-7 text-white '>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex items-center gap-3' >
                        Explore Full Catalog
                        <FaArrowRight />
                    </div>
                            
                </CTAButton>
                <CTAButton active={false} linkto={"/signup"}>
                  <div>
                      Learn more
                  </div>
                </CTAButton>
              </div>

            </div>

          </div>

          <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
            <div className='flex flex-row justify-between gap-5 mb-10 mt-[95px]'>
              <div className='text-4xl font-semibold w-[45%]'>
                Get the Skills you need for a
                <HighlightText text={"Job that is in demand"} />
              </div>

              <div className='flex flex-col gap-10 w-[40%] items-start'>
                <div className='text-[16px]'>
                  The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                         Learn more
                    </div>
                </CTAButton>
              </div>
            </div>

            <TimelineSection />
            <LearningSection/>
          </div>

          

        </div>

        {/*Section 3 */}
        <div className=' relative w-11/12 mx-auto max-w-maxContent flex-col items-center 
        justify-between gap-8 first-letter text-white'>

          <InstructorSection />

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

export default Home