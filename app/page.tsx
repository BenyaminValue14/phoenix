import Image from 'next/image'
import AboutCards from './components/AboutCards'
import ExpIcon from './components/svg/ExpIcon'
import ProjectIcon from './components/svg/ProjectIcon'
import SkillCard from './components/SkillCard'
import HTMLIcon from './components/svg/HTMLIcon'
import CSSIcon from './components/svg/CSSIcon'
import JSIcon from './components/svg/JSIcon'
import ProjectCard from './components/ProjectCard'
import Link from 'next/link'
import ServiceCard from './components/ServiceCard'
import Testimonials from './components/sections/Testimonials'
import WhatsappIcon from './components/svg/WhatsappIcon'
import {BiLogoAws, BiLogoPhp, BiLogoReact} from "react-icons/bi";
import {SiMysql,SiNextdotjs,SiLaravel} from "react-icons/si";
import ContactForm from './components/form/ContactForm'
import LinkedinIcon from './components/svg/LinkedinIcon'
import EmailIcon from './components/svg/EmailIcon'
import Header from './components/Header'
import LastProjects from './components/sections/LastProjects'
import ContactMe from './components/sections/ContactMe'
import SoftSkills from './components/sections/SoftSkills'


export default function Home() {
  return (
    <>
    <main className="home-container">
    <Header/>
      <div className="container home">
        <div className="banner-container">
          <div className="blur-container">

          </div>
          <div className="image-container">
            <img src={"https://res.cloudinary.com/dxefwzl0v/image/upload/v1700123491/me/phenix_ql6qwo.jpg"} alt="image phoenix" />
          </div>
        </div>

        <div className="main">
          <p className="text-sm text-gray2 text-center">Hello , I'm</p>
          <h1 className="name text-sm font-semibold text-center"> <span className="clip font-poppins text-2xl">Benyaroot</span></h1>
          <p className="text-lg text-gray2 text-center">Software Developer, Cloud Engineer</p>
        </div>
        <div className="directions">
          <button className="button active">Proyectos✨</button>
          <button className="button">¿Quién soy?</button>
          <button className="button">Servicios</button>
        </div>

        <div className="about">
          <div className="about-info">
            <h2 className="subtitle">Sobre mi</h2>
            <p className="about-text">I am a software developer certified in AWS and a business administrator. I specialize in programming the frontend of web applications and having a general overview of the behavior of my clients’ businesses.</p>
            <p className="about-text">My mission is to achieve the integration of cloud technology in companies from various sectors and design a good user experience for their clients.</p>
            <p className="about-text">Some of my greatest successes include developing the frontend of applications with national impact, applications with high availability on 2 continents (America and Europa), and achieving certification as an AWS Cloud Practitioner.</p>
            <div className="about-cards">
              <AboutCards content="3+ años" title="Experiencia">
                <ExpIcon />
              </AboutCards>
              <AboutCards content="12+ completados" title="Proyectos">
                <ProjectIcon />
              </AboutCards>
            </div>
          </div>
          <div className="about-image">
            <img src={"https://res.cloudinary.com/dxefwzl0v/image/upload/v1700123491/me/profile_zuwikq.jpg"} alt="image me" />
          </div>
        </div>

        <SoftSkills/>

        <LastProjects/>

        <div className="services">
          <h1 className="subtitle">Servicios</h1>
          <div className="services-list">
            <ServiceCard
            list={['Web designer','Integration API', 'Deploy web en cloud']}
            title={'Web Development'}
            />
            <ServiceCard
            list={['Migración de Base de datos','Implementar alta disponibilidad','Soluciones serverless']}
            title={'Cloud Engineer'}
            />
          </div>
        </div>

        <div className="section-container">
          <Testimonials/>
        </div>
        <ContactMe/>
      </div>
    </main>
    </>
  )
}
