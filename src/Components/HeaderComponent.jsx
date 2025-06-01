import { useState } from 'react';
import logo from './../assets/icons/Gunpla_Logo.svg';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { FaGithub } from 'react-icons/fa';
import { navbarLinks } from '../utils/links';

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='bg-palette-400 shadow-2xl font-sans font-thin text-white'>
      <nav className='max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between'>
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={ logo } alt="logo" className='w-48'/>
        </div>

        {/* Botón Hamburguesa (solo en tamaños pequeños) */}
        <button className='md:hidden px-8 pl-4 pr-4'>
          {
            isOpen
              ?
                <RxCross1
                  color="#effef9"
                  size={24}
                  onClick={ toggleMenu }
                />
              :
                <FaBars
                  color="#effef9"
                  size={24}
                  onClick={ toggleMenu }
                />
          }
          
        </button>

        {/* Menú navegación */}
        {/* VIEW DESKTOP */}
        <ul className='hidden md:flex items-center gap-6'>
          {
            navbarLinks.map(({id, title, link}) => (
              <li key={id}>
                <a href={link} className="hover:underline transition-colors text-palette-100">
                  {title}
                </a>
              </li>
            ))
          }
          <li><a href="https://github.com/brutalkingran"> <FaGithub size={24} color="#ffd93c" aria-label="GitHub logo" /> </a></li>
        </ul>
      </nav>

        {/* VIEW MOBILE */}
        <div className={`absolute w-full transition-all duration-300 bg-palette-50 md:hidden ${ isOpen ? 'opacity-100' : 'opacity-0'}`}>
          {/* MOBILE LINKS */}
          <ul className='flex flex-col px-4 py-2'>
            {
              navbarLinks.map(({id, title, link}) => (
                <li key={id} className='py-2 text-center'>
                  <a href={link} className="hover:underline transition-colors text-palette-100">
                    {title}
                  </a>
                </li>
              ))
            }
            <li><a href="https://github.com/brutalkingran"> <FaGithub size={24} color="#ffd93c" aria-label="GitHub logo" /> </a></li>
          </ul>
        </div>
    </header>
  )
}

export default HeaderComponent