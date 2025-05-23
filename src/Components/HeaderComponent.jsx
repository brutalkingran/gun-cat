import { FaGithub } from 'react-icons/fa';
import logo from './../assets/icons/Gunpla_Logo.svg';
import { FaBars } from "react-icons/fa6";

const HeaderComponent = () => {
    return (
        <div className='bg-red-100'>
            <nav>
                <ul className='flex items-center justify-between gap-6'>
                    <div>
                        <img src={ logo } alt="logo" className='w-48'/>
                    </div>
                    <div>
                        { /* Botón Hamburguesa (tamaño celular) */}
                        <FaBars className='md:invisible' />
                    </div>
                    <div className='max-sm:invisible md:flex gap-4'>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Catálogo</a></li>
                        <li><a href="#">Disponibles</a></li>
                        <li><a href="#">Próximos Ingresos</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Soporte</a></li>
                        <a href="https://github.com/brutalkingran"> <FaGithub size={24} color="#333" aria-label="GitHub logo" /> </a>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderComponent