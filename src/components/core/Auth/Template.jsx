import React from 'react'
import { useSelector } from 'react-redux'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
// import magicpattern from '../../../assets/patterns/magicpattern.png';
// import patternImage from '../../../assets/patterns/pattern.png'
// import laservid from '../../../assets/patterns/laser.mp4'
// import logo from '../../../assets/Logo/codeedxpert-high-resolution-logo-transparent.png'
import signupimg from '../../../assets/Images/Signupimg.png'
import loginimg from '../../../assets/Images/Login-pana.png'

export const Template = ({title, description1, description2, formType}) => {
    const {loading} = useSelector((state)=> state.auth)

  return (
    <div className=' relative w-screen lg:h-screen bg-[#f0edfa] flex  justify-center items-center z-0'>
        {/* <div className=' absolute w-full h-screen -z-40 auth-bg 2xl:hidden   block '></div>
        <video className=' absolute hidden 2xl:mb-32 2xl:block lg:hidden md:hidden xl:hidden -z-40' src={laservid} muted autoPlay loop></video> */}
        {
            loading ? (
                <div className='loader'>Load&nbsp;ng</div>
            ):
            (
                <div className="mx-auto flex lg:my-0 my-16 lg:flex-row flex-col-reverse w-11/12 max-w-maxContent justify-between overflow-hidden rounded-xl ">
                    <div className='lg:w-[50%] p-8 flex flex-col justify-center items-center bg-black'>
                        <div>
                            <h1 className="text-[1.875rem]  font-semibold leading-[2.375rem] text-white">
                                {title}
                            </h1>
                            <p className="mt-6 text-[1.125rem] text-white leading-[1.625rem]">
                                {description1}
                                <span className=' font-light italic text-[#7faaff]'>{description2}</span>
                            </p>
                        </div>
                        {formType === 'signup'? <SignupForm/> : <LoginForm/>}          
                    </div>
                    <div className=" relative lg:w-[50%] p-5 flex flex-col justify-center items-center z-0">
                        <div className=' absolute auth-bg w-full h-full -z-40'></div>
                        {
                            formType === 'signup'? (
                                <img src={signupimg} alt='signUp'/>
                            ):
                            (<img src={loginimg} alt='login'/>)
                        }
                    </div>
                </div>
            )
        }
        {/* <img src={magicpattern} alt="magicpattern" className='absolute hidden lg:block -z-50 h-full lg:h-screen w-[1200px] ' />
        <img src={patternImage} alt="" className=' absolute left-0 top-0'/>
        <img src={patternImage} alt="" className=' absolute right-1 bottom-6 rotate-180 scale-125'/> */}
    </div>
  )
}
