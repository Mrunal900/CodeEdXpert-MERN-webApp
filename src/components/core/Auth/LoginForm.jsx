import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { Link, useNavigate }  from 'react-router-dom'
import { login } from '../../../services/operations/authAPI';



const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false);

  const {email, password} = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  
  return (
    <div className=' w-full '>
      <form 
      onSubmit={handleOnSubmit}
      className="mt-6 flex flex-col gap-y-4">
        <label>
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Email Address <sup className="text-pink-200">*</sup></p>
          <input
            required
            type="text"
            name="email"
            onChange={handleOnChange}
            placeholder="Enter email address"
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            className=' w-full text-white p-[12px] border-b-2 border-white bg-transparent focus:border-[rgb(103,105,255)] focus:outline-none'
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-white">
            Password <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            autoComplete='on'
            placeholder="Enter Password"
            onChange={handleOnChange}
            // style={{
            //   boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            // }}
            // className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
            className=' w-full text-white p-[12px] border-b-2 border-white bg-transparent focus:border-[rgb(103,105,255)] focus:outline-none'
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-1 ml-auto max-w-max text-xs text-[#7faaff] hover:text-[#5284e7]">
              Forgot Password
            </p>
          </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-[#7faaff] py-[8px] px-[12px] font-medium text-white hover:bg-[#5284e7] "
      >
        Log In
      </button>
      </form>
    </div>
  )
}

export default LoginForm