import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { authContext } from '../../Context/ContextProvider';

const AllReviews = ({ allReview }) => {
    const { user } = useContext(authContext);
    const { review, name, service } = allReview;
    return (
        <div className=''>
            <div className="card w-full my-4 bg-base-100 shadow-xl text-neutral">
                <div className="card-body text-left">
                    <div className='flex items-center'>
                        {
                            user?.photoURL ? <><img style={{ height: '30px', borderRadius: "15px" }} src={user?.photoURL} alt="" /></> : <FaUserAlt />

                        }
                        <h2 className="text-3xl ml-3 text-blue-700">{name}</h2>
                    </div>

                    <p className='text-xl pb-2'> <span className='text-orange-600'>Service: </span>{service}</p>
                    <p > <span className='text-orange-600'>Reviews: </span>{review}</p>

                </div>
            </div>
        </div>

    );
};

export default AllReviews;