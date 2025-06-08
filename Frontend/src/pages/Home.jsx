import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [user,Setuser]= useState("")
    const [pass,Setpass]= useState("")
    const navigate = useNavigate();

    function handleuser(e){
        Setuser(e.target.value )
    }
    function handlepass(e){
        Setpass(e.target.value )
    }
    function check() {
    axios.post("http://localhost:3000/login", {
        username: user,
        password: pass
    }).then(function (data) {
        console.log(data);
        if (data.data === true){
                
               navigate ("/success")
            }
            else{
                navigate("/fail")
            }
        })
    }
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-black">
                <div className="border-[0.5px] border-gray-600 bg-black m-5 p-8 w-80  flex flex-col items-center rounded">

                    <h1 style={{ fontFamily: '""Dancing Script", cursive' }} className="text-5xl text-white font-bold mb-12 mt-3">Instagram</h1>


                    <div
                    className="flex flex-col gap-3 w-full">
                        <input
                            className="border rounded border-gray-600 bg-gray-800 text-sm text-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            type="text"
                            onChange={handleuser}
                            name='username'
                            placeholder="Phone number, username, or email"
                        />
                        <input
                            className="border rounded border-gray-600 bg-gray-800 text-sm  text-gray-400 p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            type="password"
                            name='password'
                            onChange={handlepass}
                            placeholder="Password"
                        />
                        <button
                            className="bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-400 transition"
                            type="submit"
                            onClick={check}
                        >
                            Log in
                        </button>
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500 text-sm font-medium">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <button className="flex items-center justify-center gap-2 w-full text-blue-900 font-semibold text-sm mt-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                            alt="Facebook Logo"
                            className="w-5 h-5"
                        />
                        Log in with Facebook
                    </button>

                    <div className="text-sm text-blue-500 mt-4 hover:underline cursor-pointer">
                        Forgot password?
                    </div>
                </div>
                <p className='text-white py-4 w-80 text-center border my-5 rounded border-gray-600'>Don't have an account? <span className='text-blue-500'><a href="/signup">sign up</a></span>
                </p>
                <p className='text-white text-sm'>Get the app.</p>

                <div className=' flex gap-4 text-white '>
                    <div className='gap-2 px-4 mt-5 border-gray-600 border rounded flex justify-center items-center'>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_Play_2022_icon.svg/250px-Google_Play_2022_icon.svg.png"
                            alt="play store logo"
                            className="w-6 h-6" />
                        <div>
                            <p className='text-xs text-gray-500'>GET IT ON</p>
                            <p className='font-bold'>Google Play</p>
                        </div>

                    </div>
                    <div className='gap-2 mt-5 px-4 border-gray-600 border rounded flex justify-center items-center'>
                        <img
                            src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png"
                            alt="play store logo"
                            className="w-6 h-6" />
                        <div>
                            <p className='text-xs text-gray-500'>GET IT ON</p>
                            <p className='font-bold'>Microsoft</p>
                        </div>

                    </div>


                </div>

                <div className='flex flex-wrap flex-col justify-center items-center text-gray-400 text-xs  mt-12 '>
                    <div className='flex flex-wrap gap-5 justify-center items-center'>
                        <p>Meta</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Jobs</p>
                        <p>Help</p>
                        <p>API</p>
                        <p>Privacy</p>
                        <p>Terms</p>
                        <p>Locations</p>
                        <p>Instagram Lite</p>
                        <p>Threads</p>
                        <p>Contact Uploading & Non-Users</p>
                        <p>Meta Verified</p>
                    </div>
                    <div className='flex text-center gap-6 justify-center text-gray-400 text-xs  mt-6 mb-8'>
                       <select>
                        <option>English</option>
                        <option>தமிழ்</option>
                       </select>
                        <p className=''>&copy; 2025 Instagram from Meta</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
