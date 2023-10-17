import { AdminPortal } from '@frontegg/react'
import React from 'react'

const Profile = ({user}) => {
  return (
    <>
      {user ? (
        <div className='text-5xl text-white flex justify-center items-center h-screen w-screen'>
          <p className = 'cursor-pointer' onClick={() => AdminPortal.show()}>{user.name}</p>
        </div>
      ) : (
        <p>No user</p>
      )}
    </>
  )
}

export default Profile