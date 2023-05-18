import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"

const Soldicom = () => {
  return (
    <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay: 0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont ">
            Asesor de tecnología y Desarrollador web <span className="text-textBlue tracking-wide">@Fendipetroleo - Mesa de Tecnologia SOLDICOM</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Nov 2022 - May 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Encargado de desarrollar los proyectos de la mesa de ayuda de SOLDICOM por medio de tecnologías como JavaScript, Next JS, ReactJs, CSS
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Administración del sitio web alojado en WordPress, actualización de contenidos y arreglo de bugs.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Brindar asesorías en infraestructura, manejo de programas y tecnologia a las estaciones de servicio de Bogotá y Cundinamarca
            </li>
        </ul>
    </motion.div>
  )
}

export default Soldicom