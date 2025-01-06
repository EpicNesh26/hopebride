'use client'
import React from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';

const Username = () => {
  const { username } = useParams();
  return (
    <>
      {/* 
      {params.username} */}
      <div className="cover w-full relative">
        <img className='object-cover w-full h-[270px]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/653901/1f311add30c149d4bdd2781b1301a35f/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/81.jpeg?token-time=1738627200&token-hash=g2q9If3UP4doZKCJ2nLiJk8mEKGMlCibRVRNgzNdhbk%3D" alt="" />
        <div className='profilepic absolute bottom-[-30px] left-[50%]  transform -translate-x-[50%]'>
          <img
            className='border-2 border-white rounded-lg'
            width={85}
            height={85}
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/79712da2-9f3a-4a6a-8574-51fbe3a7cfe3/dddtdah-70582353-5c4f-4f52-8311-e74b93748f62.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5NzEyZGEyLTlmM2EtNGE2YS04NTc0LTUxZmJlM2E3Y2ZlM1wvZGRkdGRhaC03MDU4MjM1My01YzRmLTRmNTItODMxMS1lNzRiOTM3NDhmNjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NN0bZ07rGJR0RZYEPEhzgycQZPf5615PyxxJPzWEPCs"
            alt="profile picture"
          />
        </div>
      </div>
      <div className="info mt-8 flex flex-col justify-center items-center">
        <div className='font-bold text-2xl text-transparent bg-gradient-to-br from-purple-600 to-blue-500 bg-clip-text'>
          @{username}
        </div>
        <div className=' text-lg text-gray-400'>
          Creating amazing 3D print miniatures & tabletop games!
        </div>
        <div className='text-gray-400 font-bold text-sm'>
          34,938 members - 1,077 Posts
        </div>

        <div className="payment flex gap-3 text-white w-[80%] my-5">
          <div className="supporters w-1/2 bg-gray-800 bg-opacity-40 p-5">
            {/* Show list of all the supporters as a leaderboard*/}
            <h2 className='text-lg font-bold my-2'>Supporters</h2>
            <ul className='text-gray-400'>
              <li className='py-2 flex  items-center gap-2'>
                <img className='invert' width={30} height={30} src="/avatar.gif" alt="" />
                [name] donated <span className='font-bold'>$30</span> with a message "I support you."</li>
              <li className='py-2 flex  items-center gap-2'>
                <img className='invert' width={30} height={30} src="/avatar.gif" alt="" />
                [name] donated <span className='font-bold'>$30</span> with a message "I support you."</li>
              <li className='py-2 flex  items-center gap-2'>
                <img className='invert' width={30} height={30} src="/avatar.gif" alt="" />
                [name] donated <span className='font-bold'>$30</span> with a message "I support you."</li>
              <li className='py-2 flex  items-center gap-2'>
                <img className='invert' width={30} height={30} src="/avatar.gif" alt="" />
                [name] donated <span className='font-bold'>$30</span> with a message "I support you."</li>
              <li className='py-2 flex  items-center gap-2'>
                <img className='invert' width={30} height={30} src="/avatar.gif" alt="" />
                [name] donated <span className='font-bold'>$30</span> with a message "I support you."</li>

            </ul>
          </div>
          <div className="makepayment flex justify-center gap-3 flex-col items-center w-1/2 bg-gray-800 bg-opacity-40 p-5">
          <h2 className='text-2xl  font-bold my-2 '>Support Us by making a payment and contributing.</h2>
            <Link href="/payment" className='flex justify-center items-center'>
              <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mx-auto' style={styles.button}>Make a Payment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  button: {
    fontSize: '1rem',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#005bb5',
  }
}
export default Username
