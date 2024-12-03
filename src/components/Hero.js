import HeroImg from '../assets/hero.png';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineLaptop } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a full stack Web developer',
        social: {
            github: 'https://github.com/suriya444',
            leetcode: 'https://leetcode.com/u/suriya123/',
            linkedin: 'https://in.linkedin.com/in/suriya-prakash-'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-black'>Suriyaprakash A</span> 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                <a href={config.social.leetcode} className='pr-5 hover:text-white'><AiOutlineLaptop size={40}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
