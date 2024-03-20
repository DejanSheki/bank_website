import graph from '../assets/graph.jpeg';

const Explore = () => {
    return (
        <section className='flex justify-between items-center w-full pr-24 pl-16 py-12'>
            <div className='w-1/2'>
                <img src={graph} alt="Graph" />
            </div>
            <div className='w-1/2'>
                <h2 className='font-poppins font-medium text-[57px] leading-[78px] text-turquoise-headings'>Unveiling Our Financial Legacy</h2>
                <p className='font-poppins font-light text-2xl leading-9 text-[#464646] my-4'>
                    Embark on a journey through time as we proudly unveil a rich tapestry of financial legacy. Our story is intricately woven with a commitment to excellence and a tradition of empowerment.
                </p>
                <button className='bg-orange py-[9px] px-6 rounded-[10px] text-btn-white w-fit'>Explore Now</button>
            </div>
        </section>
    )
}

export default Explore;