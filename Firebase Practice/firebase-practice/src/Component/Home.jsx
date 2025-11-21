import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 flex flex-col">
      
      <header className="w-full shadow-md bg-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-blue-700">Smart School Portal</h1>

          <div>
            <a
              href="/login"
              className="px-5 py-2 mr-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Login
            </a>
            <a
              href="/register"
              className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <section className="flex-1 flex justify-center items-center text-center px-4">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Smart School Portal
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Access your dashboard, check attendance, view homework, check exam 
            results, and stay connected — all in one place.
          </p>

          <a
            href="/login"
            className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
