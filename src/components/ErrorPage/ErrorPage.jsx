import React from 'react';

const ErrorPage = () => {
    const handleHomeClick = () => {
        window.location.href = '/'; // Redirect to home
      };
    
      
    return (
        <div className="flex items-center justify-center  h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops! Something went wrong</h1>
        <p className="text-lg text-gray-600 mb-8">
          We encountered an unexpected error. Please try again later.
        </p>
        <div>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4 hover:bg-blue-600 transition"
            onClick={handleHomeClick}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;