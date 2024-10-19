import React from 'react';
import logo from '../assets/img/logo.png';
import Loginform from '../components/Loginform';

const Loginpage = () => {
  return (
    <div className='loginPage w-screen h-screen flex flex-col items-center justify-center relative'>
      {/* Logo positioned in the top left corner */}
      <div className='absolute top-5 left-5'>
        <img 
          src={logo} 
          className='w-28 bg-gradient-to-b from-black/50' 
          alt="Company Logo"
        />
      </div>
        
      {/* Centered login form */}
      <div className='flex flex-col items-center w-full'>
        <Loginform formType={'SignIn'}/>
      </div>
    </div>
  );
};

export default Loginpage;
