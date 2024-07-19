'use client'

import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import useScrollTop from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React from 'react'

const navList = ["Home" , "Product" , "Pricing" , "Contact"]

export const Header = () => {
    const {scrolled} = useScrollTop();

    return (
        <header
            className={cn(
                'z-50 fixed bg-[#f9e8e9] top-0 w-full py-5',
                scrolled && 'border-b shadow-sm'
            )}
        >
            <main className=' container'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex items-center gap-[4rem]'>
                        <h1 className=' font-medium text-[1.6rem] text-[#252B42]'>Brandname</h1>
                        <ul className=' lg:flex hidden items-center justify-start gap-[1.3rem] '>
                            {navList.map((ele) => (
                                <li 
                                    key={ele}
                                    className=' cursor-pointer opacity-65 font-medium' 
                                >{ele}</li>
                            ))}
                        </ul>
                    </div>
                    <div className=' flex items-center  justify-end gap-[1.3rem]'>
                        <Button className=' py-5' variant={"ghost"}>
                            Login
                        </Button>
                        <Button className='lg:flex hidden  uppercase py-5' variant={"default"}>
                            join us <ArrowRight className=' ml-2 w-5 h-5' />
                        </Button>
                        <div className=' lg:hidden block'>
                            <Navbar list={navList} />
                        </div>
                    </div>
                </div>
            </main>
        </header>
    )
}
