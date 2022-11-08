import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/Usetitle';
import AllServices from './AllServices';

const SeeAllServices = () => {
    const [services, setServices] = useState([]);
    useTitle("Services")
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <p className='text-4xl text-center py-3'>Services</p>

            {
                services.map(service => <AllServices key={service._id} service={service}></AllServices>)
            }
        </div>
    );
};

export default SeeAllServices;