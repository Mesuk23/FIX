import React, { useState } from 'react';

const AddService = () => {
    const [services, setServices] = useState([])

    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const service = form.service.value;
        const photo = form.photo.value;
        const ratings = form.ratings.value;
        const price = form.price.value;
        const description = form.description.value;

        const services = {
            service,
            photo,
            ratings,
            description,
            price
        }




        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Services added successfully');
                    form.reset();
                    setServices(data)

                }
            })
            .catch(err => console.error(err))




    }
    return (
        <div className=' border-2 p-5 text-neutral'>
            <h1 className="text-5xl text-center text-slate-100 my-5">Add a Service</h1>
            <form onSubmit={handleService}>
                <input name="service" type="text" placeholder="Enter Service Name" className="input w-full mb-3 border border-neutral" required />
                <input name="photo" type="text" placeholder="Enter Image Url" className="input w-full mb-3 border border-neutral" required />
                <input name="price" type="text" placeholder="Enter Price" className="input w-full mb-3 border border-neutral" required />
                <input name="ratings" type="text" placeholder="Enter Rating" className="input w-full mb-3 border border-neutral" required />
                <textarea name='description' className="textarea border border-neutral w-full mb-3" placeholder="Write Description" required></textarea>
                <div className='text-center'>
                    <button className='btn btn-primary my-3'>Add a Service</button>
                </div>

            </form>
        </div>
    );
};

export default AddService;