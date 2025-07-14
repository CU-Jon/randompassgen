import { useState } from 'react'

function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      // Use modern Clipboard API if available
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy)
      } else {
        // Fallback for older browsers or non-HTTPS
        const textArea = document.createElement('textarea')
        textArea.value = textToCopy
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      
      // Show feedback
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy password:', err)
      alert('Failed to copy password. Please select and copy manually.')
    }
  }

  return (
    <button 
      type="button" 
      className={`button btn ${copied ? 'btn-success' : 'btn-secondary'}`}
      onClick={handleCopy}
      style={{
        borderRadius: '8px',
        fontWeight: '500',
        transition: 'all 0.3s ease'
      }}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export default CopyButton
