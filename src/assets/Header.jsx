import React, { useContext, useState } from 'react';
import { FiMoreVertical, FiLogOut } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Maincontext } from './Pages/Context';
import { SlGraph } from 'react-icons/sl';
import { VscGraph } from 'react-icons/vsc';
import { FaBars } from 'react-icons/fa6';
import { CiCalendarDate } from 'react-icons/ci';
import { PiPaintBrushBroadThin } from 'react-icons/pi';

const Header = () => {
  const [toggle, Settoggle] = useState(false);
  const { user, logout } = useContext(Maincontext);

 

  return (
    <header className="shadow-md ">
      <div className="">
        <div className="flex justify-between items-center ms-20 me-20 h-16">
          <div className="flex-shrink-0 flex font-bold text-3xl">
            <SlGraph className="me-3 mt-1 text-black text-3xl" /> Track Me
          </div>
          <div>
            {user ? (
              <>
                {/* Desktop Navigation */}
                <nav className="hidden  md:flex space-x-6">
                  <Link
                    to={'/dashboard'}
                    className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                  >
                    <VscGraph className="mt-1.5" /> Dashboard
                  </Link>
                  <Link
                    to={'/activity'}
                    className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                  >
                    <FaBars className="mt-1.5" /> Activies
                  </Link>

                  <Link
                    to={'/activity_logs'}
                    className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                  >
                    <CiCalendarDate className="mt-1.5" />
                    Activity Logs
                  </Link>
                  <Link
                    to={'/interval'}
                    className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                  >
                    <PiPaintBrushBroadThin className="mt-1.5" /> Excluded
                    Intervals
                  </Link>

                  <div className="mt-2 font-bold">
                    {' '}
                   
                    <h1>Welcome , {user.name}</h1>
                  </div>
                  <div
                    onClick={() => {
                      logout();
                    }}
                    className="text-gray-700 hover:text-blue-600 mt-3 cursor-pointer"
                  >
                    <FiLogOut />
                  </div>
                </nav>
              </>
            ) : (
              <>
                {/* Desktop Login/Register */}
                <nav className="hidden md:flex space-x-6">
                  <div className="flex gap-3.5 mt-2">
                    <Link
                      to={'/login'}
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Login
                    </Link>

                    <Link
                      className="text-gray-700 hover:text-blue-600"
                      to={'/register'}
                    >
                      Register
                    </Link>
                  </div>
                </nav>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          {!toggle ? (
            <div
              onClick={() => Settoggle(true)}
              className="me-4.5 md:hidden block cursor-pointer"
            >
              <FiMoreVertical />
            </div>
          ) : (
            <div
              onClick={() => Settoggle(false)}
              className="me-4.5 md:hidden block cursor-pointer"
            >
              <IoMdClose />
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div
          onClick={() => Settoggle(false)}
          className={`z-1 md:hidden mt-2 space-y-1 absolute top-15 transition duration-800 bg-gray-300 h-screen w-full ${
            toggle ? 'left-0' : 'left-[-100%]'
          }`}
        >
          {user ? (
            <div className="flex flex-col pt-5 ps-8 gap-4">
              <Link
                to={'/dashboard'}
                onClick={() => Settoggle(false)}
                className="text-gray-700 flex gap-1 hover:text-blue-600 pt-5 ps-8"
              >
                <VscGraph className="mt-1.5" /> Dashboard
              </Link>
              <Link
                to={'/activity'}
                onClick={() => Settoggle(false)}
                className="text-gray-700 hover:text-blue-600 flex gap-1 pt-5 ps-8"
              >
                <FaBars className="mt-1.5" /> Activities
              </Link>
              <Link
                to={'/activity_logs'}
                onClick={() => Settoggle(false)}
                className="text-gray-700 hover:text-blue-600 flex gap-1 pt-5 ps-8"
              >
                <CiCalendarDate className="mt-1.5" /> Activity Logs
              </Link>
              <Link
                to={'/interval'}
                onClick={() => Settoggle(false)}
                className="text-gray-700 hover:text-blue-600 flex gap-1 pt-5 ps-8"
              >
                <PiPaintBrushBroadThin className="mt-1.5" /> Excluded Intervals
              </Link>
              <div
                onClick={() => {
                  logout();
                  Settoggle(false);
                }}
                className="text-gray-700 hover:text-blue-600 flex gap-1 pt-5 ps-8 cursor-pointer"
              >
                <FiLogOut className="mt-1.5" /> Logout
              </div>
            </div>
          ) : (
            <div className="flex flex-col pt-5 ps-8 gap-4">
              <Link
                to={'/login'}
                onClick={() => Settoggle(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                to={'/register'}
                onClick={() => Settoggle(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
