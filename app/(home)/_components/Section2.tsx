import React from 'react'
import img1 from "@/public/user-cover-1.png"
import img2 from "@/public/user-cover-2.png"
import img3 from "@/public/user-cover-3.png"
import img4 from "@/public/user-cover-4.png"
import { CarouselComp } from './Carousel'

export const Section2 :React.FC = () => {
    const imagesList = [img1 , img2 , img3 , img4 , img1 , img2 , img3 , img4]
    return (
        <section className=' py-[4rem] flex items-center justify-center '>
            <div className=' w-full'>
                <div className='w-full'>
                    <span className='text-[#96BB7C]'>Team</span>
                    <h2 className=' font-bold text-[1.3rem] mt-3 text-[#252B42]'>Get Quality Education</h2>
                    <p className=' mt-3 text-[.9rem] text-[#737373]'>Problems trying to resolve the conflict between 
                    <br />the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <CarouselComp images={imagesList} />
            </div>
        </section>
    )
}
