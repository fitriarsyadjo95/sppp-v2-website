import React from 'react'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description: string
  gradient?: 'blue' | 'accent' | 'dark'
  className?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  gradient = 'blue',
  className = ''
}) => {
  const gradientClasses = {
    blue: 'from-sppp-blue to-sppp-dark-blue',
    accent: 'from-sppp-accent to-sppp-blue',
    dark: 'from-sppp-dark-blue to-black'
  }

  return (
    <div className={`bg-gradient-to-r ${gradientClasses[gradient]} rounded-lg p-8 mb-8 text-white ${className}`}>
      {subtitle && (
        <p className="text-lg opacity-90 mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl font-bold mb-4">
        {title}
      </h2>
      <p className="text-xl leading-relaxed">
        {description}
      </p>
    </div>
  )
}