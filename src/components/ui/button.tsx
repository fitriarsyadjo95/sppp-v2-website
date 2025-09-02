import React from 'react'
import { cn } from '@/lib/utils'
import { ButtonProps } from '@/types'

const buttonVariants = {
  primary: 'bg-sppp-blue hover:bg-sppp-dark-blue text-white focus:ring-sppp-blue',
  secondary: 'bg-sppp-light-gray hover:bg-gray-200 text-sppp-dark-blue focus:ring-sppp-blue',
  ghost: 'hover:bg-sppp-light-gray text-sppp-blue focus:ring-sppp-blue',
  outline: 'border border-sppp-blue text-sppp-blue hover:bg-sppp-blue hover:text-white focus:ring-sppp-blue'
}

const buttonSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg'
}

export const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      disabled={loading || disabled}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
}

Button.displayName = 'Button'