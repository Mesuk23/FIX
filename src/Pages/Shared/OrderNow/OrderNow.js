import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../../Context/ContextProvider';

const OrderNow = () => {
    const { user } = useContext(authContext);
    const { name } = useLoaderData();
    return (
        <div>
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
                            <span className="label-text" >Service Name</span>
                        </label>
                        <input type="text" defaultValue={name} readOnly placeholder="Enter Service Name" className="input input-bordered" />
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
    );
};

export default OrderNow;