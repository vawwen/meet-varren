import ContactButtonGroup from '@/components/ContactButtonGroup'
import '../styles.css'

export default function Home() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1640px] px-6 md:px-12 lg:px-20 py-12 xl:py-[120px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col gap-4 items-start min-w-0 w-full xl:flex-[760_1_0]">
            <h1 className="text-2xl xl:text-3xl font-semibold text-base-content md:max-w-[760px] leading-snug text-left">
              Frontend developer turned enterprise engineer, building high-throughput web apps and
              AI systems
            </h1>

            {/* Mobile Video Container (Visible on mobile, hidden on desktop layout) */}
            <div className="w-full xl:hidden my-4">
              <div className="relative w-full aspect-video max-w-[640px] overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="/Home_Dark.jpeg"
                  alt="Light Theme Logo"
                  className="absolute inset-0 hidden dark:block w-full h-full object-cover"
                />
                <img
                  src="/Home_Light.jpeg"
                  alt="Dark Theme Logo"
                  className="absolute inset-0 block dark:hidden w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description Bio Paragraphs */}
            <div className="text-base md:text-lg xl:text-xl text-base-content/80 md:max-w-[760px] space-y-5 md:space-y-6 mt-2 text-left">
              <p>
                Hi, I’m Varren, a technical problem solver experienced in shipping software for
                global financial institutions and legal tech. I build clean interfaces, design
                robust APIs, and maintain production codebases where zero-downtime scalability is
                the baseline requirement.
              </p>
              <p>
                I work fast across modern frameworks like NextJS and React Native, ensuring that
                complex operations under the hood feel completely effortless to the end user.
              </p>
              <p>
                In my free time, you may find me on one of Hong Kong's basketball courts, making
                matcha, or expanding my financial and technical knowledge.
              </p>
            </div>

            {/* Action Controls / Social Media Link Pill Array */}
            <ContactButtonGroup />
          </div>

          {/* Right Column: Desktop Layout Video Showcase Asset */}
          <div className="hidden xl:block w-full xl:flex-[640_1_0] xl:max-w-[640px]">
            <div className="relative w-full aspect-video max-w-[640px] overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/Home_Dark.jpeg"
                alt="Light Theme Logo"
                className="absolute inset-0 hidden dark:block w-full h-full object-cover"
              />
              <img
                src="/Home_Light.jpeg"
                alt="Dark Theme Logo"
                className="absolute inset-0 block dark:hidden w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
