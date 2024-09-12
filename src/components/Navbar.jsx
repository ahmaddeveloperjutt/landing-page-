import React from 'react';
import './navbar.css'
import images from '../assets/images.jpeg'
const Navbar = () => {
  return (
    <div>
   
       

   <div className='bg-gray-800'>
      <div className='flex justify-between p-4'>
        <div>
          <h2 className='text-2xl font-bold text-white'>FAT&S</h2>
        </div>
        <div className='flex gap-4 '>
          <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg text-xs sm:text-sm  md:text-base lg:text-base hover:opacity-80 transition duration-300 ease-in-out'>
            Login as Admin
          </button>
          <button className='bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-base hover:opacity-80 transition duration-300 ease-in-out'>
            Login as User
          </button>
        </div>
      </div>
    </div>

    <div className='flex flex-col lg:flex-row gap-8 p-4 lg:p-8'>
     
      <div className='flex-1 p-4 lg:p-8 lg:w-1/3'>
        <h1 className='text-gradient text-2xl lg:text-6xl font-bold mb-4'>
          FA <br /> tech & solution
        </h1>
        <p className='text-base lg:text-lg leading-relaxed'>
          FA tech and solution is the leading software house in Faisalabad with a quality staff and management. They provide quality work with numerous successful projects and satisfied clients all over the world.
        </p>
      </div>
   
      <div className='flex-1 lg:w-2/3'>
        <img src={images} alt='FA tech & solution' className='w-full h-auto object-cover rounded-lg shadow-lg' />
      </div>
    </div>
    </div>
  );
};

export default Navbar;
