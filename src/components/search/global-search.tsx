'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { MagnifyingGlassIcon, ClockIcon, FireIcon } from '@heroicons/react/24/outline'
import { cn, debounce } from '@/lib/utils'
import { SearchResult, SearchSuggestion } from '@/types'

// Mock data - will be replaced with real API calls
const mockSuggestions: SearchSuggestion[] = [
  { text: 'Perkhidmatan kargo', type: 'suggestion', url: '/services/cargo' },
  { text: 'Jadual kapal', type: 'popular', url: '/services/vessel-schedule' },
  { text: 'Hubungi kami', type: 'suggestion', url: '/contact' },
  { text: 'Latihan pelabuhan', type: 'recent', url: '/training/programs' },
  { text: 'Portal staf', type: 'popular', url: '/staff-portal' }
]

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    title: 'Perkhidmatan Pengendalian Kargo',
    content: 'SPPP menyediakan perkhidmatan pengendalian kargo yang komprehensif termasuk kontena dan kargo am...',
    url: '/services/cargo',
    type: 'service',
    relevance: 0.9,
    highlights: ['kargo', 'kontena']
  },
  {
    id: '2',
    title: 'Jadual Perkhidmatan Kapal',
    content: 'Lihat jadual terkini perkhidmatan kapal dan maklumat berlabuh di Pelabuhan Pulau Pinang...',
    url: '/services/vessel-schedule',
    type: 'page',
    relevance: 0.8,
    highlights: ['kapal', 'jadual']
  }
]

export const GlobalSearch: React.FC = () => {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  // Mock search function - replace with real API call
  const performSearch = useCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setSuggestions([])
      setSearchResults([])
      return
    }

    setIsLoading(true)
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    // Filter suggestions based on query
    const filteredSuggestions = mockSuggestions.filter(suggestion =>
      suggestion.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    // Filter results based on query
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.content.toLowerCase().includes(searchQuery.toLowerCase())
    )

    setSuggestions(filteredSuggestions)
    setSearchResults(filteredResults)
    setIsLoading(false)
  }, [])

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => performSearch(searchQuery), 300),
    [performSearch]
  )

  const handleInputChange = (value: string) => {
    setQuery(value)
    setSelectedIndex(-1)
    debouncedSearch(value)
    
    if (value.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const totalItems = suggestions.length + searchResults.length
    
    if (!isOpen || totalItems === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => (prev + 1) % totalItems)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev <= 0 ? totalItems - 1 : prev - 1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          const selectedItem = selectedIndex < suggestions.length 
            ? suggestions[selectedIndex]
            : searchResults[selectedIndex - suggestions.length]
          
          if ('url' in selectedItem && selectedItem.url) {
            window.location.href = selectedItem.url
          }
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
    }
  }

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node) &&
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getSuggestionIcon = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'recent':
        return <ClockIcon className="h-4 w-4" />
      case 'popular':
        return <FireIcon className="h-4 w-4" />
      default:
        return <MagnifyingGlassIcon className="h-4 w-4" />
    }
  }

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-sppp-gray" />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Cari maklumat, perkhidmatan..."
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && setIsOpen(true)}
          className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-sppp-gray focus:border-sppp-blue focus:outline-none focus:ring-2 focus:ring-sppp-blue focus:ring-opacity-20"
        />
        {isLoading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-sppp-blue border-t-transparent" />
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (query.length > 0 || suggestions.length > 0) && (
        <div
          ref={resultsRef}
          className="absolute top-full left-0 right-0 z-50 mt-1 max-h-96 overflow-auto rounded-lg bg-white py-2 shadow-xl ring-1 ring-gray-300 ring-opacity-100"
        >
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="px-3 py-2">
              <h4 className="text-xs font-semibold text-sppp-gray uppercase tracking-wide mb-2">
                Cadangan
              </h4>
              {suggestions.map((suggestion, index) => (
                <Link
                  key={suggestion.text}
                  href={suggestion.url || `/search?q=${encodeURIComponent(suggestion.text)}`}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm rounded-md transition-colors',
                    index === selectedIndex
                      ? 'bg-sppp-blue text-white'
                      : 'text-sppp-dark-blue hover:bg-sppp-light-gray'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={cn(
                    'mr-3 flex-shrink-0',
                    index === selectedIndex ? 'text-white' : 'text-sppp-gray'
                  )}>
                    {getSuggestionIcon(suggestion.type)}
                  </span>
                  {suggestion.text}
                  {suggestion.type === 'popular' && (
                    <span className={cn(
                      'ml-auto text-xs',
                      index === selectedIndex ? 'text-white' : 'text-sppp-accent'
                    )}>
                      Popular
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="px-3 py-2">
              {suggestions.length > 0 && <hr className="my-2 border-gray-200" />}
              <h4 className="text-xs font-semibold text-sppp-gray uppercase tracking-wide mb-2">
                Hasil Carian
              </h4>
              {searchResults.map((result, index) => {
                const adjustedIndex = index + suggestions.length
                return (
                  <Link
                    key={result.id}
                    href={result.url}
                    className={cn(
                      'block px-3 py-3 text-sm rounded-md transition-colors',
                      adjustedIndex === selectedIndex
                        ? 'bg-sppp-blue text-white'
                        : 'hover:bg-sppp-light-gray'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="font-medium mb-1">
                      {result.title}
                    </div>
                    <div className={cn(
                      'text-xs line-clamp-2',
                      adjustedIndex === selectedIndex ? 'text-gray-100' : 'text-sppp-gray'
                    )}>
                      {result.content}
                    </div>
                    {result.highlights && result.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {result.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className={cn(
                              'px-2 py-1 text-xs rounded',
                              adjustedIndex === selectedIndex
                                ? 'bg-white bg-opacity-20 text-white'
                                : 'bg-sppp-light-blue text-white'
                            )}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          )}

          {/* No Results */}
          {query.length > 2 && !isLoading && suggestions.length === 0 && searchResults.length === 0 && (
            <div className="px-3 py-4 text-center text-sm text-sppp-gray">
              Tiada hasil ditemui untuk "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  )
}

GlobalSearch.displayName = 'GlobalSearch'