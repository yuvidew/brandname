'use client'

import React, { useEffect, useRef, useState } from 'react';

import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { ArrowLeft, ArrowRight, FacebookIcon, InstagramIcon, TwitchIcon, TwitterIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';



interface Props {
  images: any[]; // Array of image objects
}

export const CarouselComp: React.FC<Props> = ({ images }) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [currentSlide, setCurrentSlide] = useState(1); // Track current slide

    const scrollBtn = (direction: number) => {
        if (sliderRef.current) {
        const slideWidth = sliderRef.current.clientWidth; // Get slide width dynamically
        const newSlideIndex = currentSlide + direction;

        if (newSlideIndex >= 0 && newSlideIndex < images.length) {
            setCurrentSlide(newSlideIndex);
            sliderRef.current.scrollBy({
                left: slideWidth * direction,
                behavior: 'smooth',
            });
        }
        }
    };


    return (
        <div className="py-4 relative">
            <div className="lg:flex md:flex hidden absolute top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/5 w-full justify-between items-center mt-5">
                <Button variant={"default"} size={"icon"} className=' rounded-full' onClick={() => scrollBtn(-1)}>
                    <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button variant={"default"} size={"icon"} className=' rounded-full' onClick={() => scrollBtn(1)}>
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>

        <div
            className="flex items-center justify-between gap-3 mt-2 scrollbar-hide overflow-x-scroll "
            ref={sliderRef}
            style={{ scrollBehavior: 'smooth' }}
        >
            <div className="flex items-center justify-between gap-[1.98rem]  py-2">
                {images.map((img, index) => (
                    <Card
                        key={index}
                        className="bg-white  w-[19rem]   overflow-hidden"
                    >
                        <Image
                            className="w-full h-80 object-cover overflow-hidden"
                            src={img}
                            alt={`img ${index}`} 
                        />
                        <CardContent className=' w-full py-4'>
                            <h3 className=' text-[#252B42] text-center font-bold'>Julian Jameson</h3>
                            <p className=' text-[#737373] text-center mt-2 text-[.8rem]'>Profession</p>
                            <div className='flex items-center justify-center gap-5 py-3'>
                                <FacebookIcon className=' w-6 h-6 text-[#96BB7C]' />
                                <InstagramIcon className=' w-6 h-6 text-[#96BB7C]' />
                                <TwitterIcon className=' w-6 h-6 text-[#96BB7C]' />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        </div>
    );
};
