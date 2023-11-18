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
          <p className="text-sm">Hello , I'm</p>
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
            <p className="about-text">Some of my greatest successes include developing the frontend of applications with national impact, applications with high availability on 2 continents, and achieving certification as an AWS Cloud Practitioner.</p>
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

        <div className="skills">
          <h1 className="subtitle">Experiencia</h1>
          <div className="skills-list">
            <div className="skills-card">
              <h3 className="text-lg text-orangeNormal text-center">Web Developer</h3>
              <div className="skills-card--content">
                <SkillCard title="HTML5" children={<HTMLIcon />} />
                <SkillCard title="CSS" children={<CSSIcon/>} />
                <SkillCard title="Javascript" children={<JSIcon/>} />
                <SkillCard title="React" children={<BiLogoReact/>} />
                <SkillCard title="PHP" children={<BiLogoPhp/>} />
                <SkillCard title="MySQL" children={<SiMysql/>} />
                <SkillCard title="NextJS" children={<SiNextdotjs/>} />
                <SkillCard title="Laravel" children={<SiLaravel/>} />
              </div>
            </div>
            <div className="skills-card">
              <h3 className="text-lg text-orangeNormal text-center">Cloud Engineer</h3>
              <div className="skills-card--content">
                <SkillCard title="AWS" children={ <BiLogoAws /> } />
                <SkillCard title="Lambda Functions" children={
                  <div className="w-4 h-4">
                    <img src="https://www.fintail.me/icons/AWS-Lambda.png" width={16} height={16} alt="lambda" />
                  </div>
                } />
                <SkillCard title="AWS RDS" children={
                  <div  className="w-4 h-4">
                    <img src="https://www.fintail.me/icons/Amazon-RDS.png" width={16} height={16} alt="AWS RDS" />
                  </div>
                } />
              </div>
            </div>
          </div>
        </div>

        <div className="projects">
          <h1 className="subtitle">Mis Proyectos</h1>
          <div className="projects-list">
            <ProjectCard
              content="lorem ipsum"
              srcImage="https://d1l9597hydyb9x.cloudfront.net/cms_masuno/images/project/12/cover/12/12.png"
              title="Ecommerce San Fernando"
              url="http://benyaroot.com"
            />
            <ProjectCard
              content="lorem ipsum"
              srcImage="https://d1l9597hydyb9x.cloudfront.net/cms_masuno/images/project/12/cover/12/12.png"
              title="Planificar gastos"
              url="http://benyaroot.com"
            />
            <ProjectCard
              content="lorem ipsum"
              srcImage="https://screenshot-proxy.netlify.app/f_avif,w_336/https://d33wubrfki0l68.cloudfront.net/62484c52eba34b77a562524d/screenshot_2022-04-02-13-15-14-0000.png"
              title="CMS Admin"
              url="http://benyaroot.com"
            />
          </div>
          <Link href={"/projects"} className="text-orangeNormal">Ver más</Link>
        </div>

        <div className="services">
          <h1 className="subtitle">Servicios</h1>
          <div className="services-list">
            <ServiceCard
            list={['Web designer','Integration API', 'Deploy web en cloud']}
            title={'DESARROLLO WEB'}
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
        <div className="contact">
          <h1 className="subtitle">Contactame</h1>
          <div className="contact-container">
            <div className="contact-options">
              <article className="contact-card">
                <EmailIcon/>
                <h4>Email</h4>
                <h5>b.ponce.chanca.21@gmail.com</h5>
                <a href="b.ponce.chanca.21@gmail.com" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
              </article>
              <article className="contact-card">
                <LinkedinIcon/>
                <h4>LinkedIn</h4>
                <h5>b-ponce-chanca</h5>
                <a href="https://www.linkedin.com/in/b-ponce-chanca/" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
              </article>
              <article className="contact-card">
                <WhatsappIcon/>
                <h4>Whatsapp</h4>
                <h5>+51 906383659</h5>
                <a href="https://api.whatsapp.com/send?phone+51906383659" rel="noreferrer" target="_blank" className="text-orangeNormal hover:text-orangeLight">Send a message</a>
              </article>
            </div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
