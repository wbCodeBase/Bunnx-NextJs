"use client"

import { signIn } from "../auth"


import Link from 'next/link';
import React, { useState } from 'react'

const Login = () => {
    const [formData, setFormData] = useState({ password: '', email: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === 'phone') {
            if (!/^\d*$/.test(value)) return; // Prevent non-digit input
            if (value.length > 10) return; // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };


    const handleSubmit = async (formData) => {
        // "use server"
        const email = formData.get("email")
        const password = formData.get("password")

        if (!email || !password) {
            throw new Error("Please provide all fields");
        }

        try {
            await signIn("credentials", {
                email,
                password,
            })

        } catch (error) {
            const err = error;
            return err.message;
        }

    };


    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>

                <h2 className='mb-6 font-semibold text-4xl'>Login</h2>

                <form action={handleSubmit}
                    className="flex gap-4 flex-col border p-10 rounded-xl bg-gray-50">
                    {['email', 'password'].map((field) => (
                        <div key={field}>

                            <label className="" htmlFor={field}>
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>


                            <input
                                id={field}
                                type="text"
                                placeholder={`Enter your ${field}`}
                                value={formData[field]}
                                onChange={handleChange}
                                className="w-full rounded-lg p-2.5 mt-1 border"
                            />


                        </div>
                    ))}

                    <button type="submit" className='mt-4 rounded-lg bg-gray-400 py-2 text-white'>Login</button>

                    <div className='text-center'>
                        <span>Or</span>
                    </div>

                    <form action="">
                        <button type='submit' className='bg-white rounded-lg py-2 text-center w-full'>Login With Google</button>
                    </form>

                    <div className='text-center mt-2'>
                        Don&apos;t have an account? <Link href={"/signup"} type='submit' className='bg-white rounded-lg py-2 text-center w-full font-semibold'>Sign Up</Link>
                    </div>

                    {/* <div>
                        {isSuccess && <p className="text-white">Form submitted successfully!</p>}
                        {isError && <p className="text-white">Error: {error?.data?.error || 'Something went wrong'}</p>}
                        <button
                            type="submit"
                            className="text-base mt-4 lg:text-lg tracking-widest border-2 px-6 lg:px-8 py-3 lg:py-3 inline-block duration-200 border-white rounded-lg hover:bg-white text-white hover:text-[#ee076e]"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div> */}
                </form>


            </div>
        </>
    )
}

export default Login