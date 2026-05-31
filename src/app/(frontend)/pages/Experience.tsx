import ExperienceCard from '@/components/ExperienceCard'
import '../styles.css'

const experienceData = [
  {
    companyName: 'Deloitte Advisory',
    position: 'Analyst – Forensics & Financial Crime',
    timeline: 'September 2025 – Present',
    description: (
      <ul className="list-disc pl-4 space-y-1.5">
        <li>
          Leading the development of two web-based solutions addressing KYC operational pain-points
          for a global financial institution.
        </li>
        <li>
          Conducting requirements analysis and translating business specifications into scalable
          technical solutions for diverse stakeholders.
        </li>
        <li>
          Architected reusable React components adhering to enterprise UI/UX standards, ensuring
          seamless integration for complex workflows.
        </li>
        <li>
          Integrated PowerBI dashboards into case management platforms using iframes and led a
          backend team to develop APIs writing to SharePoint.
        </li>
        <li>
          Serving as lead UI developer, triaging bugs and resolving issues across 5 production
          environments to support end-users.
        </li>
        <li>
          Strategic code refactoring and bundle optimization to ensure scalability for
          enterprise-scale operations.
        </li>
      </ul>
    ),
    logoSrc: '/DTT_Logo.png',
  },
  {
    companyName: 'Deloitte Advisory',
    position: 'Co-op Intern – Forensics & Financial Crime',
    timeline: 'June 2024 – January 2025',
    description: (
      <ul className="list-disc pl-4 space-y-1.5">
        <li>
          Architected a news screening platform featuring RAG-based semantic search and real-time
          model evaluation visualization.
        </li>
        <li>
          Optimized SQL queries and database schemas, maintaining support for 100 concurrent users
          during peak operations validated via AWS Lambda.
        </li>
        <li>
          Established an automated test suite achieving 90% code coverage, enabling deployments with
          zero downtime.
        </li>
      </ul>
    ),
    logoSrc: '/DTT_Logo.png',
  },
  {
    companyName: 'DocPro Limited',
    position: 'Front-end Developer (Intern)',
    timeline: 'June 2023 – August 2023',
    description: (
      <ul className="list-disc pl-4 space-y-1.5">
        <li>
          Developed the front-end interface for an AI-powered chat feature using React and
          JavaScript.
        </li>
        <li>
          Implemented prompt engineering techniques to enhance the accuracy and performance of the
          company’s AI models.
        </li>
        <li>
          Delivered high-quality results within a Scrum Agile environment through iterative
          development.
        </li>
      </ul>
    ),
    logoSrc: '/DocPro_Logo.jpg',
  },
]

export default function Experience() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1640px] px-6 md:px-12 lg:px-20 py-12 xl:py-[120px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-center">
          <div className="flex flex-col gap-4 items-start min-w-0 w-full xl:flex-[760_1_0]">
            <h1 className="text-2xl xl:text-3xl font-semibold text-base-content leading-snug text-left">
              My Journey: From Classrooms to Codebases
            </h1>

            <div className="text-base md:text-lg xl:text-xl text-base-content/80 space-y-5 md:space-y-6 mt-2 text-left">
              <p>
                After cutting my teeth as a software engineering intern across different teams, I
                joined Deloitte as an Analyst. My role centers around full-stack web development,
                where I spend most of my time optimizing the frontend to deliver polished,
                high-performance user experiences.
              </p>
              <p>
                Take a look at the cards below to see my timeline, my core responsibilities, and the
                stack I used at each step of my journey.
              </p>
            </div>

            <div className="w-full flex flex-col gap-6 mt-6">
              {experienceData.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  companyName={exp.companyName}
                  position={exp.position}
                  timeline={exp.timeline}
                  description={exp.description}
                  logoSrc={exp.logoSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
