import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';
import useTitle from '../../Hooks/Usetitle';

const Signup = () => {

    const { handleSignUp, handleGoogleLogIn, loading } = useContext(authContext);

    const navigate = useNavigate();

    const [error, setError] = useState(false);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useTitle('Register')

    const createUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        handleSignUp(email, password)
            .then(newUser => {
                const user = newUser.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err)
                setError(err)
            })
    }

    const handleGoogle = () => {
        handleGoogleLogIn()
            .then(newUser => {
                const user = newUser.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err)
                setError(err)
            })
    }


    if (loading) {
        return <button className="btn loading my-5">loading</button>
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 text-neutral">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left py-3 ">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">
                            Please Register to the website for secure connection. Explore the new by us. We are here to providing you the best.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={createUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Enter your password" className="input input-bordered" required />
                                <p>
                                    {
                                        error && <p className='text-rose-700'>{error}</p>
                                    }
                                </p>
                                <div>
                                    Already have an account? Please <Link to='/login' className='text-blue-600'>Log in</Link>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogle} className="btn btn-outline btn-success"><FaGoogle className='mr-2' />  Sign in with google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;