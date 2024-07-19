import Image from 'next/image'
import React from 'react'
import img from "@/public/hero-cover-1.png"
import { Button } from '@/components/ui/button'

export const Hero: React.FC = () => {
    return (
        <section className=' flex items-start gap-2 h-full'>
            <div className=' h-full w-full flex items-center justify-center '>
                <section className=' w-full lg:block flex items-center justify-center flex-col'>
                    <p className=' text-[#96BB7C] font-medium lg:text-[1rem] text-[1.3rem]'>Welcome</p>
                    <h1 className=' text-[#252B42] lg:text-[3.6rem] md:text-[2.5rem] text-[1.6rem] font-medium mt-6 '>Best Learning  Opportunities</h1>
                    <h3 className=' opacity-75 mt-4 font-medium'>
                        Our goal is to make online education work for everyone
                    </h3>
                    <div className=' mt-4 flex items-center gap-4'> 
                        <Button variant={"default"} className='' size={"lg"}>
                            Join us
                        </Button>
                        <Button variant={'outline'} className='' size={"lg"}>
                            Learn More
                        </Button>
                    </div>
                </section>
            </div>
            <div className=' h-full w-full lg:flex hidden items-start justify-end flex-col'>
                <Image src={img} alt='image' className=' object-contain w-full h-full' />
            </div>
        </section>
    )
}
