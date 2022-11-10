import React from 'react';
import { Link } from 'react-router-dom';
import contact from './contact.jpg'

const Contact = () => {
    return (
        <div>
            <div>
                <hr className='mt-5' />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-5'>


                    <div className='col-md-6 px-5'>
                        <h1 className='text-center py-5 text-4xl'>Contact Us</h1> <hr />
                        <div className='my-3'>
                            <p className='text-2xl text-rose-300'>You can find us anywhere when you need us.</p>
                            <p> <span className='text-amber-300 text-xl'>Mobile No: </span> +8801700000001 </p>
                            <p> <span className='text-amber-300 text-xl'>Email: </span> hadeulislammesuk23@gmail.com </p>
                            <p> <span className='text-amber-300 text-xl'>Address: </span>11/0 Elephant Road, <br /> Uttora, Dhaka</p>

                        </div>
                        <Link to='/services'>
                            <button className='btn btn-primary'>Explore us</button>
                        </Link>

                    </div>
                    <div className='px-5'>
                        <img alt='about' src={contact}></img>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Contact;