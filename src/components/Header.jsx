import React from 'react';
import { FaTasks } from 'react-icons/fa'; // Importing a task icon from react-icons

const Header = () => (
  <div className="text-center mb-10">
    <h1 className="text-5xl font-extrabold text-black">
      <FaTasks className="inline mr-2" /> To-Do Application
    </h1>
  </div>
);

export default Header;
