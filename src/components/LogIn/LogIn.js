import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const LogIn = () => {
    return (
        <Layout>
            <div className="w-2/5 mx-auto shadow-2xl p-8 my-16 rounded-lg">
                <h2 className="text-3xl w-4/12 mx-auto py-2 rounded-lg font-semibold text-center bg-[#51DBDC] bg-opacity-50">Log In</h2>
                <form>

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
                            value="Log In"
                            className="btn bg-[#51DBDC] hover:bg-[#51DBDC] text-l hover:bg-opacity-95 border-0 mt-4 w-4/12 mx-auto"
                        />
                    </div>
                </form>

                <div className="divider my-5">OR</div>

                <div>
                    <p className="text-center mt-3 text-lg">
                        <small>Don't have an account? <Link className="text-blue-900" to="/signup">Sign Up</Link></small>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default LogIn;