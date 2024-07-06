import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <img src="src\assets\logo.webp" alt="Internee.pk Logo" className="h-12 mb-4" />
                    <p className="text-green-600 font-bold text-xl">Internee.pk</p>
                    <p className="text-purple-600 text-sm">VIRTUAL INTERNSHIP PLATFORM</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-500 font-bold">Privacy Policy</a>
            <a href="#" className="text-black hover:text-gray-500 font-bold">Terms of Service</a>
            <a href="#" className="text-black hover:text-gray-500 font-bold">Contact Us</a>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
        <a href="#" className="text-blue-900 hover:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
            </a>
          <a href="#" className="text-blue-700 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.48 0-4.5 2.02-4.5 4.5 0 .35.04.69.1 1.02A12.94 12.94 0 013 4.56a4.48 4.48 0 001.39 6.01A4.48 4.48 0 012 10.5v.06c0 2.18 1.56 4 3.63 4.4a4.48 4.48 0 01-2.02.08A4.48 4.48 0 007.48 19a8.96 8.96 0 01-5.54 1.9c-.36 0-.71-.02-1.06-.06a12.94 12.94 0 007 2.05c8.39 0 13-6.94 13-13V6.5A9.09 9.09 0 0023 3z" />
            </svg>
          </a>
          <a href="#" className="text-blue-900 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12.08c0-5.14-4.14-9.28-9.28-9.28A9.28 9.28 0 003.5 12.08c0 4.58 3.3 8.35 7.61 9.14v-6.47h-2.3v-2.67h2.3V9.29c0-2.29 1.39-3.54 3.42-3.54.98 0 1.83.07 2.08.1v2.42h-1.43c-1.12 0-1.33.53-1.33 1.3v1.7h2.65l-.34 2.67h-2.3v6.47A9.27 9.27 0 0022 12.08z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
