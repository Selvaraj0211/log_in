import React from 'react'

const Success = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-red-400 to-blue-500 flex items-center justify-center p-4">
            <div className="bg-gray-400 rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">🎉 Welcome!</h1>
                <p className="text-gray-600 mb-6 text-lg">You have successfully logged in to your Instagram account.</p>
                <div className="bg-blue-100 text-blue-700 px-4 py-3 rounded mb-6">
                    <p>Hello <span className="font-semibold">Selva</span>, explore your features below!</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition">
                    Go to Main Features
                </button>
            </div>
        </div>
    </>
  )
}

export default Success