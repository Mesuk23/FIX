import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='text-center mt-5 my-5'>
                <h1>Page Not Found</h1>
                <h4>Please type right URL.</h4>
                <p>Want to go Homepage? <Link to="/" className='text-blue-700'>Click here</Link></p>
            </div>
        </div>
    );
};

export default NotFound;