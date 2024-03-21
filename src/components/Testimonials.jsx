import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import testimonialsImg from '../assets/testimonials.png';
import Star from './Star';
import testimonialsClip from '../assets/testimonialsClip.svg';

const testimonials = [
    {
        name: 'John Smith',
        profession: 'Menager',
        text: 'The online banking platform simplifies my financial tasks with its user-friendly interface and robust security features',
        stars: 3
    },
    {
        name: 'Marco Juliano',
        profession: 'CEO',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio veniam cumque commodi nisi totam',
        stars: 5
    },
    {
        name: 'Dejan Lukic',
        profession: 'Frontend developer',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio veniam cumque',
        stars: 4
    },
]

const Testimonials = () => {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr === 0 ? testimonials.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === testimonials.length - 1 ? 0 : curr + 1));

    const stars = (a) => {
        let s = [];
        for (let i = 0; i < a; i++) {
            s.push(<Star fillColor="#E9ED14" />)
        }
        return s;
    }
    return (
        <section className='flex items-center justify-between px-24'>
            <div className='w-2/5'>
                <img src={testimonialsImg} alt="Testimonials Img" />
            </div>
            <div className='relative'>
                <img src={testimonialsClip} alt="Testimonials Clip" />
                <div className='absolute top-[120px] left-20 w-[65%]'>
                    <div className="overflow-hidden w-full flex transition-transform ease-out duration-500">
                        {testimonials.map((t, index) => (
                            <div key={index} className="shrink-0 w-full" style={{ transform: `translateX(-${curr * 100}%)` }}>
                                <h2 className='font-poppins font-normal text-2xl leading-9 text-dark-turquoise' >{t.name}</h2>
                                <p className='font-poppins font-light text-xl leading-[30px] my-1 text-[#4C4C4C]'>{t.profession}</p>
                                <p className='font-inter font-light text-xl leading-7 text-[#535353]'>“{t.text}”</p>
                                <div className='flex gap-[2px] mt-2'>
                                    {stars(t.stars)}
                                </div>
                            </div>

                        ))}
                    </div>
                    <button className="absolute -bottom-4 right-[72px] bg-white rounded-full flex items justify-start p-1 " onClick={prev}>
                        <IoIosArrowBack size={30} color="#b7b7b7" />
                    </button>
                    <button className="absolute -bottom-4 right-[5px] bg-white rounded-full flex items justify-start p-1 " onClick={next}>
                        <IoIosArrowForward size={30} color="#b7b7b7" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;