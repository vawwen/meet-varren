import ScrollReveal from '@/components/ScrollReveal'
import '../styles.css'
import InvestmentChart from '@/components/InvestmentChart'

export default function Investment() {
  return (
    <ScrollReveal>
      <section className="relative w-full">
        <div className="mx-auto max-w-[1640px] px-6 md:px-12 lg:px-20 py-12 xl:py-[120px]">
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-center">
            {/* Left Column: Content */}
            <div className="flex flex-col gap-4 items-start min-w-0 w-full xl:flex-[760_1_0]">
              <h1 className="text-2xl xl:text-3xl font-semibold text-base-content md:max-w-[760px] leading-snug text-left">
                Building Wealth, Future-First
              </h1>

              {/* Mobile Photo Container (Visible on mobile, hidden on desktop layout) */}
              <div className="w-full xl:hidden my-4">
                <div className="w-full h-full object-cover">
                  <InvestmentChart />
                </div>
              </div>

              {/* Description Bio Paragraphs */}
              <div className="text-base md:text-lg xl:text-xl text-base-content/80 md:max-w-[760px] space-y-5 md:space-y-6 mt-2 text-left">
                <p>
                  Outside of the terminal, I’m focused on personal finance and market analysis. I
                  invest heavily in ETFs, blockchain technology, and forward-looking assets,
                  treating my portfolio as a system to be optimized. Staying on top of market trends
                  is my favorite intellectual challenge outside of tech, ensuring my capital is
                  always working efficiently.
                </p>
                <p>
                  Making smart moves requires staying informed. I stay deeply connected to the
                  financial space by tracking news, studying analyst reports, and engaging with the
                  investor community to back every financial decision with solid research.
                </p>
                <p>
                  Please feel free to hover the chart to see the breakdown of my current investment
                  portfolio.
                </p>
              </div>
            </div>

            {/* Right Column: Photo */}
            <div className="hidden xl:block w-full xl:flex-[640_1_0] xl:max-w-[640px]">
              <div className="w-full h-full object-cover">
                <InvestmentChart />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
