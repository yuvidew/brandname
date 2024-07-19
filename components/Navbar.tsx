import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignRight } from 'lucide-react'

interface props {
    list : string[]
}

export const Navbar:React.FC<props> = ({list}) => {
    return (
        <Sheet>
        <SheetTrigger>
            <AlignRight className=' text-[#96BB7C]' />
        </SheetTrigger>
        <SheetContent className='bg-[#f9e8e9]'>
            <h1 className=' font-bold text-[#252B42] text-[1.3rem] mb-7'>Menu</h1>
            <ul className=' '>
                {list.map((ele) => (
                    <li 
                        key={ele}
                        className=' cursor-pointer opacity-65 font-medium mb-4' 
                    >{ele}</li>
                ))}
            </ul>
        </SheetContent>
        </Sheet>
    )
}
