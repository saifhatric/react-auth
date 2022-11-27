import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom"
const Profile = () => {
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()
  if (loading) {
    return <h1>Just a second...</h1>
  }
  if (!user) {
    return navigate("/auth/login")
  }
  if (user)
    return (
      <div>
        <h1>Welcome to your dashboard  {user.displayName} </h1>
        <button className='bg-primary p-2 rounded-lg mt-2 mx-8'
          onClick={() => auth.signOut()} >
          Sign Out
        </button>

      </div>
    )
}

export default Profile