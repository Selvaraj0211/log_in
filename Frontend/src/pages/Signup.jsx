import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <div className="border border-gray-700 bg-black p-8 w-80 rounded flex flex-col items-center">

                <h1 className="text-5xl text-white font-bold mb-5" style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Instagram
                </h1>

                <p className="text-gray-400 text-sm text-center mb-4">
                    Sign up to see photos and videos from your friends.
                </p>

                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-1 w-full rounded font-medium text-sm mb-4 hover:bg-blue-500 transition">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                        alt="Facebook Logo"
                        className="w-4 h-4"
                    />
                    Log in with Facebook
                </button>

                <div className="flex items-center w-full my-4">
                    <hr className="flex-grow border-gray-600" />
                    <span className="mx-2 text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-600" />
                </div>

                <input
                    type="email"
                    placeholder="Mobile Number or Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />

                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mb-2 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mb-2 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 w-full text-sm px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded focus:outline-none focus:ring-1 focus:ring-gray-400"
                />

                <button className="bg-blue-500 text-white py-2 rounded w-full font-semibold hover:bg-blue-400 transition">
                    Sign up
                </button>

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
