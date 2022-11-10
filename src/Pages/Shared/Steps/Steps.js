import React from 'react';
import step from './steps.jpg'

const Steps = () => {
    return (
        <div>
            <hr className='mt-5' />
            <h1 className="text-amber-100 text-4xl text-center my-5">Steps</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-5 items-center'>
                <div className='px-5 col-span-2'>
                    <img alt='about' src={step}></img>
                </div>

                <div className='col-md-6 px-5'>
                    <ul className="steps steps-vertical my-5 text-center text-xl">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose Service</li>
                        <li className="step">Purchase</li>
                        <li className="step">Review Product</li>
                    </ul>

                </div>


            </div>
        </div>
    );
};

export default Steps;