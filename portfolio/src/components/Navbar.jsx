const Navbar = () => {
    return(
            <nav className="sticky z-50 top-0 bg-[#060E20] flex justify-between px-10 py-5 text-white items-center border-b border-[#d3d3d336]">
                <a href=""><h3 className="uppercase text-[#4CD7F6] font-semibold font-jetbrains">Portfolio</h3></a>
                <ul className="flex justify-between w-80 text-[#BCC9CD] text-[14px]">
                    <li><a href="" className="hover:underline">About</a></li>
                    <li><a href="" className="hover:underline">Arsenal</a></li>
                    <li><a href="" className="hover:underline">Projects</a></li>
                    <li><a href="" className="hover:underline">Contact</a></li>
                </ul>
                <button className="bg-[#4CD7F6] text-black font-bold rounded-3xl py-1.5 px-6 text-[13px] cursor-pointer">Resume</button>
            </nav>
    )
}

export default Navbar;