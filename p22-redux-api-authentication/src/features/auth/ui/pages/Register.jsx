import React from 'react'
import { useAuthHook } from '../../hooks/useAuthHook'

const Register = () => {
    console.log('register is working......')
    let { navigate, register, handleSubmit, getValues, errors, registerForm } = useAuthHook();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-geist font-medium text-gray-800">
                        Create Account 🚀
                    </h1>
                    <p className="text-gray-500 mt-2">Sign up to get started</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(registerForm)} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            {...register('name', {
                                required: 'Name is required',
                                minLength: {
                                    message: 'Give proper name'
                                }
                            })}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            {...register('email', {
                                required: 'Email is required',
                                minLength: {
                                    message: 'Give proper Email'
                                }
                            })}

                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}

                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            {...register('password', {
                                required: 'password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Minimum 6 characters required'
                                }
                            })}

                            type="password"
                            placeholder="Create a password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}

                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Type Password again
                        </label>
                        <input
                            {...register('passwordAgain', {
                                required: 'password is required',
                                validate: (value) => {
                                    return value === getValues('password') || 'Password do not match'
                                }
                            })}
                            type="password"
                            placeholder="Type above password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />
                        {errors.passwordAgain && <p className='text-red-600'>{errors.passwordAgain.message}</p>}

                    </div>

                    {/* Register Button */}
                    <button

                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                        onClick={() => { navigate('/') }}

                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register