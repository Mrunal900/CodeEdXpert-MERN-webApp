import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { resetPassword } from '../services/operations/authAPI';



const UpdatePassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const { loading } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { password, confirmPassword } = formData;

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
      }

      const handleOnSubmit = (e) => {
        e.preventDefault()
        const token = location.pathname.split("/").at(-1)
        dispatch(resetPassword(password, confirmPassword, token, navigate))
      }    

  return (
    <div className=' relative w-screen lg:h-screen h-auto gap-x-2  flex flex-col justify-center items-center z-0'>
        <div className=' absolute w-full h-full -z-40 auth-bg block '></div>
        {loading ? (
            <div className="spinner"></div>
        ) : (
            <div className="lg:max-w-[500px] w-[90%] lg:my-auto my-16  p-4 bg-[#0000006a] rounded-2xl lg:p-8">
                <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
                    Choose new password
                </h1>
                <p className="my-4 text-[1.125rem] leading-[1.625rem] text-richblack-100">
                    Almost done. Enter your new password and youre all set.
                </p>
                <form onSubmit={handleOnSubmit}>
                    <label className="relative">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        New Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={password}
                        onChange={handleOnChange}
                        placeholder="Enter Password"
                        className=' w-full text-white p-[12px] border-b-2 border-white 
                        bg-transparent focus:border-[rgb(103,105,255)] focus:outline-none'
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
                    </label>
                    <label className="relative mt-3 block">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                        Confirm New Password <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleOnChange}
                        placeholder="Confirm Password"
                        className=' w-full text-white p-[12px] border-b-2 border-white 
                        bg-transparent focus:border-[rgb(103,105,255)] focus:outline-none'
                    />
                    <span
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                    >
                        {showConfirmPassword ? (
                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )}
                    </span>
                    </label>

                    <button
                    type="submit"
                    className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[12px] px-[12px] font-medium text-richblack-900"
                    >
                    Reset Password
                    </button>
                </form>
                <div className="mt-6 flex items-center justify-between">
                    <Link to="/login">
                    <p className="flex items-center gap-x-2 text-richblack-5">
                        <BiArrowBack /> Back To Login
                    </p>
                    </Link>
                </div>
            </div>
        )}
    </div>
  )
}

export default UpdatePassword