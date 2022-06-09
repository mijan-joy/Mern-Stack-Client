import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/icons/logo.png';
import auth from '../../firebase.init';
const Navbar = () => {

  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    toast.success('Logout successfully');
  };

  const menuItems = (
    <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allproduct">All Products</NavLink>
              </li>

              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              
             {
               user &&  <li>
               <Link className="btn btn-outline" to="/dashboard">Dashboard</Link>
             </li>
             }
              <li>{user ? <button className="btn btn-outline"
              onClick={logout}  >LogOut</button> : <Link to="/login">Login</Link>}
                
              </li>
            </>

  );
  
  return (
    <div>
  <div className="navbar bg-primary text-primary-content px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItems}
      </ul>
    </div>
    <Link to="/" className="  normal-case text-xl">
      <img src={logo} alt="logo" />
    </Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  
</div>
    </div>
  );
};

export default Navbar;