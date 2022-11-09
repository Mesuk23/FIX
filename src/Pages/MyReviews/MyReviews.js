import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/Usetitle';
import MyAllReviews from './MyAllReviews';

const MyReviews = () => {
    const { user } = useContext(authContext);
    useTitle('My Reviews')
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`https://assignment-11-server-nine.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])


    const handleUpdate = (event, _id) => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    console.log(data);
                }

            })
    }

    // const handleUpdate = (event, _id) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     console.log(user)

    //     fetch(`http://localhost:5000/reviews/${_id}`, {
    //         method: 'PUT',
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(reviews)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }

    const handleChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...reviews };
        newReview[field] = value;
        setReviews(newReview);

    }

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
                reviews.map(review => <MyAllReviews handleChange={handleChange} handleUpdate={handleUpdate} key={review._id} allReview={review} handleDelete={handleDelete}></MyAllReviews>)
            }


        </div>
    );
};

export default MyReviews;