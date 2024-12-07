"use client"

import connectToDatabase from '../../utils/database';


import User from '../../models/User';

import Link from 'next/link';
import React, { useState } from 'react'

import { hash } from "bcryptjs";

const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });



    const handleChange = (e) => {
        const { id, value } = e.target;

        // Validate phone number input to allow only digits and ensure it doesn't exceed 10 characters
        if (id === 'phone') {
            if (!/^\d*$/.test(value)) return; // Prevent non-digit input
            if (value.length > 10) return; // Limit to 10 digits
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Additional validation to ensure phone number has exactly 10 digits
        // if (formData.phone.length !== 10) {
        //     alert('Please enter a valid 10-digit phone number.');
        //     return;
        // }

        // try {
        //     await submitContactForm(formData).unwrap();
        //     alert('Form submitted successfully!');
        //     setFormData({ name: '', phone: '', email: '', message: '' });
        // } catch (err) {
        //     console.log(err);
        //     alert('Error submitting form: ' + err.data.error);
        // }
    };

    return (<>
        <div className='flex flex-col justify-center items-center h-screen'>

            <h2 className='mb-6 font-semibold text-4xl'>SignUp</h2>

            {/* <form action={async (formData) => {
                // "use server"

                const name = formData.get("name")
                const email = formData.get("email")
                const password = formData.get("password")

                if (!name || !email || !password) {
                    throw new Error("Please provide all fields");
                }

                // connection with db
                await connectToDatabase()

                const user = await User.findOne({ email })
                if (user) throw new Error("User already exists...");

                const hashedPassword = await hash(password, 10)

                User.create({ name, email, password: hashedPassword })

            }} className="flex gap-4 flex-col border p-10 rounded-xl bg-gray-50">
                {['name', 'email', 'password'].map((field) => (
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

                <button type="submit" className='mt-4 rounded-lg bg-gray-400 py-2 text-white'>SignUp</button>

                <div className='text-center'>
                    <span>Or</span>
                </div>

                <form action="">
                    <button type='submit' className='bg-white rounded-lg py-2 text-center w-full'>Login With Google</button>
                </form>

                <div className='text-center mt-2'>
                    Already have an account? <Link href={"/login"} type='submit' className='bg-white rounded-lg py-2 text-center w-full font-semibold'>Login</Link>
                </div>
            </form> */}

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


        </div>
    </>
    )
}

export default SignUp