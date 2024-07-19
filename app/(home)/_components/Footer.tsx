import { FacebookIcon, InstagramIcon, Mail, MapPin, Phone, TwitterIcon } from 'lucide-react'
import React from 'react'

export const Footer:React.FC = () => {
    const footerList = [
        {
            heading : "Company Info",
            listArr : [
                'about us',
                'carrier',
                'we are hiring',
                'blog'
            ]
        },
        {
            heading : "Legal",
            listArr : [
                'about us',
                'carrier',
                'we are hiring',
                'blog'
            ]
        },
        {
            heading : "Resource",
            listArr : [
                'IOS & Android',
                'Watch a Demo',
                'Customers',
                'API'
            ]
        },
    ]
    return (
        <footer>
            <div className=' container py-[3rem]'>
                <div className=' grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 py-[4rem]'>
                    {footerList.map((ele , index) => (
                        <div key={index} className=''>
                            <h1 className=' text-[1.1rem] text-[#252B42] font-bold mb-4'>{ele.heading}</h1>
                            <ul>
                                {ele.listArr.map((ele , index) => (
                                    <li className=' text-[.9rem] capitalize mb-2 text-[#737373] font-bold' key={index} >{ele}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className=''>
                        <h1 className=' text-[1.1rem] text-[#252B42] font-bold mb-4' >Get In Touch</h1>
                        <ul>
                            <li className=' flex items-center gap-3'><Phone className=' text-[#96BB7C] w-5 h-5 ' /> <span className='text-[.9rem] capitalize mb-2 text-[#737373] font-bold'>(480) 555-0123</span></li>
                            <li className=' flex items-center gap-3'><MapPin  className=' text-[#96BB7C] w-7 h-7 ' /> <span className='text-[.9rem] capitalize mb-2 text-[#737373] font-bold'>4517 Washington Ave. Manchester, 
                            Kentucky 39495</span></li>
                            <li className=' flex items-center gap-3'><Mail  className=' text-[#96BB7C] w-5 h-5 ' /> <span className='text-[.9rem] capitalize mb-2 text-[#737373] font-bold'>debra.holt@example.com</span></li>
                        </ul>
                    </div>
                </div>
                <div className=' lg:flex md:flex items-center justify-between'>
                    <h2 className=' text-[#737373] text-[.9rem] font-bold lg:text-left md:text-left text-center' >Made With Love By Figmaland All Right Reserved </h2>
                    <div className=' flex items-center lg:justify-end md:justify-end justify-center lg:mt-0 md:mt-0 mt-4  gap-5'>
                        <FacebookIcon className=' w-5 h-5 text-[#96BB7C]' />
                        <InstagramIcon className=' w-5 h-5 text-[#96BB7C]' />
                        <TwitterIcon className=' w-5 h-5 text-[#96BB7C]' />
                    </div>
                </div>
            </div>
        </footer>
    )
}
