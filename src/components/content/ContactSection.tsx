import React from 'react'

interface ContactInfo {
  title: string
  details: string[]
}

interface ContactSectionProps {
  title?: string
  contactInfo: ContactInfo[]
  note?: string
  className?: string
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = '📞 Maklumat Hubungan',
  contactInfo,
  note,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 ${className}`}>
      <h3 className="text-2xl font-semibold text-sppp-dark-blue mb-6">
        {title}
      </h3>
      <div className={`grid gap-6 ${contactInfo.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
        {contactInfo.map((info, index) => (
          <div key={index}>
            <h4 className="font-semibold text-sppp-dark-blue mb-3">
              {info.title}
            </h4>
            <div className="text-sppp-gray space-y-1">
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {note && (
        <div className="mt-6 p-4 bg-sppp-light-gray rounded-lg">
          <p className="text-sm text-sppp-gray">
            <strong>Nota:</strong> {note}
          </p>
        </div>
      )}
    </div>
  )
}