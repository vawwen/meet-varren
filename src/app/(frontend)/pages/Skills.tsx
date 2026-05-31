import SkillsGrid from '@/components/SkillsGrid'
import '../styles.css'
import ScrollReveal from '@/components/ScrollReveal'

export default function Skills() {
  return (
    <ScrollReveal>
      <section className="relative w-full">
        <div className="mx-auto max-w-[1640px] px-6 md:px-12 lg:px-20 py-12 xl:py-[120px]">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-center">
            {/* Left Column */}
            <div className="hidden xl:block w-full xl:flex-[640_1_0] xl:max-w-[640px]">
              <SkillsGrid />
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col gap-4 items-start min-w-0 w-full xl:flex-[760_1_0]">
              <h1 className="text-2xl xl:text-3xl font-semibold text-base-content md:max-w-[760px] leading-snug text-left">
                What I Do: Building Systems with Purpose
              </h1>

              {/* Mobile Photo Container (Visible on mobile, hidden on desktop layout) */}
              <div className="w-full xl:hidden my-4">
                <SkillsGrid />
              </div>

              {/* Description Bio Paragraphs */}
              <div className="text-base md:text-lg xl:text-xl text-base-content/80 md:max-w-[760px] space-y-5 md:space-y-6 mt-2 text-left">
                <p>
                  My current role as a Full-Stack Developer at Deloitte combines the discipline of
                  enterprise software engineering with the agility of modern web development. I
                  focus heavily on creating seamless user experiences backed by resilient APIs,
                  specifically tailored for intricate corporate KYC processes.
                </p>
                <p>
                  I also explore the intersection of data and AI, utilizing Python and LangChain
                  concepts to deploy production-ready RAG search platforms. While the boxes below
                  represent the languages, frameworks, and cloud platforms I am most confident
                  wielding, my capabilities extend far beyond a single list.
                </p>
                <p>
                  My Computer Science degree and experience in high-stakes consulting have taught me
                  how to learn rapidly and think systematically, allowing me to bring a broad,
                  analytical perspective to any development team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
