'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  BuildingOfficeIcon,
  TruckIcon,
  AcademicCapIcon,
  NewspaperIcon,
  PhoneIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/types'
import { GlobalSearch } from '../search/global-search'

const navigationItems: NavigationItem[] = [
  {
    name: 'Utama',
    href: '/',
  },
  {
    name: 'Profil',
    href: '/about',
    subItems: [
      {
        name: 'Profil Organisasi',
        href: '/about',
        description: 'Sejarah, visi, misi dan struktur organisasi SPPP',
        icon: BuildingOfficeIcon,
      },
      {
        name: 'Kepimpinan',
        href: '/about/leadership',
        description: 'Profil kepimpinan dan pengurusan eksekutif',
        icon: UserGroupIcon,
      },
      {
        name: 'Carta Organisasi',
        href: '/about/organization-chart',
        description: 'Struktur organisasi dan hierarki jawatan',
        icon: ChartBarIcon,
      }
    ]
  },
  {
    name: 'Infrastruktur & Perhubungan',
    href: '/infrastructure',
    subItems: [
      {
        name: 'Kemudahan Pelabuhan',
        href: '/infrastructure/facilities',
        description: 'Terminal, dermaga dan kemudahan pelabuhan',
        icon: BuildingOfficeIcon,
      },
      {
        name: 'Jalinan Perhubungan',
        href: '/infrastructure/connectivity',
        description: 'Sistem transport dan logistik terhubung',
        icon: TruckIcon,
      },
      {
        name: 'Teknologi & Sistem',
        href: '/infrastructure/technology',
        description: 'Sistem automatik dan teknologi pelabuhan',
        icon: CogIcon,
      }
    ]
  },
  {
    name: 'Perkhidmatan',
    href: '/services',
    subItems: [
      {
        name: 'Perkhidmatan Kargo',
        href: '/services/cargo',
        description: 'Pengendalian kontena dan kargo am',
        icon: TruckIcon,
      },
      {
        name: 'Perkhidmatan Kapal',
        href: '/services/vessel',
        description: 'Perkhidmatan berlabuh dan navigasi',
        icon: GlobeAltIcon,
      },
      {
        name: 'Perundingan Teknikal',
        href: '/services/consultation',
        description: 'Khidmat nasihat dan konsultansi maritim',
        icon: DocumentTextIcon,
      },
      {
        name: 'Perkhidmatan Digital',
        href: '/services/digital',
        description: 'Portal online dan sistem digital',
        icon: CogIcon,
      }
    ]
  },
  {
    name: 'Latihan & Pembangunan',
    href: '/training',
    subItems: [
      {
        name: 'Program Latihan',
        href: '/training/programs',
        description: 'Kursus dan program pembangunan profesional',
        icon: AcademicCapIcon,
      },
      {
        name: 'Sijil & Akreditasi',
        href: '/training/certification',
        description: 'Sijil profesional dan akreditasi antarabangsa',
        icon: ShieldCheckIcon,
      },
      {
        name: 'Jadual Kursus',
        href: '/training/schedule',
        description: 'Jadual kursus dan pendaftaran',
        icon: DocumentTextIcon,
      }
    ]
  },
  {
    name: 'Berita & Media',
    href: '/news',
  },
  {
    name: 'Hubungi Kami',
    href: '/contact',
  }
]

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export const Navigation: React.FC<NavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-gradient-to-r from-sppp-dark-blue to-sppp-blue">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Popover.Group className="flex h-14 items-center justify-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={cn(
                            'flex items-center text-sm font-medium text-white hover:text-sppp-accent transition-colors',
                            'focus:outline-none focus:ring-2 focus:ring-sppp-accent focus:ring-opacity-75',
                            isActive(item.href) && 'text-sppp-accent'
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={cn(
                              'ml-1 h-4 w-4 transition-transform',
                              open && 'rotate-180'
                            )}
                          />
                        </Popover.Button>

                        <Transition
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-4">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="bg-white p-4 grid gap-4">
                                {item.subItems?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="group flex items-start rounded-lg p-3 hover:bg-sppp-light-gray transition-colors"
                                  >
                                    {subItem.icon && (
                                      <subItem.icon className="h-6 w-6 flex-shrink-0 text-sppp-blue group-hover:text-sppp-dark-blue" />
                                    )}
                                    <div className="ml-3">
                                      <p className="text-sm font-medium text-gray-900 group-hover:text-sppp-dark-blue">
                                        {subItem.name}
                                      </p>
                                      {subItem.description && (
                                        <p className="text-xs text-sppp-gray">
                                          {subItem.description}
                                        </p>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-sm font-medium text-white hover:text-sppp-accent transition-colors',
                      isActive(item.href) && 'text-sppp-accent'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </Popover.Group>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Transition show={mobileMenuOpen}>
        <div className="lg:hidden">
          <Transition.Child
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-10 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute inset-x-0 top-0 z-20 origin-top-right transform p-2">
              <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  {/* Mobile Search */}
                  <div className="mb-6">
                    <GlobalSearch />
                  </div>

                  <div className="space-y-2">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        {item.subItems ? (
                          <div>
                            <div className="text-base font-medium text-sppp-dark-blue py-2 border-b border-gray-100">
                              {item.name}
                            </div>
                            <div className="pl-4 space-y-2 mt-2">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center text-sm text-sppp-gray hover:text-sppp-blue py-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="h-4 w-4 mr-2" />
                                  )}
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            className={cn(
                              'block text-base font-medium py-2 px-3 rounded-md transition-colors',
                              isActive(item.href)
                                ? 'text-sppp-blue bg-sppp-light-gray'
                                : 'text-sppp-dark-blue hover:text-sppp-blue hover:bg-sppp-light-gray'
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  )
}

Navigation.displayName = 'Navigation'