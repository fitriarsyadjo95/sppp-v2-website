'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  XMarkIcon,
  SpeakerWaveIcon,
  EyeIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  MinusIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { useAccessibility } from '@/contexts/accessibility-context'
import { useLanguage } from '@/contexts/language-context'

export const AccessibilityMenu: React.FC = () => {
  const { state, dispatch } = useAccessibility()
  const { t } = useLanguage()

  const speakText = (text: string) => {
    if (state.textToSpeech && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ms-MY'
      window.speechSynthesis.speak(utterance)
    }
  }

  if (!state.isMenuOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end p-4"
        onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
      >
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-white rounded-lg shadow-2xl w-80 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-sppp-blue" />
              <h2 className="font-semibold text-sppp-dark-blue">
                {t('accessibility-title', 'Kemudahan Aksesibiliti', 'Accessibility Features')}
              </h2>
            </div>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_MENU' })}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* Font Size */}
            <div>
              <h3 className="font-medium text-sppp-dark-blue mb-3 flex items-center">
                <span className="text-xl mr-2">A</span>
                {t('font-size', 'Saiz Tulisan', 'Font Size')}
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {(['normal', 'large', 'extra-large'] as const).map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      dispatch({ type: 'SET_FONT_SIZE', fontSize: size })
                      speakText(`Font size ${size}`)
                    }}
                    className={`p-2 text-sm rounded border transition-colors ${
                      state.fontSize === size
                        ? 'bg-sppp-blue text-white border-sppp-blue'
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-900'
                    }`}
                  >
                    {size === 'normal' && 'A'}
                    {size === 'large' && 'A+'}
                    {size === 'extra-large' && 'A++'}
                  </button>
                ))}
              </div>
            </div>

            {/* Contrast */}
            <div>
              <h3 className="font-medium text-sppp-dark-blue mb-3 flex items-center">
                <EyeIcon className="w-4 h-4 mr-2" />
                {t('contrast', 'Kontras', 'Contrast')}
              </h3>
              <div className="space-y-2">
                {(['normal', 'high', 'invert'] as const).map((contrast) => (
                  <button
                    key={contrast}
                    onClick={() => {
                      dispatch({ type: 'SET_CONTRAST', contrast })
                      speakText(`${contrast} contrast mode`)
                    }}
                    className={`w-full p-3 text-left rounded border transition-colors ${
                      state.contrast === contrast
                        ? 'bg-sppp-blue text-white border-sppp-blue'
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-900'
                    }`}
                  >
                    {contrast === 'normal' && t('normal-contrast', 'Biasa', 'Normal')}
                    {contrast === 'high' && t('high-contrast', 'Kontras Tinggi', 'High Contrast')}
                    {contrast === 'invert' && t('invert-colors', 'Songsang Warna', 'Invert Colors')}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Features */}
            <div className="space-y-3">
              <h3 className="font-medium text-sppp-dark-blue">
                {t('features', 'Ciri-ciri', 'Features')}
              </h3>

              {/* Text to Speech */}
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex items-center">
                  <SpeakerWaveIcon className="w-4 h-4 mr-2 text-sppp-blue" />
                  <span className="text-sm text-gray-900">
                    {t('text-to-speech', 'Bacaan Teks', 'Text to Speech')}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={state.textToSpeech}
                  onChange={() => {
                    dispatch({ type: 'TOGGLE_TEXT_TO_SPEECH' })
                    speakText(state.textToSpeech ? 'Text to speech disabled' : 'Text to speech enabled')
                  }}
                  className="w-4 h-4 text-sppp-blue bg-gray-100 border-gray-300 rounded focus:ring-sppp-blue focus:ring-2"
                />
              </label>

              {/* Reduced Motion */}
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="text-sm text-gray-900">
                  {t('reduce-motion', 'Kurangkan Animasi', 'Reduce Motion')}
                </span>
                <input
                  type="checkbox"
                  checked={state.reducedMotion}
                  onChange={() => {
                    dispatch({ type: 'TOGGLE_REDUCED_MOTION' })
                    speakText(state.reducedMotion ? 'Motion restored' : 'Motion reduced')
                  }}
                  className="w-4 h-4 text-sppp-blue bg-gray-100 border-gray-300 rounded focus:ring-sppp-blue focus:ring-2"
                />
              </label>

              {/* Focus Outlines */}
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="text-sm text-gray-900">
                  {t('focus-outlines', 'Garis Fokus', 'Focus Outlines')}
                </span>
                <input
                  type="checkbox"
                  checked={state.focusOutlines}
                  onChange={() => {
                    dispatch({ type: 'TOGGLE_FOCUS_OUTLINES' })
                    speakText(state.focusOutlines ? 'Focus outlines hidden' : 'Focus outlines shown')
                  }}
                  className="w-4 h-4 text-sppp-blue bg-gray-100 border-gray-300 rounded focus:ring-sppp-blue focus:ring-2"
                />
              </label>

              {/* Underline Links */}
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="text-sm text-gray-900">
                  {t('underline-links', 'Garis Bawah Pautan', 'Underline Links')}
                </span>
                <input
                  type="checkbox"
                  checked={state.underlinkLinks}
                  onChange={() => {
                    dispatch({ type: 'TOGGLE_UNDERLINE_LINKS' })
                    speakText(state.underlinkLinks ? 'Link underlines disabled' : 'Link underlines enabled')
                  }}
                  className="w-4 h-4 text-sppp-blue bg-gray-100 border-gray-300 rounded focus:ring-sppp-blue focus:ring-2"
                />
              </label>

              {/* Readable Font */}
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="text-sm text-gray-900">
                  {t('readable-font', 'Font Mudah Baca', 'Readable Font')}
                </span>
                <input
                  type="checkbox"
                  checked={state.readableFont}
                  onChange={() => {
                    dispatch({ type: 'TOGGLE_READABLE_FONT' })
                    speakText(state.readableFont ? 'Readable font disabled' : 'Readable font enabled')
                  }}
                  className="w-4 h-4 text-sppp-blue bg-gray-100 border-gray-300 rounded focus:ring-sppp-blue focus:ring-2"
                />
              </label>
            </div>

            {/* Reset Button */}
            <button
              onClick={() => {
                dispatch({ type: 'RESET_SETTINGS' })
                speakText('Accessibility settings reset')
              }}
              className="w-full flex items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded transition-colors"
            >
              <ArrowPathIcon className="w-4 h-4 mr-2" />
              {t('reset-settings', 'Set Semula', 'Reset Settings')}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}