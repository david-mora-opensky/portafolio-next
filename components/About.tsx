import React from 'react'
import SectionTitle from './SectionTitle'
import {AiFillThunderbolt} from "react-icons/ai";
import Image from 'next/image';
import { profileImg } from '@/public/assets';

const About = () => {
  return (
    <section
        id='about'
        className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
        >
        <SectionTitle title="Sobre mi" titleNo="01" />
        <div className='flex flex-col lgl:flex-row gap-16'>
            <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4'>
                <p>
                    Hola, mi nombre es David, y disfruto creando Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi libero dolore modi repudiandae molestias earum, labore nihil totam explicabo officiis! Consequatur, soluta? Possimus natus, asperiores odio autem expedita esse fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos deleniti consectetur itaque ab fugiat maiores ratione veniam ex nemo fuga illum ea vero, tenetur sint consequatur ducimus minima placeat. 
                    <span className='text-textGreen'> a huge corporation and a student desing studio</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. autem veritatis voluptate dignissimos molestias quam exercitationem alias repudiandae incidunt praesentium eius. 
                <span className='text-textGreen'>Veniam cupiditate aperiam impedit</span>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione porro quae eligendi, asperiores dolore, blanditiis quaerat esse voluptas saepe itaque assumenda obcaecati error temporibus officiis, veniam numquam repellat libero!</p>
                <p>A continuación se encuentran las tecnologías que más he trabajado: </p>
                <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6'>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>JavaScript (ES6+)
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>TypeScript (ES6+)
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>React
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Next JS
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>SCSS 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Node.js
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Express.js 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Tailwind.css 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Mongo DB 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>MySQL 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>PHP 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>WordPress 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Moodle 
                    </li>
                    <li className='flex items-center gap-2'>
                        <span className='text-textGreen'><AiFillThunderbolt /></span>Firebase 
                    </li>
                </ul>
            </div>
            <div className='w-full lgl:w-1/3 h-80 relative group'>
                <div className='absolute w-full h-80 -left-6 -top-6 rounded-lg'>
                    <div className='w-full h-full relative z-20 flex pl-6 lgl:pl-0'>
                        <Image
                            className='rounded-lg h-full object-cover' 
                            src={profileImg}
                            alt="profileImg"
                        />
                        <div className='hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300'></div>
                       
                    </div>
                </div>
                <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300'></div>
            </div>
        </div>
    </section>
  )
}

export default About