import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-3xl">sj</a>
      </div>
      <div className="flex-none text-2xl">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
        </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
