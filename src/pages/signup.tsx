import React,{useState} from 'react';
import Head from "next/head";
import Image from "next/image";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {Navigate} from 'react-router-dom'

import {z} from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const validationSchema = z
    .object({
        email: z.string()
                .email()
                .min(1, {message: 'Email is required'}),
        password:   z.string()
                    .min(6, {message: 'Password must be at least 6 characters'}),
        passwordConfirmation:   z.string()
                                .min(1, {message: 'Confirm Password is required'}),
        firstName:  z.string()
                    .min(1, {message: 'First Name must be at least 1 characters'}),
        lastName:   z.string()
                    .min(1, {message: 'Last Name must be at least 1 characters'})
        })
    .refine(data => data.password === data.passwordConfirmation, {
        path: ['passwordConfirmation'],
        message: 'Passwords do not match'
    });

type ValidationSchema = z.infer<typeof validationSchema>;

type validationSchema = {
    email: string;
    password: string;
    passwordConfirmation: string;
    firstName: string;
    lastName: string;
};




const Signup = ({}) => {
{/*
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [nav, setNav] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/register', {
            email,
            password,
            firstName,
            lastName,
            })
        toast.success('Sign Up Success')
        setNav(true);
    };

    if (nav) {
        return <Navigate to="/login" />;
    }
*/}

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

    return(
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="fixed top-0 left-0 right-0 bottom-0 bg-gray-100">
                <div className='flex flex-row h-full'>
                    <div className="w-1/2 h-full">
                        <Image src="/images/1login.png" width={500} height={500} style={{ width: '100%', height: '100%' }} alt="vdo" />
                    </div>
                    <div className="w-1/2 flex items-center justify-center h-full">
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col justify-start">
                                <h1 className="font-montserrat text-4xl font-bold">Sign Up</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                        <label className="font-montserrat">Email</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="text" placeholder="Email"
                                            {...register("email", { required: true })}
                                        />
                                        <label className="font-montserrat">Password</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="password" placeholder=""
                                            {...register("password", { required: true })}
                                        />
                                        <label className="font-montserrat">Password Confirmation</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="password" placeholder=""
                                            {...register("passwordConfirmation", { required: true })}
                                        />
                                        <label className="font-montserrat">First Name</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="text" placeholder=""
                                            {...register("firstName", { required: true })}
                                        />
                                        <label className="font-montserrat">Last Name</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="text" placeholder=""
                                            {...register("lastName", { required: true })}
                                        />
                                        <button className="bg-white hover:bg-black hover:text-white border-2 border-black duration-300 text-black font-bold py-2 w-full rounded mt-10" type="submit">Log in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Signup;