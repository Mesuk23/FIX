import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/ContextProvider';

const Login = () => {
    const { handleLogIn } = useContext(authContext);
    const navigate = useNavigate();

    const [error, setError] = useState(false);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const Login = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogIn(email, password)
            .then(newUser => {
                const user = newUser.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err);
                setError(err);
            })


    }

    return (
        <div className="hero min-h-screen bg-base-200 text-neutral">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left py-3">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={Login} className="card-body">
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
                                New to this site? Please <Link to='/signup' className='text-blue-600'>Register</Link>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;