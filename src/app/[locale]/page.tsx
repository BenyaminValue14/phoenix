
import AboutCards from '../components/AboutCards'
import ExpIcon from '../components/svg/ExpIcon'
import ProjectIcon from '../components/svg/ProjectIcon'

import ServiceCard from '../components/ServiceCard'
import Testimonials from '../components/sections/Testimonials'

import LastProjects from '../components/sections/LastProjects'
import ContactMe from '../components/sections/ContactMe'
import SoftSkills from '../components/sections/SoftSkills'

import {useTranslations} from 'next-intl';

export default function Home() {
  
  const t = useTranslations('Index');
  const a = useTranslations('About');
  return (
    <>
    <main className="home-container">
    
      <div className="container home">
        <div className="banner-container">
          <div className="blur-container">

          </div>
          <div className="image-container">
            <img src={"https://res.cloudinary.com/dxefwzl0v/image/upload/v1700123491/me/phenix_ql6qwo.jpg"} alt="image phoenix" />
          </div>
        </div>

        <div className="main">
          <p className="text-sm text-gray2 text-center">{t('title')}</p>
          <h1 className="name text-sm font-semibold text-center"> <span className="clip font-poppins text-2xl">Benyaroot</span></h1>
          <p className="text-lg text-gray2 text-center">{t('subtitle')}</p>
        </div>
        <div className="directions">
          <button className="button active">{t('projects')}✨</button>
          <button className="button">{t('who_am_i')}</button>
          <button className="button">{t('services')}</button>
        </div>

        <div className="about">
          <div className="about-info">
            <h2 className="subtitle">{a('title')}</h2>
            {
              a('description').split('\n').map((text, index) => {
                return <p key={`about-text-${index}`} className="about-text">{text}</p>
              })
            }
            <div className="about-cards">
              <AboutCards content={"3+ años" + t('years')} title={t('experience')}>
                <ExpIcon />
              </AboutCards>
              <AboutCards content="12+ completados" title={a('projects')}>
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
            title={'Data Analytics'}
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
