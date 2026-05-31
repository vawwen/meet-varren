'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

// #region Data
const data = [
  { name: 'VDE', value: 4.25 },
  { name: 'SCHD', value: 3.47 },
  { name: 'HVAC', value: 3.23 },
  { name: 'FWRA', value: 0.78 },
  { name: 'ICLN', value: 3.15 },
  { name: 'SGOL', value: 4.97 },
  { name: 'CHPX', value: 10.83 },
  { name: 'DRAM', value: 10.99 },
  { name: 'VWRA', value: 30.55 },
  { name: 'VYM', value: 6.81 },
  { name: 'QQQM', value: 10.56 },
  { name: 'CIBR', value: 4.76 },
  { name: 'BTC', value: 3.47 },
].sort((a, b) => b.value - a.value) // Optional: Sorts largest allocation to smallest

const chartColors = {
  'cls-1': 'rgb(59, 130, 246)',
  'cls-2': 'rgb(16, 185, 129)',
  'cls-3': 'rgb(245, 158, 11)',
  'cls-4': 'rgb(236, 72, 153)',
  'cls-5': 'rgb(139, 92, 246)',
  'cls-6': 'rgb(20, 184, 166)',
  'cls-7': 'rgb(239, 68, 68)',
  'cls-8': 'rgb(234, 179, 8)',
  'cls-9': 'rgb(14, 165, 233)',
  'cls-10': 'rgb(168, 85, 247)',
  'cls-11': 'rgb(249, 115, 22)',
  'cls-12': 'rgb(34, 197, 94)',
  'cls-13': 'rgb(217, 70, 239)',
}

const COLORS = Object.values(chartColors)

// Custom modern Tooltip to match daisyUI theme layers
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-base-100/90 backdrop-blur-md border border-base-content/10 p-3 rounded-xl shadow-xl">
        <p className="text-xs uppercase font-bold tracking-wider text-base-content/50">
          Asset Allocation
        </p>
        <p className="text-base font-bold text-base-content mt-0.5">
          {payload[0].payload.name}: <span className="text-primary">{payload[0].value}%</span>
        </p>
      </div>
    )
  }
  return null
}

export default function InvestmentBarChart({
  isAnimationActive = true,
}: {
  isAnimationActive?: boolean
}) {
  return (
    <div className="w-full h-[500px] p-4 rounded-2xl border border-base-content/5 bg-base-100/20 backdrop-blur-sm">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical" // Makes bars run horizontally for ultimate legibility
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 10,
          }}
        >
          {/* X Axis showing percentages */}
          <XAxis
            type="number"
            tickFormatter={(val) => `${val}%`}
            stroke="#9ca3af"
            fontSize={12}
            tickLine={false}
          />

          {/* Y Axis showing the Tickers */}
          <YAxis
            dataKey="name"
            type="category"
            stroke="#9ca3af"
            fontSize={13}
            fontWeight={600}
            tickLine={false}
            axisLine={false}
            width={60}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#d9dde4' }} />

          {/* The Data Bars */}
          <Bar
            dataKey="value"
            isAnimationActive={isAnimationActive}
            radius={[0, 6, 6, 0]} // Rounds the outer corners of the bars smoothly
            maxBarSize={24}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
