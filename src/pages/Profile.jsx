import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) return <div>Please log in.</div>;

  return (
    <div className="min-h-screen relative flex flex-col w-full">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/profile_bg.jpg')] bg-cover bg-center opacity-80"></div>

      <div className="relative z-10 flex flex-col">
        <div className="w-full max-w-3xl mx-auto mt-6 bg-white shadow-md rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-6">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              {/* Profile Image */}
              <img
                className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
                src="user.png" 
                alt="user"
              />

              {/* Name + Subtitle */}
              <div>
                <h4 className="font-semibold text-xl">
                  {user.firstName} {user.lastName}
                </h4>
                <p className="text-gray-500 text-sm">Welcome back 👋</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="font-medium">2026</p>
            </div>
          </div>

          {/* Bottom subtle divider */}
          <div className="h-px bg-gray-200 mx-6"></div>
        </div>
        <div className="w-full max-w-2xl mx-auto mt-6 bg-white shadow-md rounded-2xl overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {/* Crypto Balance */}
            <li className="px-6 py-4 flex items-center justify-between">
              <span className="text-gray-500 text-sm">Crypto Balance</span>
              <span className="font-semibold text-lg">
                {user.cryptoBalance || "$ 0.00"}
              </span>
            </li>

            {/* Name Row */}
            <li className="px-6 py-4 flex justify-between">
              <div>
                <p className="text-gray-500 text-sm">First Name</p>
                <p className="font-medium">{user.firstName}</p>
              </div>

              <div className="text-right">
                <p className="text-gray-500 text-sm">Last Name</p>
                <p className="font-medium">{user.lastName}</p>
              </div>
            </li>

             <li className="px-6 py-4">
              <p className="text-gray-500 text-sm">Username</p>
              <p className="font-medium">{user.username}</p>
            </li>

            {/* Email */}
            <li className="px-6 py-4">
              <p className="text-gray-500 text-sm">Email</p>
              <p className="font-medium">{user.email}</p>
            </li>

            {/* Number */}
            <li className="px-6 py-4">
              <p className="text-gray-500 text-sm">Phone</p>
              <p className="font-medium">+91 {user.number}</p>
            </li>

             <li className="px-6 py-4">
              <p className="text-gray-500 text-sm">Country</p>
              <p className="font-medium">
                <img src="INDIAflag.png" alt="India" className="h-6 w-6 inline-block" />
                {""}
                India
              </p>
            </li>
          </ul>

          {/* Logout Button */}
          <div className="p-4 flex justify-center">
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
