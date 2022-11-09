import React from 'react';

const MyAllReviews = ({ allReview }) => {
    const { review, name, service } = allReview;
    return (
        <div>
            <div className="card w-full my-4 bg-base-100 shadow-xl text-neutral">
                <div className="card-body">
                    <h2 className="card-title text-3xl">{name}</h2>
                    <p className='text-xl pb-2'> <span className='text-orange-600'>Service: </span>{service}</p>
                    <p > <span className='text-orange-600'>Reviews: </span>{review}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Delete</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAllReviews;