import React from "react";

const Activity = () => {
  return (
    <div>
      <div className="p-10 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl ">Activities</h1>
          <p>Manage your activities and track your progress.</p>
        </div>
        <button className="bg-black cursor-pointer text-white p-3 rounded-2xl">
          + Add Activity
        </button>
      </div>
      <div className="p-10 ms-8 me-8 mb-4 border-1 rounded-2xl">
        <p className="text-center text-gray-400">
          No activities found. Create your first activity to get started!
        </p>
      </div>
    </div>
  );
};

export default Activity;
