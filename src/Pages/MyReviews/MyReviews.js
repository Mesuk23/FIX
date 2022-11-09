import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/Usetitle';
import MyAllReviews from './MyAllReviews';

const MyReviews = () => {
    const { user } = useContext(authContext);
    useTitle('My Reviews')
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-11-server-nine.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])



    const handleDelete = _id => {
        const proceed = window.confirm('Are you sure to delete the comment?');
        if (proceed) {
            fetch(`https://assignment-11-server-nine.vercel.app/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert("Comment deleted successfully")
                        const remaining = reviews.filter(review => review._id !== _id);
                        setReviews(remaining)
                    }
                })
        }
    }

    console.log(reviews);


    return (
        <div>
            {
                reviews.length === 0 && <p className="text-center p-5 text-5xl text-slate-100">No Reviews Found</p>

            }
            {
                reviews.map(review => <MyAllReviews key={review._id} allReview={review} handleDelete={handleDelete}></MyAllReviews>)
            }

        </div>
    );
};

export default MyReviews;