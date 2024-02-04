import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Common/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import Footer from "./components/Common/Footer";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from "./components/core/Dashboard/Settings/Settings";
import AddCourse from "./components/core/Dashboard/AddCourse/AddCourse";
import { getUserDetails } from "./services/operations/profileAPI";
import { useDispatch, useSelector } from "react-redux";
import {ACCOUNT_TYPE} from "./utils/constants";
import { useEffect } from "react";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse/EditCourse";
import Catalog from "./pages/Catalog";
import EnrolledCourses from "./components/core/Dashboard/EnrollerdCourses";
import Cart from "./components/core/Dashboard/Cart/Cart";
import CourseDetails from "./pages/CourseDetails";
// import PaymentModal from "./components/Common/PaymentModal";
import ViewCourse from "./pages/ViewCourse";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Instructor from "./components/core/Dashboard/Instructor";



function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="w-screen min-h-screen bg-[#0F0F0F] flex flex-col font-inter">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about"element={<About/>}/>
        <Route path="contact"element={<Contact/>}/>
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />

        {/* Open Route - for Only Non Logged in User */}
        <Route 
          path="/signup" 
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }/>
        <Route 
          path="/login" 
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }/>
        <Route 
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }/>
        <Route 
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }/>
        <Route 
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }/>
        
        {/* <Route 
          path="Payment"
          element={<PaymentModal/>}/> */}

        
        {/* Private Route - for Only Logged in User */}

        <Route 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }>

          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />

          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
        </Route>

        
         {/* For the watching course lectures */}
         <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
