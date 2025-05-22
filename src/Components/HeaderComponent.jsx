import { FaGithub } from 'react-icons/fa';
import logo from './../assets/icons/Gunpla_Logo.svg';

const HeaderComponent = () => {
    return (
        <div>
            <nav>
                <ul>
                    <div>
                        <img src={ logo } alt="logo" />
                    </div>
                    <div>
                        { /* Botón Hamburguesa (tamaño celular) */}
                        <button>
                            <svg>
                                <path></path>
                            </svg>
                        </button>
                    </div>
                    <li>Inicio</li>
                    <li>Catálogo</li>
                    <li>Disponibles</li>
                    <li>Próximos Ingresos</li>
                    <li>Contacto</li>
                    <li>Soporte</li>
                    <div>
                        <a href="https://github.com/brutalkingran"> <FaGithub size={40} color="#333" aria-label="GitHub logo" /> </a>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default HeaderComponent