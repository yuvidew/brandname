'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface IFormInput {
    email: string;
}

export const SubscribeComp: React.FC = () => {
    const {register , handleSubmit , formState : {errors}} = useForm<IFormInput>()

    const onSubmit : SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        alert(data.email)
    }

    return (
        <section className=' lg:h-[70vh] py-[4rem] bg-[#f9e8e9]'>
            <div className=' container h-full'>
                <div className=' flex items-center justify-center flex-col gap-2 h-full'>
                    <p className='text-[#96BB7C] font-medium'>
                        Newsletter
                    </p>
                    <h1 className='text-[#252B42] lg:text-[3rem] md:text-[1.6rem] text-[1.3rem] font-bold'>Watch our Courses</h1>
                    <p className='text-[#737373] text-center lg:text-[1rem] md:text-[.8rem] text-[.7rem]'>
                        Problems trying to resolve the conflict between 
                        <br /> the two major realms of Classical physics: Newtonian mechanics 
                    </p>

                    <form 
                        onSubmit={handleSubmit(onSubmit)}
                        className=' lg:w-[50rem] md:w-[35rem] w-full bg-white h-[3rem] overflow-hidden rounded-md mt-3'
                    >
                        <div className=' flex items-center w-full h-full'>
                            <Input 
                                className='w-[85%] border-none focus:outline-none h-full rounded-l-md' 
                                id="email"
                                {...register("email", { required: "Email is required" })}
                            />
                            <Button variant={"default"} className='w-[15%] h-full rounded-none '
                            >
                                Submit
                            </Button>
                        </div>
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </form>
                </div>
            </div>
        </section>
    )
}
