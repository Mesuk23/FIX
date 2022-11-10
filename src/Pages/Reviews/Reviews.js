import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';
import AllReviews from './AllReviews';

const Reviews = () => {
    const { user } = useContext(authContext);
    const { name } = useLoaderData();

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-mesuk23.vercel.app/service-reviews?service=${name}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])






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

        fetch('https://assignment-11-server-mesuk23.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Reviews added successfully');
                    form.reset();
                    const remaining = reviews.filter(review => review.name === name);
                    setReviews(remaining)

                }
            })
            .catch(err => console.error(err))


    }

    return (
        <div className='my-5 border rounded p-3 text-neutral'>
            {/* show reviews */}
            <div className='mb-3'>
                <h1 className="text-4xl text-center text-slate-200 my-5">Reviews</h1>
                {
                    reviews.map(review => <AllReviews key={review._id} allReview={review}></AllReviews>)
                }
                <hr />
            </div>

            <div>
                <h1 className="text-5xl text-center text-slate-100 my-5">Leave A Review</h1>
                <form className='mb-3' onSubmit={handleReview}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name='firstName' type="text" placeholder="Enter First Name" className="input w-full" required />
                        <input name='lastName' type="text" placeholder="Enter Last Name" className="input w-full" required />
                        <input name='email' type="email" readOnly defaultValue={user?.email} placeholder="Enter Your Email" className="input w-full" />
                        <input name='service' type="text" readOnly defaultValue={name} placeholder="Service Name" className="input w-full" />

                    </div>
                    <div>
                        <textarea name='review' className="textarea w-full my-3" placeholder="Leave a review"></textarea>
                        <div className='text-center'>
                            {
                                user?.uid ? <button className='btn btn-secondary'>Submit</button> : <p className='text-white'>Please <Link className='text-blue-700' to='/login'>log in</Link> to submit a comment</p>
                            }

                        </div>

                    </div>
                </form>

            </div>




        </div>
    );
};

export default Reviews;