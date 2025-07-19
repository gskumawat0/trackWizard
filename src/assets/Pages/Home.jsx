import React from 'react';
import { SlEnergy } from 'react-icons/sl';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from 'react-icons/ai';
import { IoMdTime } from 'react-icons/io';
import { IoAnalyticsOutline } from 'react-icons/io5';
import { GoGoal } from 'react-icons/go';
import { FaCalendarAlt } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

const Home = () => {
  return (
    <div className="bg-black w-full">
      <div className="">hgfdtghfyvujewrdw</div>
      <div className="flex mt-10 justify-center items-center m-auto   rounded-2xl w-xs h-9 bg-gray-100">
        <SlEnergy />
        <p className="text-gray-600 ">Track your activities with precision</p>
      </div>
      <h1 className="text-gray-200 text-5xl mt-14 font-bold text-center ">
        Master Your Time with Smart <br /> Tracking
      </h1>
      <p className="text-gray-400 text-center mt-9">
        TrackMe helps you monitor activities, analyze productivity patterns, and{' '}
        <br /> optimize your time with intelligent scheduling and detailed
        insights.
      </p>
      <Link to={'/'}>
        <button className="bg-white text-black cursor-pointer flex justify-between items-center gap-4 p-4 ps-3.5 rounded-[8px] text-center m-auto mt-9">
          Go to Dashboard <FaArrowRight />
        </button>
      </Link>
      <h1 className="text-gray-200 text-center text-4xl font-bold mt-40 ">
        Everything you need to track your productivity
      </h1>
      <p className="text-center text-gray-300 text-2xl mt-3">
        Powerful features designed to help you understand and improve <br />{' '}
        your time management
      </p>

      <div className="mt-32 px-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-[0.5px] text-white p-6 rounded-lg shadow-md">
            <SlEnergy className="text-5xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">Activity Tracking</h1>
            <p className="mb-4">
              Monitor your daily activities with detailed logging and
              categorization.
            </p>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Real-time activity monitoring</p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Custom activity categories</p>
            </div>
            <div className="flex items-start gap-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Detailed activity logs</p>
            </div>
          </div>

          <div className="border-[0.5px] text-white p-6 rounded-lg shadow-md">
            <IoMdTime className="text-5xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">Smart Scheduling</h1>
            <p className="mb-4">
              Intelligent scheduling with excluded intervals and time
              optimization
            </p>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Automated scheduling</p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Excluded time intervals</p>
            </div>
            <div className="flex items-start gap-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Priority-based planning</p>
            </div>
          </div>

          <div className="border-[0.5px] text-white p-6 rounded-lg shadow-md">
            <IoAnalyticsOutline className="text-5xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">Analytics & Insights</h1>
            <p className="mb-4">
              Comprehensive analytics to understand your productivity patterns
            </p>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Time distribution analysis</p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Productivity trends</p>
            </div>
            <div className="flex items-start gap-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Performance metrics</p>
            </div>
          </div>
          <div className="border-[0.5px] text-white p-6 rounded-lg shadow-md">
            <GoGoal className="text-5xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">Goal Setting</h1>
            <p className="mb-4">
              Set and track progress towards your productivity goals
            </p>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>SMART goal framework</p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Progress tracking</p>
            </div>
            <div className="flex items-start gap-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Achievement milestones</p>
            </div>
          </div>
          <div className="border-[0.5px] text-white p-6 rounded-lg shadow-md">
            <FaCalendarAlt className="text-5xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">Activity Logs</h1>
            <p className="mb-4">
              Comprehensive logging system for detailed activity history{' '}
            </p>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Detailed activity records</p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Search and filter capabilities</p>
            </div>
            <div className="flex items-start gap-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Export functionality</p>
            </div>
          </div>
          <div className="border-[0.5px] text-white p-6 rounded-lg shadow-md">
            <MdSecurity className="text-5xl mb-4" />
            <h1 className="text-2xl font-bold mb-2">Secure & Private</h1>
            <p className="mb-4">
              Your data is protected with enterprise-grade security
            </p>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>End-to-end encryption</p>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <AiFillCheckCircle className="mt-1" />
              <p>Privacy-first design</p>
            </div>
            <div className="flex items-start gap-2">
              <AiFillCheckCircle className="mt-1" />
              <p>GDPR compliant</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-200 text-center text-4xl font-bold mt-40 ">
          Trusted by productivity enthusiasts
        </h1>
        <p className="text-center text-gray-300 text-2xl mt-3">
          Join thousands of users who have transformed their time management
        </p>
      </div>
      <div className="text-white gap-8 text-center  mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-4">
        <div>
          <p className="text-5xl">10K+</p>
          <p className="mt-4 text-gray-300">Active user</p>
        </div>
        <div>
          <p className="text-5xl">1M+</p>
          <p className="mt-4  text-gray-300">Activities Tracked</p>
        </div>
        <div>
          <p className="text-5xl">95%</p>
          <p className="mt-4 text-gray-300">User Satisfaction</p>
        </div>
        <div>
          <p className="text-5xl">24/7</p>
          <p className="mt-4 text-gray-300">Support Available</p>
        </div>
      </div>
      <div className="mt-36">
        <h1 className="text-gray-200 text-5xl mt-5 font-bold text-center ">
          Ready to transform your productivity?
        </h1>
        <p className="text-gray-400 text-center mt-6">
          Start tracking your activities today and discover insights that will
          help you achieve more.
        </p>
        <Link to={'/'}>
          <button className="bg-white text-black cursor-pointer flex justify-between items-center gap-4 p-4 ps-3.5 rounded-[8px] text-center m-auto mt-8">
            Go to Dashboard <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="pt-15"></div>
    </div>
  );
};
export default Home;
