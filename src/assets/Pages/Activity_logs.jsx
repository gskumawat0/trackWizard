import React from "react";
import { LuDownload } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { PiLessThanThin } from "react-icons/pi";
import { PiGreaterThan } from "react-icons/pi";
import { MdOutlineAccessTime } from "react-icons/md";
import { CgPlayPauseO } from "react-icons/cg";
import { IoPlayCircle } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";

const Activity_logs = () => {
  return (
    <div>
      <div className="p-10 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl ">Activity Logs</h1>
          <p>View and manage your activity tracking history.</p>
        </div>
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-5">
          <button className="border-1 cursor-pointer  p-3 rounded-2xl flex gap-1">
            {" "}
            + Generate Today's Logs
          </button>
          <button className="border-1 cursor-pointer  p-3 rounded-2xl flex gap-1">
            <MdOutlineDateRange className="mt-1" />
            Generate Custom Date
          </button>
          <button className="bg-black cursor-pointer text-white p-3 rounded-2xl flex gap-1">
            <LuDownload className="mt-1" /> Export Logs
          </button>
        </div>
      </div>

      <div className="p-5 ms-8 me-8 border-[0.5px] rounded-[8px]">
        <div className="flex text-2xl">
          <CiFilter className="mt-1" /> Filters
        </div>
        <div className="p-4 flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-8">
          <div>
            <h2 className="font-bold">Search Activies</h2>
            <input
              type="text"
              placeholder="Search by activity name ... "
              className="p-1 border-1 rounded-[5px] w-full pe-23 mt-3 "
            />
          </div>
          <div>
            <h2 className="font-bold">Status Filter</h2>
            <select
              id="city"
              name="city"
              className="p-2 border-1 w-full rounded-[5px] pe-42 mt-3 "
            >
              <option value="delhi">All Status</option>
              <option value="mumbai">Pending</option>
              <option value="bengaluru">Complete</option>
              <option value="chennai">In Progress</option>
              <option value="kolkata">On Hold</option>
            </select>
          </div>
          <div>
            <button className="p-2 cursor-pointer  border-1 w-full rounded-[5px] pe-15 mt-9 ">
              Clear Filter
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 m-7 border-[0.5px] rounded-[8px] ">
        <h2 className="p-4 font-bold text-3xl">Activity Board</h2>
        <div className="flex gap-5">
          <div className="flex gap-1.5">
            <div className="mt-1.5 bg-red-700 rounded-4xl w-3 h-3"></div>Expired
          </div>
          <div className="flex gap-1.5">
            <div className="mt-1.5 bg-red-700 rounded-4xl w-3 h-3"></div>
            <p className="flex gap-1.5">
              expires in <PiLessThanThin className="mt-1.5" /> 1.5 days
            </p>
          </div>
          <div className="flex gap-1.5">
            <div className="mt-1.5 bg-yellow-500 rounded-4xl w-3 h-3"></div>
            <p className="flex gap-1.5">
              expires in <PiLessThanThin className="mt-1.5" /> 3 days
            </p>
          </div>
          <div className="flex gap-1.5">
            <div className="mt-1.5 bg-gray-200 rounded-4xl w-3 h-3"></div>
            <p className="flex gap-1.5">
              expires in <PiGreaterThan className="mt-1.5" /> 3 days
            </p>
          </div>
        </div>
        <div className="mt-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   gap-4">
          <div className=" h-48  rounded-2xl p-5 ">
            <p className="flex gap-2 font-bold">
              <MdOutlineAccessTime className="text-amber-500 h-6 text-3xl" />{" "}
              Pending 0
            </p>
            <p className="text-center mt-8">no pending task</p>
          </div>
          <div className="bg-gray-300 h-48  rounded-2xl p-5 ">
            <p className="flex gap-2 font-bold">
              <CgPlayPauseO className="text-amber-500 h-6 text-3xl" /> On Hold 0
            </p>
            <p className="text-center mt-8">no pending task</p>
          </div>
          <div className="bg-amber-100 h-48  rounded-2xl p-5 ">
            <p className="flex gap-2 font-bold">
              <IoPlayCircle className="text-amber-500 h-6 text-3xl" /> On
              Progress 0
            </p>
            <p className="text-center mt-8">no pending task</p>
          </div>
          <div className="bg-blue-100 h-48  rounded-2xl p-5 ">
            <p className="flex gap-2 font-bold">
              <AiFillCheckCircle className="text-amber-500 h-6 text-3xl" />{" "}
              Complete 0
            </p>
            <p className="text-center mt-8">no pending task</p>
          </div>
        </div>

        <div className="m-5   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
          <div className="border-[1px] rounded-2xl p-8 ">
            <p className="flex justify-between">
              Today's Completed Sessions{" "}
              <FaCalendarAlt className="mt-4 ms-8 text-3xl" />
            </p>
            <p className="font-bold text-2xl">0</p>
          </div>
          <div className="border-[1px] rounded-2xl p-8  ">
            <p className="flex justify-between">
              Today's Total Hours{" "}
              <MdOutlineAccessTime className="mt-4 ms-8 text-3xl" />
            </p>
            <p className="font-bold text-2xl">0m</p>
          </div>
          <div className="border-[1px] rounded-2xl p-8  ">
            <p className="flex justify-between">
              Active Sessions{" "}
              <div className="w-4 h-4 rounded-4xl mt-4 ms-8 bg-amber-300"></div>{" "}
            </p>
            <p className="font-bold text-2xl mt-5">0</p>
          </div>
          <div className="border-[1px] rounded-2xl p-8  ">
            <p className="flex justify-between">
              Expired Items{" "}
              <div className="w-4 h-4 rounded-4xl mt-4 ms-8 bg-red-500"></div>
            </p>
            <p className="font-bold text-2xl text-red">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activity_logs;
