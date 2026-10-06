import { useState } from 'react';

const Navbar = () => {
    const [ active, setActive ] = useState('Home');
    const links = ['Home', 'About', 'Portfolio', 'Contact']
    return(
        <nav className='flex justify-between ms-20 me-20 mt-6 text-white'>
            <a href="#" class='font-bold uppercase text-2xl text-violet-500'>Portfolio</a>
            <ul className='flex justify-between gap-8'>
                {links.map((link) => {
                    const isActive = active === link;

                    return(
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`} 
                               onClick={() => setActive(link)}
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
    )
}

export default Navbar;