"use client";

import React, { useState } from 'react';

const UserSettings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 text-gray-900 py-12">
      <div className="container mx-auto w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Account Settings</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700" placeholder="First Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700" placeholder="Last Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700" placeholder="Email" type="email" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Current Password</label>
              <input name="currentPassword" value={formData.currentPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700" placeholder="Current Password" type="password" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
              <input name="newPassword" value={formData.newPassword} onChange={handleChange} className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700" placeholder="New Password" type="password" />
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
