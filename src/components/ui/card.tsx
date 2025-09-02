import React from 'react'
import { cn } from '@/lib/utils'
import { CardProps } from '@/types'

export const Card: React.FC<CardProps> = ({
  title,
  description,
  footer,
  className,
  children,
}) => {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-sppp border border-gray-200',
      'transition-all duration-200 hover:shadow-sppp-lg',
      className
    )}>
      {(title || description) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {title && (
            <h3 className="text-lg font-semibold text-sppp-dark-blue">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sppp-gray mt-1">
              {description}
            </p>
          )}
        </div>
      )}
      <div className="px-6 py-4">
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-sppp-light-gray rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  )
}

Card.displayName = 'Card'

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={cn('px-6 py-4 border-b border-gray-200', className)}>
      {children}
    </div>
  )
}

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={cn('px-6 py-4', className)}>
      {children}
    </div>
  )
}

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div className={cn('px-6 py-4 border-t border-gray-200 bg-sppp-light-gray rounded-b-lg', className)}>
      {children}
    </div>
  )
}

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <h3 className={cn('text-lg font-semibold text-sppp-dark-blue', className)}>
      {children}
    </h3>
  )
}