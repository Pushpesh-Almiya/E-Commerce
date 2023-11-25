import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 uppercase p-5'>
            <div className='flex justify-start items-center flex-col'>
                <h1 className='text-xl font-medium my-3 capitalize'>Company</h1>
                <p className='text-sm py-1 cursor-pointer'>About</p>
                <p className='text-sm py-1 cursor-pointer'>Blog</p>
                <p className='text-sm py-1 cursor-pointer'>Press</p>
                <p className='text-sm py-1 cursor-pointer'>Jobs</p>
                <p className='text-sm py-1 cursor-pointer'>Partners</p>
            </div>
            <div className='flex justify-start items-center flex-col'>
                <h1 className='text-xl font-medium my-3 capitalize'>Solutions</h1>
                <p className='text-sm py-1 cursor-pointer'>Marketing</p>
                <p className='text-sm py-1 cursor-pointer'>Analytics</p>
                <p className='text-sm py-1 cursor-pointer'>Commerce</p>
                <p className='text-sm py-1 cursor-pointer'>Insights</p>
                <p className='text-sm py-1 cursor-pointer'>Supports</p>
            </div>
            <div className='flex justify-start items-center flex-col'>
                <h1 className='text-xl font-medium my-3 capitalize'>Documentation</h1>
                <p className='text-sm py-1 cursor-pointer'>Guides</p>
                <p className='text-sm py-1 cursor-pointer'>Api status</p>
            </div>
            <div className='flex justify-start items-center flex-col'>
                <h1 className='text-xl font-medium my-3 capitalize'>Legal</h1>
                <p className='text-sm py-1 cursor-pointer'>Claim</p>
                <p className='text-sm py-1 cursor-pointer'>Privacy</p>
                <p className='text-sm py-1 cursor-pointer'>Terms</p>
            </div>
        </div>
        <div className='flex justify-center items-center flex-col py-4 font-medium'>
            <h3> &copy; 2023 My Company. All rigths reserved</h3>
            <h3>Made with love by Pummy🤞</h3>
        </div>
      
    </div>
  )
}

export default Footer
