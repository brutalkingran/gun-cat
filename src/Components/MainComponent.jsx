import logo from './../assets/icons/Gunpla_Logo.svg';
import ScrollModelos from './ScrollModelos';

const MainComponent = () => {
    return (
        <div className='bg-palette-200'>
            <div className="relative overflow-hidden min-h-screen">
                {/* Fondo animado */}
                <ScrollModelos/>

                {/* Contenido principal */}
                <main className="relative z-10 p-8 text-black h-screen bg-cover bg-center flex flex-col justify-center items-center">
                    <div className="mb-6 flex flex-col items-center">
                        <img src={logo} alt="logo gunpla" className="w-3/4" />
                    </div>

                    <div className="mb-6 max-w-3xl">
                        <p className="text-lg leading-relaxed text-center">
                            Sumérgete en el apasionante mundo del Gunpla, donde cada kit es una obra maestra de ingeniería y creatividad...
                        </p>
                    </div>
                    
                    <a href="#" className="bg-palette-400 hover:bg-palette-300 text-palette-200 text-lg px-8 py-4 rounded-md cursor-pointer shadow-lg transition duration-300">
                        Descubre nuestro catálogo
                    </a>

                </main>
            </div>
        </div>
    );
};

export default MainComponent;
