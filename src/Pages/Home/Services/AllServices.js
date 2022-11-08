import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServices = ({ service }) => {
    const { _id, description, name, photo, price, ratings } = service;
    return (
        <div>
            <div className="card lg:card-side shadow-xl my-3 bg-neutral text-white">
                <div>
                    <PhotoProvider>
                        <figure>
                            <PhotoView src={photo}>
                                <img src={photo} className='object-cover w-96 h-72' alt="Album" />
                            </PhotoView>


                        </figure>
                    </PhotoProvider>
                </div>

                <div className="card-body">
                    <h2 className="card-title text-3xl pb-2 text-amber-200">{name}</h2>
                    <p> <span className='text-xl text-orange-600'>Descriptions:</span> {description.slice(0, 150)} ...<Link to={`services/${_id}`}>read more</Link></p>
                    <p className="text-xl"><span className='text-2xl text-orange-600'>Price: </span>{price}</p>
                    <p><span className=' text-orange-600'>Rating: </span>{ratings}</p>
                    <div className="card-actions justify-end">
                        <Link to={`services/${_id}`}>
                            <button className="btn btn-primary">Checkout</button>
                        </Link>

                    </div>
                </div>

            </div>

        </div >

    )
};

export default AllServices;