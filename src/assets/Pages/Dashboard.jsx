import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { PiPlayCircleLight } from 'react-icons/pi';
import { CiCircleChevRight } from 'react-icons/ci';
import { MdOutlineDangerous } from 'react-icons/md';
import { FaRegPlayCircle } from 'react-icons/fa';
import { CgPlayPauseO } from 'react-icons/cg';
const Dashboard = () => {
  return (
    <div className=" ps-3.5">
      <div className="">
        <h1 className="pt-9 font-bold text-3xl ">Dashboard</h1>
        <p className="text-gray-500 mt-2.5">
          Welcome back! Here's an overview of your activity tracking for today.
        </p>
      </div>
      <div className="mt-9 me-2.5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-[9px]  border-[1px]">
          <p className="flex justify-between p-6">
            Total Activities <FaStrava className="font-bold text-indigo-300" />
          </p>
          <h1 className="font-bold text-4xl text-blue-600 ps-5.5">0</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">Activities for today</p>
        </div>
        <div className="rounded-[9px]   border-[1px]">
          <p className="flex justify-between p-6">
            Complete <AiFillCheckCircle className="font-bold  " />
          </p>
          <h1 className="font-bold text-4xl text-green-600 ps-5.5">0</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">
            Activities done today
          </p>
        </div>
        <div className="rounded-[9px]   border-[1px]">
          <p className="flex justify-between p-6">
            in Progress{' '}
            <PiPlayCircleLight className="font-bold text-blue-600" />
          </p>
          <h1 className="font-bold text-4xl text-blue-600 ps-5.5">0</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">Currently active</p>
        </div>
        <div className="rounded-[9px]   border-[1px]">
          <p className="flex justify-between p-6">
            pending <CiCircleChevRight className="font-bold text-amber-300" />
          </p>
          <h1 className="font-bold text-4xl text-amber-300 ps-5.5">0</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">Awaiting start</p>
        </div>
      </div>
      <div className="mt-9 me-5  grid grid-cols-1 sm:grid-cols-1  md:grid-cols-4 gap-3">
        <div className="rounded-[9px]   border-[1px]">
          <p className="flex justify-between p-6">
            completed hours{' '}
            <CiCircleChevRight className="font-bold text-green-300" />
          </p>
          <h1 className="font-bold text-4xl text-green-500 ps-5.5">0h</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">
            Hours completed today
          </p>
        </div>
        <div className="rounded-[9px]   border-[1px]">
          <p className="flex justify-between p-6">
            Progress <FaStrava className="font-bold text-indigo-300" />
          </p>
          <h1 className="font-bold text-4xl text-blue-600 ps-5.5">0%</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">Goal completion</p>
        </div>
        <div className="rounded-[9px]   border-[1px]">
          <p className="flex justify-between p-6">
            Expired Items
            <MdOutlineDangerous className="font-bold text-red-500" />
          </p>
          <h1 className="font-bold text-4xl text-red-500 ps-5.5">0</h1>
          <p className="text-gray-400 ps-5 mt-1.5 pb-8">Overdue tasks</p>
        </div>
      </div>
      <div className="border-[1px] rounded-2xl  mt-20 me-3 w-full">
        <h1 className="p-3 text-3xl font-bold">Today's Status Breakdown</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="  bg-green-200 ms-4 mb-5">
            <AiFillCheckCircle className="font-bold mt-3 me-3   text-5xl text-green-500  " />
            <p className="text-4xl text-green-500 font-bold text-center">0</p>
            <p className="text-green-500 text-center mb-4">complete</p>
          </div>
          <div className=" bg-gray-400 mb-5 ms-3 ">
            <FaRegPlayCircle className="font-bold   text-5xl text-blue-500 text-center" />
            <p className="text-4xl text-blue-500 font-bold text-center">0</p>
            <p className="text-blue-500 text-center mb-4">in progress</p>
          </div>
          <div className=" bg-gray-600  ms-4 mb-5">
            <AiFillCheckCircle className="font-bold text-amber-500   text-5xl  text-center" />
            <p className="text-4xl text-amber-500green-500 font-bold text-amber-500 text-center">
              0
            </p>
            <p className="text-amber-500 text-center mb-5">pending</p>
          </div>
          <div className=" bg-amber-950  ms-4 mb-5 me-5">
            <CgPlayPauseO className="font-bold   text-5xl text-gray-500 text-center" />
            <p className="text-4xl text-gray-500 font-bold text-center">0</p>
            <p className="text-gray-500 text-center mb-5">on hold</p>
          </div>
        </div>
      </div>
      <div className="border-[1px] rounded-2xl mt-8 me-3 mb-3">
        <h1 className="font-bold text-3xl p-4">Today's Activities</h1>
        <p className="text-center mb-11">Today No Activity</p>
      </div>
    </div>
  );
};

export default Dashboard;
