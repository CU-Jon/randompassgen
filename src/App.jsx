import { useState, useEffect, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Import components
import Header from './components/Header'
import PasswordOptions from './components/PasswordOptions'
import PasswordGenerator from './components/PasswordGenerator'
import PhoneticHelper from './components/PhoneticHelper'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'

// Password generation utilities
import { generatePassword, calculatePasswordStrength, generatePhonetic } from './utils/passwordUtils'
import { loadSettings, saveSettings } from './utils/storageUtils'

function App() {
  // Password generation state
  const [password, setPassword] = useState('Your new password will appear here.')
  const [phonetic, setPhonetic] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')

  // Settings state
  const [settings, setSettings] = useState({
    length: 16,
    includeSymbols: true,
    includeNumbers: true,
    includeLowercase: false,
    includeUppercase: true,
    excludeSimilar: true,
    excludeAmbiguous: true,
    useNATO: false,
    autoSelect: false,
    saveSettings: false
  })

  // Load settings on component mount
  useEffect(() => {
    const savedSettings = loadSettings()
    if (savedSettings) {
      setSettings(savedSettings)
    }
  }, [])

  // Save settings when they change (if saveSettings is enabled)
  useEffect(() => {
    if (settings.saveSettings) {
      saveSettings(settings)
    }
  }, [settings])

  // Update a single setting
  const updateSetting = useCallback((key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }))
  }, [])

  // Generate new password
  const handleGeneratePassword = useCallback(() => {
    const newPassword = generatePassword(settings)
    
    if (newPassword.startsWith('You must select')) {
      setPassword(newPassword)
      setPhonetic('')
      setPasswordStrength('')
      return
    }

    setPassword(newPassword)

    // Generate phonetic helper
    const phoneticText = settings.length <= 50 ? generatePhonetic(newPassword, settings.useNATO) : ''
    setPhonetic(phoneticText)

    // Calculate password strength
    const strength = calculatePasswordStrength(newPassword, settings)
    setPasswordStrength(strength)
  }, [settings])

  // Generate initial password when component mounts or settings change
  useEffect(() => {
    handleGeneratePassword()
  }, []) // Only run once on mount

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Generate password with Ctrl+Enter or Cmd+Enter
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault()
        handleGeneratePassword()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleGeneratePassword])

  return (
    <div className="app">
      <div className="container">
        <Header />
        
        <hr className="header" />
        
        <PasswordOptions 
          settings={settings}
          onUpdateSetting={updateSetting}
        />
        
        <PasswordGenerator
          password={password}
          passwordStrength={passwordStrength}
          autoSelect={settings.autoSelect}
          onGenerate={handleGeneratePassword}
        />
        
        <PhoneticHelper phonetic={phonetic} />
      </div>
      
      <InfoSection />
      <Footer />
    </div>
  )
}

export default App
