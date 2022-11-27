import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utils/Firebase"
const Nav = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user)
    return (

        <nav className="flex justify-between items-center p-3 bg-primary text-white">
            <Link to="/" className='text-[22px] hover:text-sky-600' ><h1  >Logo</h1></Link>
            <ul className=''>
                {!user && (
                    <Link to="/auth/login">
                        <p className='py-2 px-4 text-lg bg-sky-500 text-white 
                        rounded-lg font-meduim ml-8 w-[110px] hover:text-primary ' >Join Now</p>
                    </Link>
                )}
                {user && (
                    <div >
                        <Link to="/profile" className='rounded-lg font-meduim'>
                            <img src={user.photoURL}
                                alt="avatar" referrerPolicy='no-referrer' className='w-[50px] rounded-full' />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Nav