import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img from './img/logo.jpg'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <img src={img} alt='logo' className='h-24 w-24'></img>
                    <p>FIX - The New Era Begins<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <Link to='https://www.facebook.com'>
                            <FaFacebook className='text-3xl'></FaFacebook>
                        </Link>
                        <Link to='https://www.twitter.com'>
                            <FaTwitter className='text-3xl'></FaTwitter>
                        </Link>
                        <Link to='https://www.youtube.com'>
                            <FaYoutube className='text-3xl'></FaYoutube>
                        </Link>
                    </div>
                </div>

            </footer>
            <div className="text-center bg-neutral text-neutral-content pb-8">
                <p>
                    Copyright 2020 || FIX - The New Era Begins
                </p>
            </div>
        </div>
    );
};

export default Footer;