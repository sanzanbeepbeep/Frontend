import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Signup = ({}) => {
    return(
        <>
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="fixed top-0 left-0 right-0 bottom-0">
                <div className='flex flex-row h-full'>
                    <div className="w-1/2 h-full">
                        <Image src="/images/1login.png" width={500} height={500} style={{ width: '100%', height: '100%' }} alt="vdo" />
                    </div>
                    <div className="w-1/2 flex items-center justify-center h-full">
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col justify-start">
                                <h1 className="font-montserrat text-4xl font-bold">Sign Up</h1>
                                <div className="flex flex-row">
                                    <p className="font-montserrat">Email</p>
                                    <span className="text-red-600 ml-1">*</span>
                                </div>
                                <div className="flex flex-col">
                                    <form className="flex">
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-1" type="text" placeholder=""></input>
                                    </form>
                                </div>
                                <div className="flex flex-row">
                                    <p className="font-montserrat">Password</p>
                                    <span className="text-red-600 ml-1">*</span>
                                </div>
                                <div className="flex flex-col">
                                    <form className="flex">
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-1" type="password" placeholder=""></input>
                                    </form>
                                </div>
                                <div className="flex flex-row">
                                    <p className="font-montserrat">Password Confirmation</p>
                                    <span className="text-red-600 ml-1">*</span>
                                </div>
                                <div className="flex flex-col">
                                    <form className="flex">
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-1" type="text" placeholder=""></input>
                                    </form>
                                </div>
                                <div className="flex flex-row">
                                    <p className="font-montserrat">Password Confirmation</p>
                                    <span className="text-red-600 ml-1">*</span>
                                </div>
                                <div className="flex flex-col">
                                    <form className="flex">
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-1" type="text" placeholder=""></input>
                                    </form>
                                </div>
                            </div>
                            <form>
                                <button className="bg-white hover:bg-black hover:text-white border-2 border-black duration-300 text-black font-bold py-2 w-full rounded mt-10" type="submit">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Signup;