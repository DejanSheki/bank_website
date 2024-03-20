const Info = () => {
    return (
        <div className="flex justify-between items-center px-24">
            <div>
                <p className="flex items-center justify-between font-inter font-bold text-[40px] leading-[48px] text-[#333333]">4500+ <span className="font-semibold text-2xl leading-7 bg-gradient-to-r from-turquoise to-[#0E679C] inline-block text-transparent bg-clip-text ml-4"> User Active</span></p>
            </div>
            <div>
                <p className="flex items-center justify-between font-inter font-bold text-[40px] leading-[48px] text-[#333333]">331+ <span className="font-semibold text-2xl leading-7 bg-gradient-to-r from-turquoise to-[#0E679C] inline-block text-transparent bg-clip-text ml-4">Trusted By Company</span></p>
            </div>
            <div>
                <p className="flex items-center justify-between font-inter font-bold text-[40px] leading-[48px] text-[#333333]">$390M+ <span className="font-semibold text-2xl leading-7 bg-gradient-to-r from-turquoise to-[#0E679C] inline-block text-transparent bg-clip-text ml-4">Transaction</span></p>
            </div>
        </div>
    )
}

export default Info;
