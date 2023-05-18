import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"

const Libertadores = () => {
  return (
    <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay: 0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont ">
            Analista de tecnología y Lider HelpDesk <span className="text-textBlue tracking-wide">@Fundación Universitaria Los Libertadores</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Nov 2022 - May 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Líder de la mesa de ayuda para el soporte técnico de la universidad los libertadores, asignando tickets al equipo de técnicos.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Analista de la mesa de ayuda generando reportes para poder medir resultados y llevar un constante feedback.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
               Mantenimiento preventivo y correctivo de los equipos de computo de la Fundación Universitaria los Libertadores
            </li>
        </ul>
    </motion.div>
  )
}

export default Libertadores