"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  description: string;
}

const UserSettings: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    description: ''
  });
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(120deg, #0f2027, #203a43, #2c5364)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: -40,
        padding: 0,
      }}
    >
      <Link href="/" className="absolute top-4 left-4 p-2 rounded-full bg-teal-800 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </Link>

      <div className="container mx-auto max-w-lg md:max-w-4xl bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row md:h-auto">
        <div className="p-8 md:w-1/3 flex flex-col items-center bg-teal-600 text-white">
          <img
            src={profilePic || "https://img.icons8.com/ios-glyphs/90/ffffff/user--v1.png"}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white object-cover mb-4"
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
            className="mt-4 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700 w-full h-24 md:h-32"
            placeholder="Tell us about yourself"
          />
        </div>

        <div className="p-8 md:w-2/3 flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Account Settings</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {["firstName", "lastName", "email"].map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-lg font-bold text-gray-700">{field.replace(/^\w/, (c) => c.toUpperCase())}</label>
                <input
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                />
              </div>
            ))}
            {["currentPassword", "newPassword"].map((field, index) => (
              <div key={index + 3} className="flex flex-col">
                <label className="text-lg font-bold text-gray-700">{field.replace(/^\w/, (c) => c.toUpperCase()).replace(/([A-Z])/g, ' $1')}</label>
                <input
                  name={field}
                  type="password"
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-700"
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase()).replace(/([A-Z])/g, ' $1')}
                />
              </div>
            ))}
            <div className="flex justify-center mt-4">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">
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
