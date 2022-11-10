import React from 'react';
import { Link } from 'react-router-dom';
import about from './about.jpg'

const About = () => {
    return (

        <div>
            <hr className='mt-5' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                <div className='px-5'>
                    <img alt='about' src={about}></img>
                </div>

                <div className='col-md-6 px-5'>
                    <h1 className='text-center py-5 text-4xl'>About Us</h1> <hr />
                    <p className='my-3'>It is one of the best site to FIX your mobile phone and accessories. Tis is FIX. The begining of new era. We are here to provide you the best. We provide all the latest services to you. That gives you proper satisfaction. You can check our reviews. You can add reviews. Give us rating. We are 10 technicians here to provide you the best services you ever had. Don't be late when you need us. We are always here to serve you the best</p>
                    <Link to='/courses'>
                        <button className='btn btn-primary'>Explore us</button>
                    </Link>

                </div>


            </div>
            <hr className='mb-5' />

        </div>

    );
};

export default About;