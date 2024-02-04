import React, { useEffect, useState } from 'react';
import logo from "../../assets/Logo/codeedxpert-high-resolution-logo-transparent.png";
import { Link, matchPath, useLocation } from 'react-router-dom';
import {NavbarLinks} from "../../data/navbar-links";
import { useSelector } from 'react-redux';
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {apiConnector} from '../../services/apiconnector';
import {categories} from '../../services/apis';
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { RxCross1 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";

const NavBar = () => {
  const {token} = useSelector((state)=>state.auth);
  const {user} = useSelector((state)=>state.profile);
  const {totalItems} = useSelector((state)=>state.cart);
  
  const location = useLocation();

  const [subLinks, setSublinks] = useState([]);
  const [navbarActive, setNavbarActive] = useState(false)

  const fetchSubLinks = async()=>{
    try{
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("Printing Sublinks result:" , result);
      setSublinks(result.data.data);
    }
    catch(error){
      console.log("Could not fetch the category list")
      console.log(error);
    }
  }

  useEffect( ()=> {
    fetchSubLinks();
  },[]);


  const matchRoute =  (route)=> {
    return matchPath({path:route}, location.pathname)
  }

  return (
    <>
      <div className=' relative z-50 flex h-14 items-center justify-center'>
        <div className='flex w-11/12 py-2 max-w-maxContent items-center justify-between'>
            {/* logo */}
            <Link to={"/"}>
              <img src={logo} alt="logo" width={160} height={42} loading='lazy'/>
            </Link>

            {/* Nav Links */}
            <nav className=' hidden lg:block'>
              <ul  className='flex gap-x-6 text-richblack-25'>
                {
                  NavbarLinks.map((link,index)=>(
                    <li key={index}>
                      {
                        link.title === "Catalog"? (
                          <div className='relative flex items-center gap-2 group'>
                                <p>{link.title}</p>
                                <IoIosArrowDropdownCircle/>

                                <div className='invisible absolute left-[50%] translate-x-[-50%] translate-y-[30%]
                                top-0 flex flex-col gap-3 rounded-md bg-richblack-5 p-4 text-richblack-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px]'>

                                <div className='absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                </div>

                                {
                                    subLinks.length ? (
                                            subLinks.map( (subLink, index) => (
                                                <Link to={`/catalog/${subLink.name.split(" ")
                                                  .join("-")
                                                  .toLowerCase()}`} key={index}
                                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">
                                                    <p>{subLink.name}</p>
                                                </Link>
                                            ) )
                                    ) : (<div></div>)
                                }

                                </div>
                          </div>
                        ):
                        (
                          <Link to={link?.path}>
                            <p className={`${ matchRoute(link?.path) ? " text-[#58d65a] underline decoration-[#58d65a] decoration-2 underline-offset-8" :
                             "text-richblack-25"} hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 transition-all ease-in`}>
                              {link.title}
                            </p>
                          </Link>
                        )
                      }
                    </li>
                  ))
                }
              </ul>
            </nav>

            {/* Login/SignUp/Dashboard */}
            <div className='hidden lg:flex gap-x-4 items-center'>
              {
                user && user?.accountType !== "Instructor" && (
                  <Link to="/dashboard/cart" className='relative'>
                    <AiOutlineShoppingCart color='white' size={24} />
                    {
                      totalItems > 0 && (
                        <span className=' absolute -top-4 right-0 animate-pulse text-white'>
                          {totalItems}
                        </span>
                      )
                    }
                  </Link>
                )
              }
              {
                token === null && (
                  <Link to="/login">
                    <button className=' px-[12px] rounded-full py-[6px] text-[#ffffff] border-[1px] border-[#ffffff]
                      hover:bg-[#ffffff] hover:text-black transition-all ease-in'>
                        Log in
                    </button>
                  </Link>
                )
              }
              {
                token === null && (
                  <Link to="/signup">
                      <button  className=' hidden lg:block px-[12px] rounded-full py-[6px] text-[#ffffff] border-[1px] border-[#ffffff]
                      hover:bg-[#ffffff] hover:text-black transition-all ease-in '>
                          Sign Up
                      </button>
                  </Link>
                )
              }
              {
                    token !== null && <ProfileDropDown />
              }
            </div>

            <button onClick={()=> {
              setNavbarActive((prev) => !prev)
            }} className='block lg:hidden'>
              {
                navbarActive? (<RxCross1 className=' text-white text-4xl'/>):
                (<CgMenuRight className=' text-white text-4xl'/>)
              }
            </button>
        </div>
      </div>

      <div className={`absolute fade-in h-[100%] w-full py-4 -bottom-14  z-50 block lg:hidden
      ${navbarActive?  "bg-black bg-opacity-40 backdrop-blur-md": ""}`}>
        {
          navbarActive?
          (
            <div>
              <nav>
                <ul className='w-full h-full flex flex-col gap-20 bg justify-center items-center  text-richblack-25'>
                  {
                    NavbarLinks.map((link,index)=>(
                      <li key={index}>
                        {
                          link.title === "Catalog"? (
                            <div className='relative text-4xl flex items-center gap-2 group'>
                                  <p>{link.title}</p>
                                  <IoIosArrowDropdownCircle/>

                                  <div className='invisible absolute left-[50%] translate-x-[-50%] translate-y-[30%]
                                  top-0 flex flex-col gap-3 rounded-md bg-richblack-5 p-4 text-richblack-900
                                  opacity-0 transition-all duration-200 group-hover:visible
                                  group-hover:opacity-100 lg:w-[300px]'>

                                  <div className='absolute left-[50%] top-0
                                  translate-x-[80%]
                                  translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                  </div>

                                  {
                                      subLinks.length ? (
                                              subLinks.map( (subLink, index) => (
                                                  <Link to={`/catalog/${subLink.name.split(" ")
                                                    .join("-")
                                                    .toLowerCase()}`} key={index}
                                                    className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50">
                                                      <p>{subLink.name}</p>
                                                  </Link>
                                              ) )
                                      ) : (<div></div>)
                                  }

                                  </div>
                            </div>
                          ):
                          (
                            <Link to={link?.path}>
                              <p className={`${ matchRoute(link?.path) ? " text-[#58d65a]  underline decoration-[#58d65a] decoration-2 underline-offset-8" :
                              "text-richblack-25"} text-4xl hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-8 transition-all ease-in`}>
                                {link.title}
                              </p>
                            </Link>
                          )
                        }
                      </li>
                    ))
                  }
                </ul>

                {/* Login/SignUp/Dashboard */}
              <div className=' mt-14 flex flex-col gap-y-14 items-center'>
                {
                  user && user?.accountType !== "Instructor" && (
                    <Link to="/dashboard/cart" className='relative px-6 py-3 text-4xl'>
                      <AiOutlineShoppingCart color='white' />
                      {
                        totalItems > 0 && (
                          <span className=' absolute -top-4 right-0 animate-pulse text-white'>
                            {totalItems}
                          </span>
                        )
                      }
                    </Link>
                  )
                }
                {
                  token === null && (
                    <Link to="/login">
                      <button className=' rounded-full px-6 py-3 text-4xl text-[#ffffff] border-[1px] border-[#ffffff]
                        hover:bg-[#ffffff] hover:text-black transition-all ease-in'>
                          Log in
                      </button>
                    </Link>
                  )
                }
                {
                  token === null && (
                    <Link to="/signup">
                        <button  className='rounded-full px-6 py-3 text-4xl text-[#ffffff] border-[1px] border-[#ffffff]
                        hover:bg-[#ffffff] hover:text-black transition-all ease-in '>
                            Sign Up
                        </button>
                    </Link>
                  )
                }
                {
                      token !== null && <ProfileDropDown />
                }
              </div>
              </nav>
            </div>
          ):
          (<></>)
        }
      </div>
    </>
  )
}

export default NavBar