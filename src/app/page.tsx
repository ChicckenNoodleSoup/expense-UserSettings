"use client";

import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 relative">

      {/* Settings Icon */}
      <Link href="/userSettings">
        <div className="absolute top-5 right-5 p-2 rounded-full bg-teal-800 hover:bg-teal-700 transition-colors cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zM8 4.022A8.043 8.043 0 004.022 8H5.5a6.5 6.5 0 019.543 9.543h-1.478A8.046 8.046 0 008 4.022zm7.974 8A6.5 6.5 0 008.043 4.022C9.65 5.016 10.982 6.38 11.707 8h3.268c.726-1.621 2.084-3.006 3.853-3.569A8.046 8.046 0 0015.974 12h-1.978z" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Home;
