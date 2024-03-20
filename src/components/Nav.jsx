

const Nav = () => {
    return (
        <nav className="flex justify-between items-center px-24 py-5 w-full bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]">
            <div>
                <a href="#" className="font-inter font-semibold text-[36px] leading-10 text-turquoise-logo">Bank</a>
            </div>
            <div>
                <ul className="flex gap-16 text-dark-turquoise font-poppins font-normal">
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className="bg-light-gray roun text-turquoise font-poppins font-semibold text-2xl leading-8 rounded-[72px] px-9 py-2">Sign In</button>
            </div>
        </nav>
    )
}

export default Nav;
