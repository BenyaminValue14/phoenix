import React from 'react'
import SkillCard from '../SkillCard'
import { SiLaravel, SiMysql, SiNextdotjs } from 'react-icons/si'
import { BiLogoAws, BiLogoPhp, BiLogoReact } from 'react-icons/bi'
import JSIcon from '../svg/JSIcon'
import CSSIcon from '../svg/CSSIcon'
import HTMLIcon from '../svg/HTMLIcon'

const SoftSkills = () => {
    return (
        <div className="skills">
            <h1 className="subtitle">Soft Skills</h1>
            <div className="skills-list">
                <div className="skills-card">
                    <h3 className="text-lg text-orangeNormal text-center mb-3">Web Developer</h3>
                    <div className="skills-card--content">
                        <SkillCard title="HTML5" children={<HTMLIcon />} />
                        <SkillCard title="CSS" children={<CSSIcon />} />
                        <SkillCard title="Javascript" children={<JSIcon />} />
                        <SkillCard title="React" children={<BiLogoReact />} />
                        <SkillCard title="PHP" children={<BiLogoPhp />} />
                        <SkillCard title="MySQL" children={<SiMysql />} />
                        <SkillCard title="NextJS" children={<SiNextdotjs />} />
                        <SkillCard title="Laravel" children={<SiLaravel />} />
                    </div>
                </div>
                <div className="skills-card">
                    <h3 className="text-lg text-orangeNormal text-center mb-3">Cloud Engineer</h3>
                    <div className="skills-card--content">
                        <SkillCard title="AWS" children={<BiLogoAws />} />
                        <SkillCard title="Lambda Functions" children={
                            <div className="w-4 h-4">
                                <img src="https://www.fintail.me/icons/AWS-Lambda.png" width={16} height={16} alt="lambda" />
                            </div>
                        } />
                        <SkillCard title="AWS RDS" children={
                            <div className="w-4 h-4">
                                <img src="https://www.fintail.me/icons/Amazon-RDS.png" width={16} height={16} alt="AWS RDS" />
                            </div>
                        } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoftSkills