import React, { useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"
import {
    GoogleAuthProvider, signInWithRedirect,
    updateProfile, GithubAuthProvider

} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    //sign in with google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = async () => {
        try {
            const result = await signInWithRedirect(auth, googleProvider)
            navigate("/")
            console.log(result.user)
        } catch (err) {
            console.log(err)
        }
    }
    //sign in with github
    const githubProvider = new GithubAuthProvider();
    const GithubLogin = async () => {
        try {
            const result = await signInWithRedirect(auth, githubProvider);
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
        else {
            console.log("login")
        }
    })
    return (
        <div className='shadow-xl flex w-[350px]  h-[380px] flex-col justify-start items-center m-auto mt-20 bg-white p-5 text-primary rounded-lg sm:p-10'>
            <h2 className='text-3xl font-medium'>Join us Today</h2>
            <div>
                <h3 className='my-4 text-center'>Sign in with one of the providers</h3>
            </div>
            <div className='flex flex-col my-8'>
                <button onClick={GoogleLogin} className='my-4 text-white flex justify-arround px-5 py-3 rounded-lg bg-gray-700 w-full items-center hover:text-sky-500 hover:bg-primary'>
                    <FcGoogle className='mr-2' />Sign in with Google
                </button>
                <button onClick={GithubLogin} className='text-white flex justify-start 
                items-center rounded-lg py-3 px-5 bg-gray-700  w-full
                 hover:text-sky-500 hover:bg-primary'>
                    <AiFillGithub className='mr-2' /> Sign in with Github
                </button>
            </div>
        </div>
    )
}

export default LoginPage