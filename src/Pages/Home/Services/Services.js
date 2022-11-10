import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/ContextProvider';
import useTitle from '../../../Hooks/Usetitle';
import AllServices from './AllServices';

const Services = () => {
    const [services, setServices] = useState([]);
    const { loading } = useContext(authContext);
    useTitle('Services');
    useEffect(() => {
        fetch('https://assignment-11-server-mesuk23.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    if (loading) {
        return <button className="btn loading my-5">loading</button>
    }

    return (
        <div>
            <p className='text-4xl text-center py-3'>Services</p>


            {
                services.map(service => <AllServices key={service._id} service={service}></AllServices>)
            }
            <Link to='/services' >
                <div className='my-3 text-center'>
                    <Button>See All</Button>
                </div>

            </Link>


        </div>
    );
};

export default Services;