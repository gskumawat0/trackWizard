import React from "react";
import { CiFilter } from "react-icons/ci";
import { MdError } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
const Interval = () => {
  return (
    <div>
      <div className="ms-10">
        <h1 className="pt-9 font-bold text-3xl ">Excluded Intervals</h1>
        <p className="text-gray-500 mt-2.5">
          Manage when activity logs should not be generated.
        </p>
      </div>
      <div className="m-6 border-[1px] rounded-2xl">
        <p className="font-bold text-3xl p-2">+  Add Excluded Interval</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-2">
          <div>
            <h2>Frequency</h2>
            <select name="Select" id="" className="border-[1px] p-2 rounded-[8px] w-full">
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
            </select>
        </div>
         <div>
            <h2>Type</h2>
            <select name="Select" id="" className="border-[1px] p-2 rounded-[8px] w-full">
                <option value="Day Of Week">Day Of Week</option>
              
            </select>
        </div>  
          <div>
            <h2>Value</h2>
            <select name="Select" id="" className="border-[1px] p-2 rounded-[8px] w-full ">
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                <option value="Thrusday">Thrusday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
        </div> 
        <div>
  <button className="w-full p-2.5 mt-6 cursor-pointer bg-black text-white rounded-2xl">+  Add Interval</button>
        </div>
      
        </div>
       
      </div>
      <div className="ms-6 border-[1px] rounded-[8px] me-6 p-4">
        <div className="flex gap-2 text-2xl font-bold"><CiFilter className="mt-1.5"/>
  Current Excluded Intervals</div>
  <div className=" mt-10">
    <MdError className="text-4xl ms-[48%]"/>
   <p className="text-center "> 
No excluded intervals configured.  <br />

Add intervals above to skip activity log generation on specific days or months.</p>  
  </div>
 
      </div>
       <div className="m-5   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-4">
                <div className="border-[1px] rounded-2xl p-8 ">
                  <p className="flex justify-between">
                   Daily Exclusions{" "}
                    <FaCalendarAlt className="mt-4 ms-8 text-3xl" />
                  </p>
                  <p className="font-bold text-2xl">0</p>
                </div>
                <div className="border-[1px] rounded-2xl p-8  ">
                  <p className="flex justify-between">
                   Total Excluded Intervals{" "}
                    <CiFilter className="mt-4 ms-8 text-3xl" />
                 
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
              <div className="m-6 p-4 border-[1px] rounded-[8px]">
<h2 className="font-bold text-3xl p-3">How Excluded Intervals Work</h2>
<p className="ps-3">Excluded intervals allow you to specify when activity logs should not be generated automatically.</p>
<div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
  <div className=" mt-3 ps-3">
    <h3 className="font-bold">Daily Exclusions</h3>
    <p>Skip activity log generation on specific days of the week (e.g., weekends).</p>
  </div>
  <div className=" mt-3 ps-3">
    <h3 className="font-bold">Weekly Exclusions</h3>
    <p>Skip activity log generation during specific weeks of the year (1-52).</p>
  </div>
  <div className=" mt-3 ps-3">
    <h3 className="font-bold">Monthly Exclusions
</h3>
    <p>Skip activity log generation during specific months of the year.</p>
  </div>
</div>  <p className="mt-5"> <span className="font-bold">Note:</span>  These settings only affect automatic generation. You can still manually create activity logs on excluded days.</p>

              </div>
    </div>
  );
};
export default Interval;
