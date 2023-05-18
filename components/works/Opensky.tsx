import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"

const Opensky = () => {
  return (
    <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay: 0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont ">
            Desarrollador web <span className="text-textBlue tracking-wide">@Opensky Information SAS</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Nov 2022 - May 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Desarrollo y mantenimiento de landing page, aplicaciones y ecosistemas web utilizando tecnologías frontend como JavaScript, SCSS, Next JS.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Implementación de backend como Node JS, Express JS funcionando con bases de datos relacionales MySQL y no relaciones como Mongo DB o Firebase.                 
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Implementación de WordPress en la elaboración de sitios web y ecommerce utilizando plugins como Elementor, Contact Form, Popup Maker, WooCommerce, Script N Styles entre otros, agregando código JS y CSS propio para una personalización más específica. 
            </li>
            <li className="text-base flex gap-2 text-textDark" >
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
            Administrador distintos sistemas de gestión de aprendizaje en línea (LMS) como Moodle, Blackboard y Canvas lo que me ha permitido adquirir experiencia en la gestión, configuración, personalización y administración de estas plataformas.
            </li>
        </ul>
    </motion.div>
  )
}

export default Opensky