import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/ContextProvider';
import MyAllReviews from './MyAllReviews';

const MyReviews = () => {
    const { user } = useContext(authContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    console.log(reviews);


    return (
        <div>
            {
                reviews.map(review => <MyAllReviews key={review._id} allReview={review}></MyAllReviews>)
            }

        </div>
    );
};

export default MyReviews;