import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';

const Checkout = () => {
    const { user } = useContext(authContext);
    const { description, name, photo, price, ratings } = useLoaderData()
    return (
        <div className=' text-center'>
            <div className="card w-full bg-neutral shadow-xl my-5 mx-2">
                <h1 className="text-center text-5xl text-amber-100 font-bold my-3">Service Info</h1>
                <figure><img src={photo} className='my-3' alt="checkout" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl mx-auto text-amber-200">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p> <span className='text-xl text-orange-600'>Descriptions:</span> {description}</p>
                    <p className="text-xl"><span className='text-2xl text-orange-600'>Price: </span>{price}</p>
                    <p><span className=' text-orange-600'>Rating: </span>{ratings}</p>
                </div>
            </div>



            <div className="card w-full text-center shadow-2xl bg-base-100 my-5 text-neutral">
                <h1 className="text-center text-4xl text-rose-900 font-bold my-3">Checkout</h1>
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" placeholder="Enter Product Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="Enter Your Email" className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </div>


    )

};

export default Checkout;