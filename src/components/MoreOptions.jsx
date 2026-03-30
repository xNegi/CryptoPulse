import React from 'react'
import { Link } from 'react-router-dom';

const MoreOptions = () => {
  return (
     <nav className="flex text-xl border-b-2 border-black-100 p-4 mx-6 justify-around items-center gap-6 Bgray">
      <Link to="/" className="hover:text-blue-500">Top</Link>
      <Link to="/trending" className="hover:text-blue-500">Trending</Link>
      <Link to="/most-visited" className="hover:text-blue-500">Most visited</Link>
      <Link to="/new" className="hover:text-blue-500">New</Link>
    </nav>
  );
};

export default MoreOptions


