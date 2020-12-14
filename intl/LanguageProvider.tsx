import { createContext, useState } from 'react'

export const defaultLocale = 'fi'
export const locales = ['fi', 'en']
export const LanguageContext = createContext([])

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState('fi')

  return (
    <LanguageContext.Provider value={ [locale, setLocale] }>
      { children }
    </LanguageContext.Provider>
  )
}