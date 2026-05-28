import ContactButtonGroup from '@/components/ContactButtonGroup'
import '../styles.css'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1640px] px-6 md:px-12 lg:px-20 pt-12 xl:pt-[120px] pb-12 xl:pb-[160px] revealed">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-8">
        <div className="flex-1 min-w-0 max-w-[760px] flex flex-col gap-4 items-start">
          <h2 className="text-[20px] xl:text-[24px] leading-8 xl:leading-9 font-semibold text-[var(--color-text)]">
            Let's Talk!
          </h2>
          <p className="text-[16px] md:text-[17px] xl:text-[20px] leading-[28px] xl:leading-9 text-[var(--color-text-muted)]">
            Whether it’s about work, basketball, glazing LeBron, or just want to be friends, feel
            free to drop me a line anytime.
          </p>
          <ContactButtonGroup />
        </div>
        <div className="flex flex-col items-start md:items-end text-[16px] text-[var(--color-text-muted)]">
          <p className="whitespace-nowrap">© 2026 Hong Kong</p>
        </div>
      </div>
    </footer>
  )
}
