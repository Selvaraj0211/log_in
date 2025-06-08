import React from 'react'

const Fail = () => {
  return (
    <> <div className="min-h-screen bg-gradient-to-br from-red-900 to-black flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">❌ Login Failed</h1>
                <p className="text-gray-600 mb-6 text-lg">Oops! Your username or password is incorrect.</p>
                <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-6">
                    <p>Please try again or contact support if you're having trouble.</p>
                </div>
                <a
                    href="/"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition"
                >
                    Go Back to Login
                </a>
            </div>
        </div>
    </>
  )
}

export default Fail