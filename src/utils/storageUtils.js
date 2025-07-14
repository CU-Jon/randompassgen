const STORAGE_KEY = 'passwordGeneratorSettings'

export function loadSettings() {
  try {
    const savedSettings = localStorage.getItem(STORAGE_KEY)
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      // Only return if saveSettings was true
      if (parsed.saveSettings) {
        return parsed
      }
    }
  } catch (error) {
    console.error('Error loading settings:', error)
  }
  return null
}

export function saveSettings(settings) {
  try {
    if (settings.saveSettings) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } else {
      // Clear settings if saveSettings is disabled
      localStorage.removeItem(STORAGE_KEY)
    }
  } catch (error) {
    console.error('Error saving settings:', error)
  }
}
