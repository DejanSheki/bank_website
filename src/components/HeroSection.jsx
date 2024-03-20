import heroImg from '../assets/hero.jpeg';

const HeroSection = () => {
    return (
        <section className="flex w-full pl-24 pr-16 py-12">
            <div className="flex flex-col w-5/12 mt-12">
                <h1 className='font-lora font-medium text-[70px] leading-[90px] text-turquoise-headings'>Empowering Your Financial Horizon</h1>
                <p className='font-poppins font-normal text-2xl leading-9 text-gray mt-3 mb-8'>Secure, Reliable, and Personalized Banking Solutions Tailored Just for You</p>
                <button className='bg-orange py-[9px] px-6 rounded-[10px] text-btn-white w-fit'>Get Started</button>
            </div>
            <div className="w-7/12">
                <img src={heroImg} alt="Hero image" />
            </div>
        </section>
    )
}

export default HeroSection;