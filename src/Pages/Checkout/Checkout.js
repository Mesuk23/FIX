
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import OrderNow from '../Shared/OrderNow/OrderNow';

const Checkout = () => {
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
            <Reviews></Reviews>
            <OrderNow></OrderNow>



        </div>


    )

};

export default Checkout;