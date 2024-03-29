import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { sidebarLinks } from '../../../data/dashboard-links';
import SidebarLink from './SidebarLink';

import { logout } from '../../../services/operations/authAPI';
import ConfirmationModal from '../../Common/ConfirmationModal';

import {VscSignOut} from 'react-icons/vsc';


const Sidebar = () => {
    const {user, loading: profileLoading} = useSelector((state)=> state.profile);
    const { loading: authLoading } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // to keep track of confirmation modal
    const [confirmationModal, setConfirmationModal] = useState(null);


    if (profileLoading || authLoading) {
        return (
          <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-richblack-700 bg-richblack-800">
            <div className='loader'>Load&nbsp;ng</div>
          </div>
        )
    }

  return (
    <div>
        <div className="flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col justify-between border-r-[1px] 
        border-r-richblack-700 bg-[#8685EF] py-10">
            <div className="flex flex-col">
              {sidebarLinks.map((link) => {
                if (link.type && user?.accountType !== link.type) return null
                return (
                  <SidebarLink key={link.id} link={link} iconName={link.icon} />
                )
              })}
            <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-[#FAF8FF]" />
            </div>
            <div className="flex flex-col">
            <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-[#FAF8FF]" />
              <SidebarLink
                link={{ name: "Settings", path: "/dashboard/settings" }}
                iconName="VscSettingsGear"
              />
            <button
              onClick={() =>
                setConfirmationModal({
                  text1: "Are you sure?",
                  text2: "You will be logged out of your account.",
                  btn1Text: "Logout",
                  btn2Text: "Cancel",
                  btn1Handler: () => dispatch(logout(navigate)),
                  btn2Handler: () => setConfirmationModal(null),
                })
              }
              className="px-8 py-2 text-sm font-medium text-[#FAF8FF] hover:bg-[#7c7af5] focus:bg-[#716ff5]
              transition-all duration-200">
              <div className="flex items-center gap-x-2">
                <VscSignOut className="text-xl" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  )
}

export default Sidebar