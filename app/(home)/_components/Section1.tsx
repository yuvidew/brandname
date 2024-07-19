import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import icon1 from "@/public/012-blackboards.svg"
import icon2 from "@/public/013-telescope-1.svg"

export const Section1 = () => {
    return (
        <div className=' py-[3rem] lg:h-[35rem] flex items-center justify-center'>
            <section className=' lg:flex items-center gap-2 w-full'>
                <div className=' w-full'>
                    <div className=' h-3 px-2 w-[8rem] border bg-red-500'></div>

                    <h2 className=' text-[#252B42] mt-[2rem] text-[1.7rem] font-medium'>Approdable Packages</h2>

                    <p className='text-[#737373] mt-5'>
                        Problems trying to resolve the conflict between 
                        <br/>the two major realms of Classical physics: 
                        <br/>Newtonian mechanics 
                    </p>

                    <br />

                    <Button variant={"trans"} className="group relative flex items-center p-4 bg-transparent transition">
                        Learn More
                        <ChevronRight className="inline-block ml-2 transition-transform transform group-hover:translate-x-1" />
                    </Button >

                </div>
                <div className=' w-full lg:flex md:flex items-center gap-3 lg:mt-0 md:mt-0 mt-8'>
                    <Card className='w-full shadow-xl mt-3'>
                        <CardHeader>
                            <Button variant={"default"} className=' py-3 h-[3.5rem] w-[4rem] '>
                                <Image 
                                    src={icon1} 
                                    alt='icon 1 ' 
                                    className=' object-contain w-6 h-6'
                                />
                            </Button>
                            <br />
                            <CardTitle className='text-[#252B42] mt-5 ' >Certified Teacher</CardTitle>
                            <br />
                            <div className=' h-1 px-2 w-[8rem] border bg-red-500'></div>
                        </CardHeader>
                        <CardContent className=' text-[#737373]'>
                            The gradual 
                            accumulation of 
                            information about 
                        </CardContent>
                    </Card>
                    <Card className='w-full shadow-xl mt-3'>
                        <CardHeader>
                            <Button variant={"default"} className=' py-3 h-[3.5rem] w-[4rem] '>
                                <Image 
                                    src={icon2} 
                                    alt='icon 2 ' 
                                    className=' object-contain w-6 h-6'
                                />
                            </Button>
                            <br />
                            <CardTitle className='text-[#252B42] mt-5 ' >Certified Instruction</CardTitle>
                            <br />
                            <div className=' h-1 px-2 w-[8rem] border bg-red-500'></div>
                        </CardHeader>
                        <CardContent className=' text-[#737373]'>
                            The gradual 
                            accumulation of 
                            information about 
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
