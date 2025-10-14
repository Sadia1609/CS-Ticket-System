import React from 'react';

const Navbar = () => {
    return (
        <div>
        <nav className="w-full bg-white shadow-sm px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
 
  <div className="text-2xl font-bold mb-2 md:mb-0">CS-Ticket System</div>

  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <ul className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
      <li>Home</li>
      <li>FAQ</li>
      <li>Changelog</li>
      <li>Blog</li>
      <li>Download</li>
      <li>Contact</li>
    </ul>
    <button className="btn btn-sm text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
      + New Ticket
    </button>
  </div>
</nav>

</div>
    );
};

export default Navbar;