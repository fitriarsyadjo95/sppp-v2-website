'use client'

import React, { useState, useEffect } from 'react'
import { 
  MapIcon, 
  ShipIcon, 
  ClockIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  TruckIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

interface Ship {
  id: string
  name: string
  type: 'cargo' | 'tanker' | 'container' | 'cruise'
  status: 'arriving' | 'docked' | 'departing' | 'anchored'
  position: { lat: number; lng: number }
  destination?: string
  eta?: string
  cargo?: string
  berth?: string
}

const dummyShips: Ship[] = [
  {
    id: '1',
    name: 'MV Ocean Pride',
    type: 'container',
    status: 'docked',
    position: { lat: 5.4164, lng: 100.3327 },
    destination: 'Terminal 5',
    cargo: '2,450 TEU',
    berth: 'Berth 12'
  },
  {
    id: '2',
    name: 'Star Carrier',
    type: 'cargo',
    status: 'departing',
    position: { lat: 5.4145, lng: 100.3310 },
    destination: 'Singapore',
    eta: '14:30',
    cargo: 'General Cargo'
  },
  {
    id: '3',
    name: 'Pacific Dawn',
    type: 'cruise',
    status: 'arriving',
    position: { lat: 5.4200, lng: 100.3280 },
    destination: 'Swettenham Pier',
    eta: '09:15',
    cargo: '2,800 passengers'
  },
  {
    id: '4',
    name: 'Petronas Venture',
    type: 'tanker',
    status: 'anchored',
    position: { lat: 5.4180, lng: 100.3250 },
    destination: 'Oil Terminal',
    cargo: 'Crude Oil',
    eta: '16:45'
  },
  {
    id: '5',
    name: 'Asia Excellence',
    type: 'container',
    status: 'arriving',
    position: { lat: 5.4220, lng: 100.3300 },
    destination: 'Terminal 3',
    eta: '11:20',
    cargo: '1,890 TEU'
  }
]

export default function OperationsDashboard() {
  const { t } = useLanguage()
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getShipIcon = (type: string) => {
    switch (type) {
      case 'container': return '🚢'
      case 'tanker': return '⛽'
      case 'cruise': return '🛳️'
      case 'cargo': return '🚛'
      default: return '⚓'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'arriving': return 'text-yellow-600 bg-yellow-50'
      case 'docked': return 'text-green-600 bg-green-50'
      case 'departing': return 'text-blue-600 bg-blue-50'
      case 'anchored': return 'text-gray-600 bg-gray-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'arriving': return <ClockIcon className="w-4 h-4" />
      case 'docked': return <CheckCircleIcon className="w-4 h-4" />
      case 'departing': return <TruckIcon className="w-4 h-4" />
      case 'anchored': return <ExclamationTriangleIcon className="w-4 h-4" />
      default: return <MapIcon className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-sppp-dark-blue">
                  {t('operations-dashboard', 'Papan Pemuka Operasi Pelabuhan', 'Port Operations Dashboard')}
                </h1>
                <p className="text-sppp-gray">
                  {t('realtime-monitoring', 'Pemantauan masa nyata kapal dan operasi pelabuhan', 'Real-time monitoring of ships and port operations')}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-sppp-gray">
                  {t('current-time', 'Masa Sekarang', 'Current Time')}
                </div>
                <div className="text-lg font-mono text-sppp-dark-blue">
                  {currentTime.toLocaleTimeString('ms-MY')}
                </div>
                <div className="text-sm text-sppp-gray">
                  {currentTime.toLocaleDateString('ms-MY')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-sppp-dark-blue flex items-center">
                  <MapIcon className="w-5 h-5 mr-2" />
                  {t('penang-port-map', 'Peta Pelabuhan Penang', 'Penang Port Map')}
                </h2>
              </div>
              
              {/* Dummy Map */}
              <div className="relative h-96 bg-gradient-to-br from-blue-100 to-blue-200">
                {/* Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 opacity-30"></div>
                
                {/* Port Layout */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-600 to-gray-400"></div>
                
                {/* Terminals */}
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-orange-400 rounded flex items-center justify-center text-white text-xs font-bold">
                  T1
                </div>
                <div className="absolute bottom-8 left-28 w-16 h-16 bg-orange-400 rounded flex items-center justify-center text-white text-xs font-bold">
                  T2
                </div>
                <div className="absolute bottom-8 left-48 w-16 h-16 bg-orange-400 rounded flex items-center justify-center text-white text-xs font-bold">
                  T3
                </div>
                <div className="absolute bottom-8 right-32 w-16 h-16 bg-red-400 rounded flex items-center justify-center text-white text-xs font-bold">
                  OIL
                </div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-purple-400 rounded flex items-center justify-center text-white text-xs font-bold">
                  SWET
                </div>

                {/* Ships on Map */}
                {dummyShips.map((ship, index) => (
                  <div
                    key={ship.id}
                    className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 ${
                      selectedShip?.id === ship.id ? 'scale-125 z-10' : ''
                    }`}
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${30 + (index * 10)}%`
                    }}
                    onClick={() => setSelectedShip(ship)}
                  >
                    <div className="bg-white rounded-full p-2 shadow-lg border-2 border-sppp-blue">
                      <span className="text-xl">{getShipIcon(ship.type)}</span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/75 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {ship.name}
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute top-4 left-4 bg-white/90 rounded p-3 text-xs">
                  <div className="font-semibold mb-2">{t('legend', 'Legenda', 'Legend')}:</div>
                  <div className="space-y-1">
                    <div className="flex items-center">
                      <span className="mr-2">🚢</span> {t('container', 'Kontena', 'Container')}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⛽</span> {t('tanker', 'Tanker', 'Tanker')}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🛳️</span> {t('cruise-ship', 'Kapal Persiaran', 'Cruise Ship')}
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🚛</span> {t('general-cargo', 'Kargo Am', 'General Cargo')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ship List */}
          <div className="space-y-6">
            {/* Statistics */}
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <h3 className="font-semibold text-sppp-dark-blue mb-3">{t('todays-statistics', 'Statistik Hari Ini', "Today's Statistics")}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-green-50 rounded">
                  <div className="text-2xl font-bold text-green-600">12</div>
                  <div className="text-xs text-green-700">{t('ships-in-port', 'Kapal di Pelabuhan', 'Ships in Port')}</div>
                </div>
                <div className="text-center p-2 bg-blue-50 rounded">
                  <div className="text-2xl font-bold text-blue-600">89%</div>
                  <div className="text-xs text-blue-700">{t('berth-utilization', 'Penggunaan Dermaga', 'Berth Utilization')}</div>
                </div>
                <div className="text-center p-2 bg-orange-50 rounded">
                  <div className="text-2xl font-bold text-orange-600">2,450</div>
                  <div className="text-xs text-orange-700">{t('teu-today', 'TEU Hari Ini', 'TEU Today')}</div>
                </div>
                <div className="text-center p-2 bg-purple-50 rounded">
                  <div className="text-2xl font-bold text-purple-600">1.2h</div>
                  <div className="text-xs text-purple-700">{t('average-waiting', 'Purata Menunggu', 'Average Waiting')}</div>
                </div>
              </div>
            </div>

            {/* Ship List */}
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-sppp-dark-blue">{t('ship-list', 'Senarai Kapal', 'Ship List')}</h3>
              </div>
              <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                {dummyShips.map((ship) => (
                  <div
                    key={ship.id}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                      selectedShip?.id === ship.id
                        ? 'border-sppp-blue bg-sppp-blue/5'
                        : 'border-gray-200 hover:border-sppp-blue/50 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedShip(ship)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{getShipIcon(ship.type)}</span>
                        <div>
                          <div className="font-medium text-sppp-dark-blue text-sm">
                            {ship.name}
                          </div>
                          <div className="text-xs text-sppp-gray">
                            {ship.cargo}
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ship.status)}`}>
                        {getStatusIcon(ship.status)}
                        <span className="ml-1 capitalize">{ship.status}</span>
                      </div>
                    </div>
                    {ship.eta && (
                      <div className="mt-2 text-xs text-sppp-gray">
                        ETA: {ship.eta} • {ship.destination}
                      </div>
                    )}
                    {ship.berth && (
                      <div className="mt-1 text-xs text-sppp-gray">
                        {ship.berth}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Ship Details */}
            {selectedShip && (
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-4 border-b bg-sppp-blue text-white rounded-t-lg">
                  <h3 className="font-semibold flex items-center">
                    <ShipIcon className="w-5 h-5 mr-2" />
                    {t('ship-information', 'Maklumat Kapal', 'Ship Information')}
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-sppp-dark-blue">
                        {selectedShip.name}
                      </div>
                      <div className="text-xs text-sppp-gray">
                        {t('type', 'Jenis', 'Type')}: {selectedShip.type}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs text-sppp-gray">{t('status', 'Status', 'Status')}</div>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedShip.status)}`}>
                        {getStatusIcon(selectedShip.status)}
                        <span className="ml-1 capitalize">{selectedShip.status}</span>
                      </div>
                    </div>

                    {selectedShip.cargo && (
                      <div>
                        <div className="text-xs text-sppp-gray">{t('cargo', 'Kargo', 'Cargo')}</div>
                        <div className="text-sm font-medium">{selectedShip.cargo}</div>
                      </div>
                    )}

                    {selectedShip.destination && (
                      <div>
                        <div className="text-xs text-sppp-gray">{t('destination', 'Destinasi', 'Destination')}</div>
                        <div className="text-sm font-medium">{selectedShip.destination}</div>
                      </div>
                    )}

                    {selectedShip.eta && (
                      <div>
                        <div className="text-xs text-sppp-gray">{t('eta', 'ETA', 'ETA')}</div>
                        <div className="text-sm font-medium">{selectedShip.eta}</div>
                      </div>
                    )}

                    {selectedShip.berth && (
                      <div>
                        <div className="text-xs text-sppp-gray">{t('berth', 'Dermaga', 'Berth')}</div>
                        <div className="text-sm font-medium">{selectedShip.berth}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}