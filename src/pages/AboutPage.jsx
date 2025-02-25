import React from 'react';

function AboutPage() {
  return (

    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <img src='/src/assets/images/about.png'></img>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600 mb-4">
          Welcome to our website! We are a team of passionate developers, designers, and problem-solvers dedicated to building great products and providing exceptional service. Our mission is to create innovative solutions that make a difference in the world.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Our team is focused on delivering high-quality user experiences, ensuring that every interaction with our products is smooth, intuitive, and enjoyable. We pride ourselves on our ability to adapt, evolve, and stay ahead of the curve in the fast-paced world of technology.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for visiting our site, and we hope you enjoy your experience with us. If you have any questions or feedback, feel free to reach out to us!
        </p>

        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
