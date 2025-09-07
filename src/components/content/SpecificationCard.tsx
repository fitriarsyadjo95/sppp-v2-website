import React from 'react'

interface Specification {
  label: string
  value: string
}

interface SpecificationCardProps {
  title: string
  icon?: string
  specifications: Specification[]
  className?: string
}

export const SpecificationCard: React.FC<SpecificationCardProps> = ({
  title,
  icon,
  specifications,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-semibold text-sppp-dark-blue mb-4 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
      <div className="space-y-3">
        {specifications.map((spec, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 ${
              index < specifications.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <span className="text-sppp-gray">{spec.label}</span>
            <span className="font-semibold text-sppp-dark-blue">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}