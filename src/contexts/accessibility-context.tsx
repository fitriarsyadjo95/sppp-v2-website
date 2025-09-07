'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'

export interface AccessibilityState {
  fontSize: 'normal' | 'large' | 'extra-large'
  contrast: 'normal' | 'high' | 'invert'
  textToSpeech: boolean
  reducedMotion: boolean
  focusOutlines: boolean
  underlinkLinks: boolean
  readableFont: boolean
  isMenuOpen: boolean
}

type AccessibilityAction =
  | { type: 'SET_FONT_SIZE'; fontSize: AccessibilityState['fontSize'] }
  | { type: 'SET_CONTRAST'; contrast: AccessibilityState['contrast'] }
  | { type: 'TOGGLE_TEXT_TO_SPEECH' }
  | { type: 'TOGGLE_REDUCED_MOTION' }
  | { type: 'TOGGLE_FOCUS_OUTLINES' }
  | { type: 'TOGGLE_UNDERLINE_LINKS' }
  | { type: 'TOGGLE_READABLE_FONT' }
  | { type: 'TOGGLE_MENU' }
  | { type: 'RESET_SETTINGS' }

const initialState: AccessibilityState = {
  fontSize: 'normal',
  contrast: 'normal',
  textToSpeech: false,
  reducedMotion: false,
  focusOutlines: true,
  underlinkLinks: false,
  readableFont: false,
  isMenuOpen: false,
}

function accessibilityReducer(state: AccessibilityState, action: AccessibilityAction): AccessibilityState {
  switch (action.type) {
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.fontSize }
    case 'SET_CONTRAST':
      return { ...state, contrast: action.contrast }
    case 'TOGGLE_TEXT_TO_SPEECH':
      return { ...state, textToSpeech: !state.textToSpeech }
    case 'TOGGLE_REDUCED_MOTION':
      return { ...state, reducedMotion: !state.reducedMotion }
    case 'TOGGLE_FOCUS_OUTLINES':
      return { ...state, focusOutlines: !state.focusOutlines }
    case 'TOGGLE_UNDERLINE_LINKS':
      return { ...state, underlinkLinks: !state.underlinkLinks }
    case 'TOGGLE_READABLE_FONT':
      return { ...state, readableFont: !state.readableFont }
    case 'TOGGLE_MENU':
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case 'RESET_SETTINGS':
      return { ...initialState, isMenuOpen: state.isMenuOpen }
    default:
      return state
  }
}

interface AccessibilityContextType {
  state: AccessibilityState
  dispatch: React.Dispatch<AccessibilityAction>
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(accessibilityReducer, initialState)

  // Apply accessibility settings to document
  useEffect(() => {
    const root = document.documentElement
    
    // Font size
    root.classList.remove('text-normal', 'text-large', 'text-extra-large')
    root.classList.add(`text-${state.fontSize}`)
    
    // Contrast
    root.classList.remove('contrast-normal', 'contrast-high', 'contrast-invert')
    root.classList.add(`contrast-${state.contrast}`)
    
    // Reduced motion
    if (state.reducedMotion) {
      root.style.setProperty('--motion-reduce', '1')
      root.classList.add('reduce-motion')
    } else {
      root.style.removeProperty('--motion-reduce')
      root.classList.remove('reduce-motion')
    }
    
    // Focus outlines
    if (!state.focusOutlines) {
      root.classList.add('no-focus-outlines')
    } else {
      root.classList.remove('no-focus-outlines')
    }
    
    // Underline links
    if (state.underlinkLinks) {
      root.classList.add('underline-links')
    } else {
      root.classList.remove('underline-links')
    }
    
    // Readable font
    if (state.readableFont) {
      root.classList.add('readable-font')
    } else {
      root.classList.remove('readable-font')
    }
    
  }, [state])

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('accessibility-settings', JSON.stringify({
        fontSize: state.fontSize,
        contrast: state.contrast,
        textToSpeech: state.textToSpeech,
        reducedMotion: state.reducedMotion,
        focusOutlines: state.focusOutlines,
        underlinkLinks: state.underlinkLinks,
        readableFont: state.readableFont,
      }))
    } catch (error) {
      console.warn('Failed to save accessibility settings:', error)
    }
  }, [state])

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('accessibility-settings')
      if (saved) {
        const settings = JSON.parse(saved)
        if (settings.fontSize) dispatch({ type: 'SET_FONT_SIZE', fontSize: settings.fontSize })
        if (settings.contrast) dispatch({ type: 'SET_CONTRAST', contrast: settings.contrast })
        if (settings.textToSpeech) dispatch({ type: 'TOGGLE_TEXT_TO_SPEECH' })
        if (settings.reducedMotion) dispatch({ type: 'TOGGLE_REDUCED_MOTION' })
        if (settings.focusOutlines !== undefined && !settings.focusOutlines) dispatch({ type: 'TOGGLE_FOCUS_OUTLINES' })
        if (settings.underlinkLinks) dispatch({ type: 'TOGGLE_UNDERLINE_LINKS' })
        if (settings.readableFont) dispatch({ type: 'TOGGLE_READABLE_FONT' })
      }
    } catch (error) {
      console.warn('Failed to load accessibility settings:', error)
    }
  }, [])

  return (
    <AccessibilityContext.Provider value={{ state, dispatch }}>
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider')
  }
  return context
}