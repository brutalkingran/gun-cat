import { motion } from "framer-motion";
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

const ScrollModelos = () => {
    const isMobile = window.innerWidth < 768; 

    return (
        <>
            <motion.div
                className="absolute top-0 left-0 flex items-center gap-8 opacity-10 z-0 pointer-events-none"
                animate={{ x: ['0%', '-374%'] }}
                transition={{ duration: isMobile ? 30 : 60, ease: 'linear', repeat: Infinity }}
            >
                {[...renders, ...renders].map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`render ${i}`}
                    className="flex-shrink-0 h-auto w-auto max-h-[90vh] object-contain select-none"
                    draggable={false}
                />
                ))}
            </motion.div>
        </>
    )
}

export default ScrollModelos