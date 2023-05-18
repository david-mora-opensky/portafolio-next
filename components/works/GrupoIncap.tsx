import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"

const GrupoIncap = () => {
  return (
    <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{delay: 0.1}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont ">
           Analista de Mesa de Ayuda<span className="text-textBlue tracking-wide">@Grupo Empresarial INCAP</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">Nov 2022 - May 2023</p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Líder de los técnicos TI de la mesa de ayuda del Grupo INCAP encargado de dar solución a las distintias solicitudes del personal academico, administrativo y estudiantil.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Documentación de cada ticket respuesta en los tiempos establecidos.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Realización de backups de información en la nube, preparación de equipos de computo para el personal de la empresa y arreglo del cableado de red de la infraestructura.
            </li>
        </ul>
    </motion.div>
  )
}

export default GrupoIncap