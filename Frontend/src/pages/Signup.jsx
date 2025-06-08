import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://log-in-azlg.onrender.com", user);
            alert("Signup successful!");
            console.log("User registered:", response.data);

        } catch (err) {
            console.error(err);
            alert("Signup failed: " + err.response.data);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <div className="border border-gray-700 bg-black p-8 w-80 rounded flex flex-col items-center">

                <h1 className="text-5xl text-white font-bold mb-5" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Instagram
                </h1>

                <p className="text-gray-400 text-sm text-center mb-4">
                    Sign up to see photos and videos from your friends.
                </p>

                <form onSubmit={handleSignup} className="w-full">
                    <input
                        name="email"
                        type="email"
                        placeholder="Mobile Number or Email"
                        value={user.email}
                        onChange={handleChange}
                        className="mb-2 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded"
                    />

                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={user.username}
                        onChange={handleChange}
                        className="mb-2 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded"
                    />


                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        className="mb-4 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded"
                    />

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 rounded w-full font-semibold hover:bg-blue-400 transition"
                    >
                        Sign up
                    </button>
                </form>


                <p className="text-xs text-gray-500 text-center mt-4">
                    By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
                </p>
            </div>

            <p className='text-white py-4 w-80 text-center border my-5 rounded border-gray-600'>
                Have an account? <span className='text-blue-500 cursor-pointer'><a href="/">Log in</a></span>
            </p>

            <p className='text-white text-sm'>Get the app.</p>

            <div className='flex gap-4 mt-4'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/250px-Google_Play_2022_icon.svg.png"
                    alt="play store logo"
                    className="w-6 h-6" />
                <img
                    src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png"
                    alt="play store logo"
                    className="w-6 h-6" />
            </div>
        </div>
    );
};

export default Signup;
