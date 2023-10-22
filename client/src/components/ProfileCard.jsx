import React from 'react';
import '../styles/ProfileCard.css'; // Import the CSS file

export default function ProfileCard({ user }) {
  // Check if user is null or undefined
  if (!user) {
    return (
      <div className="text-5xl">
        NIGGA
      </div>
    )
  }

  return (
    <form className='h-64 w-auto flex flex-col items-center text-center py-8 top-20vh bg-opacity-10 bg-transparent text-white shadow-lg rounded-lg'>
      <label className='text-lg font-semibold'>Username:</label>
      <p className='text-xl'>{user.name}</p>
      <div className="py-4">
        <label className='text-lg font-semibold'>Email:</label>
        <p className='text-xl'>{user.email}</p>
      </div>
      <label className='text-lg font-semibold'>Coin Amount:</label>
      <p className='text-xl'>{user.coinAmount}</p>
    </form>
  );
}
