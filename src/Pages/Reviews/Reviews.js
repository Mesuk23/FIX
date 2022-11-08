import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';

const Reviews = () => {
    const { user } = useContext(authContext);
    const { name } = useLoaderData();

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const review = form.review.value;
        const service = form.service.value;

        const reviews = {
            service,
            review,
            email,
            name
        }

        console.log(reviews);
        form.reset();
    }

    return (
        <div className='my-5 border rounded p-3 text-neutral'>
            <h1 className="text-5xl text-center text-slate-100 mb-3">Leave A Review</h1>
            <form onSubmit={handleReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="Enter First Name" className="input w-full" />
                    <input name='lastName' type="text" placeholder="Enter Last Name" className="input w-full" />
                    <input name='email' type="email" readOnly defaultValue={user?.email} placeholder="Enter Your Email" className="input w-full" />
                    <input name='service' type="text" readOnly defaultValue={name} placeholder="Service Name" className="input w-full" />

                </div>
                <div>
                    <textarea name='review' className="textarea w-full my-3" placeholder="Leave a review"></textarea>
                    <div className='text-center'>
                        <button className='btn btn-secondary'>Submit</button>
                    </div>

                </div>
            </form>

        </div>
    );
};

export default Reviews;