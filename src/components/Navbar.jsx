import { useState } from 'react';

const Navbar = () => {
    const [ active, setActive ] = useState('Home');
    const links = ['Home', 'About', 'Portfolio', 'Contact']
    const handleClick = (e, link) => {
        setActive(link);

        if (link === 'Home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    };
    return(
        <div className='sticky top-0 pt-3 bg-[#18181b]'>
            <nav className='flex justify-between ms-20 me-20 mt-4 text-white'>
                <a href="#" class='font-bold uppercase text-2xl text-violet-500'>Portfolio</a>
                <ul className='flex justify-between gap-8'>
                    {links.map((link) => {
                        const isActive = active === link;

                        return(
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`} 
                                onClick={(e) => handleClick(e, link)}
                                className={`transition-colors duration-200 underline-offset-8 
                                    ${isActive ? 'text-violet-500 underline'
                                            : 'hover:text-violet-500 hover:underline'
                                }`}
                                >
                                    {link}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <hr className='mt-5 text-gray-700' />
        </div>
    )
}

export default Navbar;