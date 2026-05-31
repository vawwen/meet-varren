import { FaDatabase, FaFigma, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaVuejs } from 'react-icons/fa'
import { RiNextjsLine } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io5'
import { FaJava } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { DiPostgresql } from 'react-icons/di'
import { FaAws } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { SiLangchain } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa6'
import { PiMicrosoftExcelLogo } from 'react-icons/pi'

export default function SkillsGrid() {
  return (
    <div className="w-full h-full flex flex-wrap gap-3 justify-center items-center content-center p-4">
      {[
        { name: 'React', icon: <FaReact /> },
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Vue.js', icon: <FaVuejs /> },
        { name: 'NextJS', icon: <RiNextjsLine /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <DiCss3 /> },
        { name: 'JavaScript', icon: <IoLogoJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Figma', icon: <FaFigma /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C++', icon: <SiCplusplus /> },
        { name: 'SQL', icon: <FaDatabase /> },
        { name: 'PostgreSQL', icon: <DiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'LangChain', icon: <SiLangchain /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Excel VBA', icon: <PiMicrosoftExcelLogo /> },
        { name: 'Git', icon: <FaGitAlt /> },
      ].map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-[104px] h-[104px] rounded-2xl border border-base-content/10 bg-base-100/40 backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-base-100 hover:-translate-y-1 hover:shadow-lg group"
        >
          <span className="text-2xl mb-1.5 transition-transform duration-300 group-hover:scale-110">
            {skill.icon}
          </span>
          <span className="text-[12px] font-medium text-base-content/80 group-hover:text-primary text-center px-1 tracking-tight truncate w-full">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  )
}
