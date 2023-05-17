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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas dolorem praesentium suscipit maiores a odit quidem nostrum perspiciatis in qui illo temporibus totam quae, accusantium impedit harum ea? Similique?
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas dolorem praesentium suscipit maiores a odit quidem nostrum perspiciatis in qui illo temporibus totam quae, accusantium impedit harum ea? Similique?
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textBlue mt-1">
                    <TiArrowForward />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas dolorem praesentium suscipit maiores a odit quidem nostrum perspiciatis in qui illo temporibus totam quae, accusantium impedit harum ea? Similique?
            </li>
        </ul>
    </motion.div>
  )
}

export default Opensky