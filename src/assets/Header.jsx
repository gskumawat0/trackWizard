import React, { useContext, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { Maincontext } from "./Pages/Context";
import { SlGraph } from "react-icons/sl";
import { VscGraph } from "react-icons/vsc";
import { FaBars } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { PiPaintBrushBroadThin } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
const Header = () => {
  const [toggle, Settoggle] = useState(false);
  const { user, logout } = useContext(Maincontext);

  return (
    <header className=" shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex  font-bold text-3xl">
            <SlGraph className="me-3 mt-1 text-black text-3xl" /> Track Me
          </div>
          {user ? (
            <>
              <div></div>

              <nav className="hidden md:flex space-x-6">
                <Link
                  to={"/"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <VscGraph className="mt-1.5" /> Dashboard
                </Link>
                <Link
                  to={"/activity"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <FaBars className="mt-1.5" /> Activies
                </Link>
                <Link
                  to={"/activity_logs"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <CiCalendarDate className="mt-1.5" />
                  Activity Logs
                </Link>
                <Link
                  to={"/interval"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <PiPaintBrushBroadThin className="mt-1.5" /> Excluded
                  Intervals
                </Link>
                <div
                  onClick={logout}
                  className="text-gray-700 hover:text-blue-600 mt-3"
                >
                  {" "}
                  <FiLogOut />
                </div>
              </nav>
            </>
          ) : (
            <>
              <nav className="hidden md:flex space-x-6">
                <Link
                  to={"/"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <VscGraph className="mt-1.5" /> Dashboard
                </Link>
                <Link
                  to={"/activity"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <FaBars className="mt-1.5" /> Activies
                </Link>
                <Link
                  to={"/activity_logs"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <CiCalendarDate className="mt-1.5" />
                  Activity Logs
                </Link>
                <Link
                  to={"/interval"}
                  className="text-gray-700 flex gap-2 cursor-pointer hover:bg-amber-100 p-2 rounded-xl hover:text-blue-600"
                >
                  <PiPaintBrushBroadThin className="mt-1.5" /> Excluded
                  Intervals
                </Link>
                <div className="flex gap-3.5 mt-2">
                  <Link
                    to={"/login"}
                    className="text-gray-700 hover:text-blue-600"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-gray-700 hover:text-blue-600"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </div>
              </nav>
            </>
          )}

          {toggle ? (
            <div
              onClick={() => Settoggle(!toggle)}
              className="me-4.5 md:hidden block"
            >
              <FiMoreVertical />
            </div>
          ) : (
            <div
              onClick={() => Settoggle(!toggle)}
              className="me-4.5 md:hidden block"
            >
              <IoMdClose />
            </div>
          )}
        </div>

        <div
          onClick={() => Settoggle(!toggle)}
          className={`z-1 md:hidden mt-2 space-y-1 absolute top-15 transition duration-800 bg-gray-300 h-screen w-full  ${
            toggle ? "left-0" : "left-[-100%]"
          }`}
        >
          <Link
            to={"/"}
            onClick={() => Settoggle(!toggle)}
            className="text-gray-700 flex gap-1 hover:text-blue-600   pt-5 ps-8"
          >
            <VscGraph className="mt-1.5" /> Dashboard
          </Link>
          <Link
            to={"/activity"}
            onClick={() => Settoggle(!toggle)}
            className="text-gray-700 hover:text-blue-600 flex gap-1 pt-5 ps-8"
          >
            <FaBars className="mt-1.5 " /> Activies
          </Link>
          <Link
            to={"/activity_logs"}
            onClick={() => Settoggle(!toggle)}
            className="text-gray-700 hover:text-blue-600   flex gap-1  pt-5 ps-8"
          >
            <CiCalendarDate className="mt-1.5" />
            Activity Logs
          </Link>
          <Link
            to={""}
            onClick={() => Settoggle(!toggle)}
            className="text-gray-700 hover:text-blue-600 flex gap-1  pt-5 ps-8"
          >
            <PiPaintBrushBroadThin className="mt-1.5" /> Excluded Intervals
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
