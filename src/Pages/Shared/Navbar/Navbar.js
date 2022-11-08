import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { authContext } from '../../../Context/ContextProvider';

const Navbar = () => {
    const { user, handleLogOut } = useContext(authContext);
    const logOut = () => {
        handleLogOut()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error))
    }

    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/' >Home</a></li>
                        <li tabIndex={0}>
                            <Link to='/' className="justify-between">
                                Services
                            </Link>
                        </li>
                        <li><Link to='/services' >Blog</Link></li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-3xl">FIX</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' >Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/services' >
                            Services
                        </Link>

                    </li>
                    <li><Link to='/services' >Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <>
                        <Link className='mr-3' onClick={logOut}>Log Out</Link>
                        {
                            user?.photoURL ? <><img className='mr-3' style={{ height: '30px', borderRadius: "15px" }} src={user?.photoURL} alt="" /></> : <FaUserAlt />


                        }
                    </> : <>
                        <Link className='mr-3' to='/signup'>Sign Up</Link>
                        <Link className='mr-3' to='/login'>Log In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;