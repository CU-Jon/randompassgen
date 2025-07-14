import { useState, useRef, useEffect } from 'react'
import CopyButton from './CopyButton'

function PasswordGenerator({ password, passwordStrength, autoSelect, onGenerate }) {
  const passwordRef = useRef(null)

  // Auto-select password when generated if setting is enabled
  useEffect(() => {
    if (autoSelect && passwordRef.current && password !== 'Your new password will appear here.') {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 99999) // For mobile devices
    }
  }, [password, autoSelect])

  const handlePasswordClick = () => {
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, 99999) // For mobile devices
    }
  }

  // Keyboard shortcut for copying
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'c' && 
          document.activeElement === passwordRef.current) {
        // Let the copy button handle this
      }
    }

    const passwordInput = passwordRef.current
    if (passwordInput) {
      passwordInput.addEventListener('keydown', handleKeyDown)
      return () => {
        passwordInput.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  return (
    <div className="password-container-wrapper">
      <div className="password-container">
        <div style={{ marginBottom: '15px' }}>
          {/* Generate Button */}
          <button 
            type="button" 
            className="GenerateBtn" 
            onClick={onGenerate}
            title="Generate a new password (Ctrl+Enter)"
          >
            Generate Password
          </button>
        </div>

        <div style={{ marginBottom: '10px' }}>
          {/* Password Label */}
          <div className="password-label">Your New Password:</div>
        </div>

        <div style={{ marginBottom: '10px' }}>
          {/* Password Input */}
          <input 
            ref={passwordRef}
            type="text" 
            value={password} 
            className="txt_password"
            onClick={handlePasswordClick}
            title="Generated password (Ctrl+C to copy)" 
            readOnly
          />
        </div>

        {/* Password Strength */}
        {passwordStrength && (
          <div style={{ marginBottom: '10px' }}>
            <small 
              className="password-strength d-block mt-1"
            >
              {passwordStrength}
            </small>
          </div>
        )}

        <div>
          {/* Copy Button */}
          <CopyButton textToCopy={password} />
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
