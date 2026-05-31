import ContactButtonGroup from '@/components/ContactButtonGroup'
import '../styles.css'
import ScrollReveal from '@/components/ScrollReveal'

export default function Footer() {
  return (
    <ScrollReveal>
      <footer className="mx-auto w-full max-w-[1640px] px-6 md:px-12 lg:px-20 pt-12 xl:pt-[120px] pb-12 xl:pb-[160px] revealed">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-8">
          <div className="flex-1 min-w-0 max-w-[760px] flex flex-col gap-4 items-start">
            <h2 className="text-2xl xl:text-3xl font-semibold text-base-content leading-snug text-left">
              Let's Talk!
            </h2>
            <p className="text-base md:text-lg xl:text-xl text-base-content/80 space-y-5 md:space-y-6 mt-2 text-left">
              Whether it’s about work, basketball, glazing LeBron, or just want to be friends, feel
              free to drop me a line anytime.
            </p>
            <ContactButtonGroup />
          </div>
          <div className="flex flex-col items-start md:items-end text-base md:text-lg text-base-content/80">
            <p className="whitespace-nowrap">© 2026 Hong Kong</p>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  )
}
