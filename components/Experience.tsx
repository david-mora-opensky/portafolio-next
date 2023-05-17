import React, {useState} from 'react'
import SectionTitle from './SectionTitle'
import Opensky from './works/Opensky'
import Soldicom from './works/Soldicom'
import Opensky2 from './works/Opensky2'
import GrupoIncap from './works/GrupoIncap'
import Libertadores from './works/Libertadores'

const Experience = () => {
  const [workOpensky, setWorkOpensky] = useState(true);
  const [workSoldicom, setWorkSoldicom] = useState(false);
  const [workOpensky2, setWorkOpensky2] = useState(false);
  const [workGrupoIncap, setWorkGrupoIncap] = useState(false);
  const [workLibertadores, setWorkLibertadores] = useState(false);

  const handleOpensky = () => {
    setWorkOpensky(true);
    setWorkSoldicom(false);
    setWorkOpensky2(false);
    setWorkGrupoIncap(false);
    setWorkLibertadores(false);
  }
  const handleSoldicom = () => {
    setWorkOpensky(false);
    setWorkSoldicom(true);
    setWorkOpensky2(false);
    setWorkGrupoIncap(false);
    setWorkLibertadores(false);
  }
  const handleOpensky2 = () => {
    setWorkOpensky(false);
    setWorkSoldicom(false);
    setWorkOpensky2(true);
    setWorkGrupoIncap(false);
    setWorkLibertadores(false);
  }
  const handleGrupoIncap = () => {
    setWorkOpensky(false);
    setWorkSoldicom(false);
    setWorkOpensky2(false);
    setWorkGrupoIncap(true);
    setWorkLibertadores(false);
  }
  const handleLibertadores = () => {
    setWorkOpensky(false);
    setWorkSoldicom(false);
    setWorkOpensky2(false);
    setWorkGrupoIncap(false);
    setWorkLibertadores(true);
  }

  return (
    <section
        id="experience"
        className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'
        >
        <SectionTitle title="Donde he trabajado" titleNo="02" />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
          <ul className='md:w-32 flex flex-col'>
            <li onClick={handleOpensky} className={`${workOpensky ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
              OpenSky Information
            </li>
            <li onClick={handleSoldicom} className={`${workSoldicom ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
              Fendipetroleo - Soldicom Mesa de Tecnología
            </li>
            <li onClick={handleOpensky2} className={`${workOpensky2 ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
              OpenSky Information
            </li>
            <li onClick={handleGrupoIncap} className={`${workGrupoIncap ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
              Grupo INCAP
            </li>
            <li onClick={handleLibertadores} className={`${workLibertadores ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark" } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
              Fundación Universitaria Los Libertadores
            </li>
          </ul>
          {workOpensky && <Opensky />}
          {workSoldicom && <Soldicom />} 
          {workOpensky2 && <Opensky2 />} 
          {workGrupoIncap && <GrupoIncap />} 
          {workLibertadores && <Libertadores />} 
        </div>

    </section>
  )
}

export default Experience