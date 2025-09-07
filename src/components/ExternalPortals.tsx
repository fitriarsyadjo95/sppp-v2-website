'use client'

import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

interface ExternalPortal {
  name: string
  url: string
  description: string
  category: string
}

const externalPortals: ExternalPortal[] = [
  {
    name: 'Sistem Maklum Balas',
    url: 'https://www.ppcapps.gov.my/efeedback/',
    description: 'Portal untuk menghantar maklum balas, aduan, pujian, dan pertanyaan kepada SPPP',
    category: 'feedback'
  },
  {
    name: 'Kajian Kepuasan Pelanggan',
    url: 'https://www.ppcft.gov.my/kajiankepuasan.php',
    description: 'Borang kajian kepuasan pelanggan dalam talian',
    category: 'survey'
  }
]

interface ExternalPortalsProps {
  category?: string
  title?: string
}

export const ExternalPortals: React.FC<ExternalPortalsProps> = ({ 
  category, 
  title = 'Portal Luaran' 
}) => {
  const filteredPortals = category 
    ? externalPortals.filter(portal => portal.category === category)
    : externalPortals

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-sppp-dark-blue mb-4 flex items-center">
        <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
        {title}
      </h3>
      
      <div className="space-y-4">
        {filteredPortals.map((portal) => (
          <div key={portal.name} className="border-l-4 border-sppp-blue pl-4">
            <a
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-sppp-dark-blue group-hover:text-sppp-blue transition-colors">
                    {portal.name}
                  </h4>
                  <p className="text-sm text-sppp-gray mt-1">
                    {portal.description}
                  </p>
                </div>
                <ArrowTopRightOnSquareIcon className="h-4 w-4 text-sppp-gray group-hover:text-sppp-blue transition-colors ml-2 flex-shrink-0" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}