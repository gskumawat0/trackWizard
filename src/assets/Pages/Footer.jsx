import React from "react";
import { FaStrava } from "react-icons/fa";

const Footer = () => {
    const newyear = new Date().getFullYear()
    return(
        <footer class="bg-gray-800 text-white py-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* <!-- Section 1: About Us --> */}
    <div>
      <h4 class="text-lg font-semibold mb-4 flex gap-2"><FaStrava className="font-bold"/>
  TrackMe</h4>
      <p class="text-sm text-gray-400">
       Empowering individuals to master their time and achieve their goals through intelligent activity tracking.


      </p>
    </div>

    {/* <!-- Section 2: Quick Links --> */}
    <div>
      <h4 class="text-lg font-semibold mb-4">Product</h4>
      <ul class="space-y-2 text-sm text-gray-400">
        <li><a href="#" class="hover:text-white transition">Activities</a></li>
        <li><a href="#" class="hover:text-white transition">Activity Logs</a></li>
        <li><a href="#" class="hover:text-white transition">Scheduling</a></li>
        <li><a href="#" class="hover:text-white transition">Analytics</a></li>
      </ul>
    </div>

    {/* <!-- Section 3: Contact --> */}
    <div className="space-y-2">
      <h4 class="text-lg font-semibold mb-4">Company</h4>
      <p class="text-sm text-gray-400 cursor-pointer hover:text-white transition">About</p>
      <p class="text-sm text-gray-400 cursor-pointer hover:text-white transition">Blog</p>
       <p class="text-sm text-gray-400 cursor-pointer hover:text-white transition">Careers</p>
      <p class="text-sm text-gray-400 cursor-pointer hover:text-white transition">Contact</p>
    </div>

    {/* <!-- Section 4: Follow Us --> */}
    <div>
      <h4 class="text-lg font-semibold mb-4">Support</h4>
      <div class=" text-gray-400 text-sm space-y-2">
       <ul><a href="#" class="hover:text-white transition">Help Center</a></ul> 
       <ul><a href="#" class="hover:text-white transition">Documentation</a></ul> 
      <ul> <a href="#" class="hover:text-white transition">Privacy Policy</a></ul> 
      <ul> <a href="#" class="hover:text-white transition">Terms of Service</a></ul> 
      </div>
    </div>

  </div>
  <p className="mt-14 text-center">© {newyear}  TrackMe. All rights reserved.</p>
</footer>

    )
}
export default Footer