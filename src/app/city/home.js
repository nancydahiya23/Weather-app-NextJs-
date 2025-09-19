import Link from 'next/link'
import React from 'react'

export default function Return() {
  return (
    <div className='text-center mt-[20px]'>
      <p className="text-gray-300 mb-6 mx-[20px]">
      We couldn't find any city matching your search.
      Please try a different name.
    </p>
        <h3 className='text-2xl'>Go to Home page <Link className="text-blue-400 font-bold hover:text-blue-500 hover:underline transition duration-200" href="/">Home&#8599;</Link></h3>
    </div>
  )
}
