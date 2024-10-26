import React from 'react'
import BannerImg from "../assets/2.png"

const Banner = () => {
  return (
    <>
        <div className='container py-14'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-c3 gap-6'>
                {/* image section  */}
                <div className='flex justify-center items-center '>
                    <img src={BannerImg} alt="" />
                </div>
                {/* text section  */}
                <div className='flex flex-col justify-center '>
                    <h1 className='text-4xl font-semibold'>Food Is Always Good!</h1>
                    <p className='py-4 font-semibold'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, at deserunt. Vel et doloribus, voluptas quasi non a debitis quae, ullam assumenda nostrum eos, ad explicabo temporibus laboriosam hic ipsa.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner