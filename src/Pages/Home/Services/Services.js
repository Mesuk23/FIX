import React, { useEffect, useState } from 'react';
import { Button } from 'react-daisyui';
import { Link } from 'react-router-dom';
import AllServices from './AllServices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div>
            <p className='text-4xl text-center py-3'>Services</p>

            {
                services.map(service => <AllServices key={service._id} service={service}></AllServices>)
            }
            <Link to='/allServices' >
                <div className='my-3 text-center'>
                    <Button>See All</Button>
                </div>

            </Link>


        </div>
    );
};

export default Services;