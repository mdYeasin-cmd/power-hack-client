import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const SignUp = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value

        console.log(name, email, password);

    }

    return (
        <Layout>
            <div>
                <div className="w-2/5 mx-auto shadow-2xl p-8 my-10 rounded-lg">
                    <h2 className="text-3xl w-4/12 mx-auto py-2 rounded-lg font-semibold text-center bg-[#51DBDC] bg-opacity-50">Sign Up</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="form-control w-full">
                            <input
                                type="submit"
                                value="Sign Up"
                                className="btn bg-[#51DBDC] hover:bg-[#51DBDC] hover:bg-opacity-95 border-0 mt-4 w-full"
                            />
                        </div>
                    </form>
                    <div>
                        <p className="text-center mt-3 text-lg">
                            <small>Already have an account? <Link className="text-blue-900" to="/login">Log In</Link></small>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignUp;