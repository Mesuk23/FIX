import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { authContext } from '../../Context/ContextProvider';

const MyAllReviews = ({ allReview, handleDelete, handleUpdate, handleChange }) => {

    const { user } = useContext(authContext);
    const { _id, review, name, service } = allReview;




    return (
        <div>
            <div className="card w-full my-4 bg-base-100 shadow-xl text-neutral">
                <div className="card-body">
                    <div className='flex items-center'>
                        {
                            user?.photoURL ? <><img style={{ height: '30px', borderRadius: "15px" }} src={user?.photoURL} alt="" /></> : <FaUserAlt />

                        }
                        <h2 className="text-3xl ml-3 text-blue-700">{name}</h2>
                    </div>
                    <p className='text-xl pb-2'> <span className='text-orange-600'>Service: </span>{service}</p>
                    <p > <span className='text-orange-600'>Reviews: </span>{review}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <label htmlFor="my-modal" className="btn btn-primary">Update</label>
                    </div>
                </div>
            </div>

            {/* modal  */}
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal text-neutral">
                    <div className="modal-box">
                        <h1 className='text-3xl text-center text-lime-700 py-3 font-bold'>Update</h1>
                        <form onSubmit={handleUpdate}>
                            <input onChange={handleChange} defaultValue={name} name="name" type="text" placeholder="Enter Your Name" className="input w-full my-3 border border-neutral" />
                            <input type="text" defaultValue={user?.email} readOnly className="input w-full my-3 border border-neutral" />
                            <textarea onChange={handleChange} defaultValue={review} name='review' className="textarea border border-neutral w-full" placeholder="Review"></textarea>
                            <div className="modal-action grid grid-cols-2 content-between">
                                <button onClick={() => handleUpdate(_id)} className='btn btn-primary'>Update</button>
                                <label htmlFor="my-modal" className="btn">Close</label>
                            </div>
                        </form>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default MyAllReviews;