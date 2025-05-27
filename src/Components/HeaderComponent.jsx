import { FaGithub } from 'react-icons/fa';
import logo from './../assets/icons/Gunpla_Logo.svg';
import { FaBars } from "react-icons/fa6";

const HeaderComponent = () => {
    return (
        <header className='bg-palette-400 shadow-2xl font-sans font-thin text-white'>
            <nav className='max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between'>
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src={ logo } alt="logo" className='w-48'/>
                </div>

                {/* Botón Hamburguesa (solo en tamaños pequeños) */}
                <button className='md:hidden px-8 pl-4 pr-4'>
                    <FaBars color="#effef9" size={24} />
                </button>

                {/* Menú navegación */}
                <ul className='hidden md:flex items-center gap-6'>
                    <li><a href="#" className="hover:underline text-palette-100">Inicio</a></li>
                    <li><a href="#" className="hover:underline text-palette-100">Catálogo</a></li>
                    <li><a href="#" className="hover:underline text-palette-100">Disponibles</a></li>
                    <li><a href="#" className="hover:underline text-palette-100">Próximos Ingresos</a></li>
                    <li><a href="#" className="hover:underline text-palette-100">Contacto</a></li>
                    <li><a href="#" className="hover:underline text-palette-100">Soporte</a></li>
                    <li><a href="https://github.com/brutalkingran"> <FaGithub size={24} color="#ffd93c" aria-label="GitHub logo" /> </a></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent