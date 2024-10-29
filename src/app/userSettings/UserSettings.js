"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const UserSettings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    description: ''
  });
  const [profilePic, setProfilePic] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-teal-950 min-h-screen text-white py-12 flex items-center justify-center relative">
      {/* Home Button with Link */}
      <Link href="/" className="absolute top-4 left-4 p-2 rounded-full bg-teal-800 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-white"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Link>

      <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-md overflow-hidden flex">
        <div className="p-8 w-1/3 flex flex-col items-center bg-teal-800">
          <img
            src={profilePic || "https://img.icons8.com/ios-glyphs/90/ffffff/user--v1.png"} // Placeholder icon
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover mb-4"
          />
          <label className="relative cursor-pointer text-gray-300">
            <span>Select a picture</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700 w-full h-32"
            placeholder="Tell us about yourself (e.g., I like playing games)"
          />
        </div>

        <div className="p-8 w-2/3">
          <h2 className="text-3xl font-extrabold text-gray-700 mb-8 text-center">Account Settings</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 bg-teal-600 p-4 rounded flex items-center">
              <label className="block text-white text-lg font-bold w-1/3">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4 bg-teal-600 p-4 rounded flex items-center">
              <label className="block text-white text-lg font-bold w-1/3">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-green-300 text-gray-700"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4 bg-teal-600 p-4 rounded flex items-center">
              <label className="block text-white text-lg font-bold w-1/3">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-red-300 text-gray-700"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="mb-4 bg-teal-600 p-4 rounded flex items-center">
              <label className="block text-white text-lg font-bold w-1/3">Current Password</label>
              <input
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-yellow-300 text-gray-700"
                placeholder="Current Password"
                type="password"
              />
            </div>
            <div className="mb-4 bg-teal-600 p-4 rounded flex items-center">
              <label className="block text-white text-lg font-bold w-1/3">New Password</label>
              <input
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-purple-300 text-gray-700"
                placeholder="New Password"
                type="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
