import '../styles.css'

export default function Hobby() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[1640px] px-6 md:px-12 lg:px-20 py-12 xl:py-[120px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[80px] items-center">
          {/* Left Column: Highlights */}
          <div className="hidden xl:block w-full xl:flex-[640_1_0] xl:max-w-[640px]">
            <div className="relative w-full aspect-video max-w-[640px] overflow-hidden rounded-3xl shadow-xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover align-top"
                aria-hidden="true"
              >
                <source src="/BBall_Highlights_TKO.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col gap-4 items-start min-w-0 w-full xl:flex-[760_1_0]">
            <h1 className="text-2xl xl:text-3xl font-semibold text-base-content md:max-w-[760px] leading-snug text-left">
              The Daily Grind & The Fast Break
            </h1>

            {/* Mobile Photo Container (Visible on mobile, hidden on desktop layout) */}
            <div className="w-full xl:hidden my-4">
              <div className="relative w-full aspect-video max-w-[640px] overflow-hidden rounded-3xl shadow-lg">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover align-top"
                  aria-hidden="true"
                >
                  <source src="/BBall_Highlights_TKO.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Description Bio Paragraphs */}
            <div className="text-base md:text-lg xl:text-xl text-base-content/80 md:max-w-[760px] space-y-5 md:space-y-6 mt-2 text-left">
              <p>
                Outside of tech and investing, basketball is my go-to outlet. I fell in love with
                the sport back in 2013 during LeBron James’ iconic run in Miami, and I’ve been a
                massive fan of his ever since.
              </p>
              <p>
                Today, playing pickup games around Hong Kong is how I keep things fun, healthy, and
                social. I’m always down to share the court, whether it's sharing the ball with
                long-time friends or running a game with strangers.
              </p>
              <p>Take a look at the highlight reel to see some of my favorite plays in action!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
