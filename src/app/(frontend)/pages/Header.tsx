'use client'

import ThemeChanger from '@/components/ThemeChanger'
import RotatingSubtitle from '@/components/RotatingSubtitle'
import LiveTime from '@/components/LiveTime'

export default function Header() {
  return (
    <div className="header-page">
      <div className="header-start">
        <div className="avatar" style={{ height: 'fit-content' }}>
          <div className="w-8 rounded-full">
            <img
              src="/VH_Logo_White.png"
              alt="Light Theme Logo"
              className="absolute inset-0 hidden dark:block"
            />
            <img
              src="/VH_Logo_Black.png"
              alt="Dark Theme Logo"
              className="absolute inset-0 block dark:hidden"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h4 className="text-[16px] font-bold text-base-content">Varren Hansen</h4>
          <RotatingSubtitle />
        </div>
      </div>
      <div className="header-end flex items-center gap-4">
        {/* Time Zones Container */}
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-4 border-r border-base-content/10 pr-4">
          <LiveTime zone="HKT" />
          <LiveTime zone="WIB" />
        </div>
        <ThemeChanger />
      </div>
    </div>
  )
}
