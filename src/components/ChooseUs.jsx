import { FaTerminal } from "react-icons/fa6";
import convenience from '../assets/convenience.svg';
import accessibility from '../assets/global.svg';
import security from '../assets/security.svg';

const ChoosUs = () => {
    return (
        <section className="px-24">
            <h2 className="font-poppins font-semibold text-[82px] leading-[124px] text-dark-turquoise">Why Choose Us</h2>
            <p className="font-poppins font-light text-2xl leading-8 text-[#2c2c2c]">Opt for secure, intuitive online banking with 24/7 accessibility, innovative features, and personalized service.</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-28 mt-20">
                <div className="flex items-center">
                    <div className="bg-orange p-3 rounded-[23px] w-[87px] h-[87px] flex justify-center items-center mr-10">
                        <FaTerminal color="#F8F8F8" size={40} />
                    </div>
                    <div className="w-3/5">
                        <h3 className="font-poppins font-medium text-[39px] leading-[58px] text-dark-turquoise">Expertise</h3>
                        <p className="font-poppins font-normal text-[23px] leading-8 text-[#616161]">With a team of seasoned financial professionals.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-orange p-3 rounded-[23px] w-[87px] h-[87px] flex justify-center items-center mr-10">
                        <img src={convenience} alt="Convenience" />
                    </div>
                    <div className="w-3/5">
                        <h3 className="font-poppins font-medium text-[39px] leading-[58px] text-dark-turquoise">Expertise</h3>
                        <p className="font-poppins font-normal text-[23px] leading-8 text-[#616161]">With a team of seasoned financial professionals.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-orange p-3 rounded-[23px] w-[87px] h-[87px] flex justify-center items-center mr-10">
                        <img src={accessibility} alt="Accessibility" />
                    </div>
                    <div className="w-3/5">
                        <h3 className="font-poppins font-medium text-[39px] leading-[58px] text-dark-turquoise">Expertise</h3>
                        <p className="font-poppins font-normal text-[23px] leading-8 text-[#616161]">With a team of seasoned financial professionals.</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="bg-orange p-3 rounded-[23px] w-[87px] h-[87px] flex justify-center items-center mr-10">
                        <img src={security} alt="Security" />
                    </div>
                    <div className="w-3/5">
                        <h3 className="font-poppins font-medium text-[39px] leading-[58px] text-dark-turquoise">Expertise</h3>
                        <p className="font-poppins font-normal text-[23px] leading-8 text-[#616161]">With a team of seasoned financial professionals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChoosUs;