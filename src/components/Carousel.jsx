import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import axis from '../assets/axis.png';
import hscb from '../assets/hscb.png';
import sbi from '../assets/sbi.png';
import us from '../assets/us.png';
import graph from '../assets/graph.jpeg';
import test from '../assets/hero.jpeg';

const slides = [
    axis, hscb, sbi, us, graph, test
]

const Carousel = () => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="w-full h-48 px-28 flex justify-center items-center overflow-hidden relative border-y-[1px] border-[#abaaaa] my-16">
            <button className="absolute left-3 z-10 h-full bg-white" onClick={next}>
                <IoIosArrowBack size={40} color="#b7b7b7" />
            </button>
            <div className="flex items-center overflow-hidden transition-transform ease-out duration-500" >
                {slides.map((slide, index) => (
                    <div className="w-96 mr-10 shrink-0 h-44" style={{ transform: `translateX(-${curr * 70}%)`, background: `url(${slide})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} key={index}>
                    </div>
                ))}
            </div>
            <button className="absolute right-3 z-10 h-full bg-white" onClick={prev}>
                <IoIosArrowForward size={40} color="#b7b7b7" />
            </button>
        </div>
    )
}

export default Carousel;