import { motion } from "framer-motion";
import logo from './../assets/icons/Gunpla_Logo.svg';
import render_0 from './../assets/img/render_0.webp';
import render_1 from './../assets/img/render_1.webp';
import render_2 from './../assets/img/render_2.webp';
import render_3 from './../assets/img/render_3.webp';
import render_4 from './../assets/img/render_4.webp';
import render_5 from './../assets/img/render_5.webp';
import render_6 from './../assets/img/render_6.webp';
import render_7 from './../assets/img/render_7.webp';

const renders = [
    render_0, render_1, render_2, render_3,
    render_4, render_5, render_6, render_7
];

const MainComponent = () => {
    return (
        <div>
            {/* Carrusel con animación horizontal */}
            <div className="relative overflow-hidden min-h-screen">
                {/* Fondo animado */}
                <motion.div
                    className="absolute top-0 left-0 flex gap-8 opacity-10 z-0 pointer-events-none"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ duration: 40, ease: 'linear', repeat: Infinity }}>
                    {[...renders, ...renders].map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`render ${i}`}
                        className="flex-shrink-0 w-96"
                    />
                    ))}
                </motion.div>

                {/* Contenido principal */}
                <main className="relative z-10 p-8 text-black">
                    <div className="mb-6">
                        <img src={logo} alt="logo gunpla" className="w-3/4" />
                    </div>
                    <div className="mb-6 max-w-3xl">
                        <p className="text-lg leading-relaxed">
                            Sumérgete en el apasionante mundo del Gunpla, donde cada kit es una obra maestra de ingeniería y creatividad...
                        </p>
                    </div>
                    <div>
                        <a className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md">
                            Descubre nuestro catálogo
                        </a>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainComponent;
