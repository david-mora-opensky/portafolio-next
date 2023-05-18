import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"

const Opensky2 = () => {
  return (
    <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay: 0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont ">
            Frontend Jr<span className="text-textBlue tracking-wide">@Opensky Information SAS</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Nov 2022 - May 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Desarrollo de aplicaciones web, sitios web y landign de la parte del cliente con tecnologías como JavaScript, HTML y CSS
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Despligue de sitios web y ecommerce con WordPress
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Administración y personalización de Moodle para la implementación de cursos virtuales y UI personalizado.
            </li>
        </ul>
    </motion.div>
  )
}

export default Opensky2