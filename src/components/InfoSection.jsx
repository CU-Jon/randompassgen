function InfoSection() {
  return (
    <div className="container info-section">
      <div className="row p-1">
        <div className="col-md-12">
          <b>Info:</b>
          <p>
            Save this page for offline use.<br />
            Passwords are created in Javascript right on the device.<br />
            We cannot store any passwords created on this site.<br />
            Code is not obfuscated and can be reviewed easily.<br />
            You can review the code on <a href="https://github.com/adamz01h/randompassgen.com">Github</a>.<br />
            This work is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode">Creative Commons Attribution-NonCommercial 4.0 International</a><br />
          </p>
          <details style={{ marginTop: '15px' }}>
            <summary style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              padding: '8px 0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '10px'
            }}>
              <b>Keyboard Shortcuts</b>
            </summary>
            <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
              <li style={{
                padding: '4px 0',
                borderLeft: '3px solid #28a745',
                paddingLeft: '12px',
                margin: '8px 0',
                background: 'rgba(40, 167, 69, 0.1)',
                borderRadius: '0 4px 4px 0'
              }}>
                <kbd style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.9em',
                  color: '#fff'
                }}>Ctrl+Enter</kbd> - Generate new password
              </li>
              <li style={{
                padding: '4px 0',
                borderLeft: '3px solid #28a745',
                paddingLeft: '12px',
                margin: '8px 0',
                background: 'rgba(40, 167, 69, 0.1)',
                borderRadius: '0 4px 4px 0'
              }}>
                <kbd style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.9em',
                  color: '#fff'
                }}>Ctrl+C</kbd> - Copy password (when password field is focused)
              </li>
              <li style={{
                padding: '4px 0',
                borderLeft: '3px solid #28a745',
                paddingLeft: '12px',
                margin: '8px 0',
                background: 'rgba(40, 167, 69, 0.1)',
                borderRadius: '0 4px 4px 0'
              }}>
                <kbd style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.9em',
                  color: '#fff'
                }}>Tab</kbd> - Navigate between controls
              </li>
              <li style={{
                padding: '4px 0',
                borderLeft: '3px solid #28a745',
                paddingLeft: '12px',
                margin: '8px 0',
                background: 'rgba(40, 167, 69, 0.1)',
                borderRadius: '0 4px 4px 0'
              }}>
                <kbd style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  padding: '2px 6px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.9em',
                  color: '#fff'
                }}>Space</kbd> - Toggle checkboxes or click focused button
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
