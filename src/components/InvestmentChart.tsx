'use client'

import { Pie, PieChart, Sector, PieSectorDataItem, Tooltip, TooltipIndex, Cell } from 'recharts'

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
]

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

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: PieSectorDataItem) => {
  const RADIAN = Math.PI / 180
  const sin = Math.sin(-RADIAN * (midAngle ?? 1))
  const cos = Math.cos(-RADIAN * (midAngle ?? 1))
  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin
  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {/* {payload.name} */}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill={payload.fill}
      >{`${payload.name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`${((percent ?? 1) * 100).toFixed(2)}%`}
      </text>
    </g>
  )
}

export default function InvestmentChart({
  isAnimationActive = true,
  defaultIndex = undefined,
}: {
  isAnimationActive?: boolean
  defaultIndex?: TooltipIndex
}) {
  return (
    <PieChart
      style={{ width: '100%', aspectRatio: 1 }}
      responsive
      margin={{
        top: 120,
        right: 120,
        bottom: 120,
        left: 120,
      }}
    >
      <Pie
        activeShape={renderActiveShape}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        fill="#8884d8"
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            stroke="oklch(var(--b1))"
            strokeWidth={2}
          />
        ))}
      </Pie>
      <Tooltip content={() => null} defaultIndex={defaultIndex} />
    </PieChart>
  )
}
