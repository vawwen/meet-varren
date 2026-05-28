'use client'

import { useState } from 'react'

export default function ContactButtonGroup() {
  const [copied, setCopied] = useState(false)
  const email = 'varrenhansen03@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="flex flex-wrap gap-4 pt-8 xl:pt-10">
      <div className="lg:tooltip" data-tip={copied ? 'Copied!' : email}>
        <button
          onClick={handleCopy}
          type="button"
          className="btn btn-outline relative inline-flex items-center gap-2 pl-4 pr-3 py-2 rounded-[24px] text-[14px] md:text-[16px] font-semibold transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Copy email address"
        >
          Email
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
          </svg>
        </button>
      </div>
      <div className="lg:tooltip" data-tip="www.linkedin.com/in/varrenhansen">
        <a
          href="https://www.linkedin.com/in/varrenhansen"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline relative inline-flex items-center gap-2 pl-4 pr-3 py-2 rounded-[24px] text-[14px] md:text-[16px] font-semibold transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Open LinkedIn profile"
        >
          LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
      </div>
      <div className="lg:tooltip" data-tip="View My Resume">
        <a
          href="/Hansen, Varren - Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline relative inline-flex items-center gap-2 pl-4 pr-3 py-2 rounded-[24px] text-[14px] md:text-[16px] font-semibold transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Open Resume PDF"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383" />
            <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
