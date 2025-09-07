import React from 'react'

interface Statistic {
  value: string
  label: string
  accent?: boolean
}

interface StatisticsGridProps {
  statistics: Statistic[]
  columns?: number
  className?: string
}

export const StatisticsGrid: React.FC<StatisticsGridProps> = ({
  statistics,
  columns = 4,
  className = ''
}) => {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3', 
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5'
  }[columns] || 'md:grid-cols-4'

  return (
    <div className={`grid gap-6 ${gridClass} mb-8 ${className}`}>
      {statistics.map((stat, index) => (
        <div
          key={index}
          className={`bg-white rounded-lg shadow-md p-6 text-center border-l-4 ${
            stat.accent ? 'border-sppp-accent' : 'border-sppp-blue'
          }`}
        >
          <div className="text-3xl font-bold text-sppp-dark-blue mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-sppp-gray">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}