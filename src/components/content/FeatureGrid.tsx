import React from 'react'

interface Feature {
  title: string
  items: string[]
  accent?: boolean
}

interface FeatureGridProps {
  title: string
  icon?: string
  features: Feature[]
  columns?: number
  className?: string
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  title,
  icon,
  features,
  columns = 3,
  className = ''
}) => {
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }[columns] || 'md:grid-cols-3'

  return (
    <div className={`bg-white rounded-lg shadow-md p-8 mb-8 ${className}`}>
      <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <div className={`grid gap-6 ${gridClass}`}>
        {features.map((feature, index) => (
          <div key={index} className="bg-sppp-light-gray rounded-lg p-4">
            <h4 className="font-semibold text-sppp-dark-blue mb-3">
              {feature.title}
            </h4>
            <ul className="space-y-2 text-sppp-gray">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <span className={`mr-2 ${feature.accent ? 'text-sppp-accent' : 'text-sppp-blue'}`}>
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}