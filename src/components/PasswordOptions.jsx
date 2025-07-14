function PasswordOptions({ settings, onUpdateSetting }) {
  const passwordLengthOptions = () => {
    const options = []
    
    // Weak options (6-15)
    const weakOptions = []
    for (let i = 6; i <= 15; i++) {
      weakOptions.push(<option key={i} value={i}>{i}</option>)
    }
    
    // Strong options (16-128)
    const strongOptions = []
    for (let i = 16; i <= 128; i++) {
      strongOptions.push(<option key={i} value={i}>{i}</option>)
    }
    
    // Unbelievable options
    const unbelievableOptions = [256, 512, 1024, 2048].map(val => (
      <option key={val} value={val}>{val}</option>
    ))
    
    return (
      <>
        <optgroup label="Weak">{weakOptions}</optgroup>
        <optgroup label="Strong">{strongOptions}</optgroup>
        <optgroup label="Unbelievable">{unbelievableOptions}</optgroup>
      </>
    )
  }

  const handleCheckboxChange = (key) => (event) => {
    onUpdateSetting(key, event.target.checked)
  }

  const handleLengthChange = (event) => {
    onUpdateSetting('length', parseInt(event.target.value))
  }

  const handleSaveSettingsChange = (event) => {
    const isChecked = event.target.checked
    onUpdateSetting('saveSettings', isChecked)
    
    // If unchecking, clear all saved settings
    if (!isChecked) {
      localStorage.clear()
    }
  }

  return (
    <form>
      {/* Password Length */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Password Length:</div>
        </div>
        <div className="col-md-6">
          <div className="checkbox_value">
            <select 
              className="w-100 form-select" 
              title="Select the length of your password."
              value={settings.length}
              onChange={handleLengthChange}
            >
              {passwordLengthOptions()}
            </select>
          </div>
        </div>
      </div>

      {/* Include Symbols */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Include Symbols:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.includeSymbols}
                onChange={handleCheckboxChange('includeSymbols')}
              /> ( e.g. @#$% )
            </label>
          </div>
        </div>
      </div>

      {/* Include Numbers */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Include Numbers:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.includeNumbers}
                onChange={handleCheckboxChange('includeNumbers')}
              /> ( e.g. 123456 )
            </label>
          </div>
        </div>
      </div>

      {/* Include Lowercase */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Include Lowercase Characters:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.includeLowercase}
                onChange={handleCheckboxChange('includeLowercase')}
              /> ( e.g. abcdefgh )
            </label>
          </div>
        </div>
      </div>

      {/* Include Uppercase */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Include Uppercase Characters:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.includeUppercase}
                onChange={handleCheckboxChange('includeUppercase')}
              /> ( e.g. ABCDEFGH )
            </label>
          </div>
        </div>
      </div>

      {/* Exclude Similar */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Exclude Similar Characters:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.excludeSimilar}
                onChange={handleCheckboxChange('excludeSimilar')}
              /> ( e.g. i, l, 1, L, o, 0, O )
            </label>
          </div>
        </div>
      </div>

      {/* Exclude Ambiguous */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Exclude Ambiguous Characters:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.excludeAmbiguous}
                onChange={handleCheckboxChange('excludeAmbiguous')}
              /> ( {`{ } [ ] ( ) / \\ ' " \` ~ , ; : . < >`} )
            </label>
          </div>
        </div>
      </div>

      {/* NATO Phonetic */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">NATO phonetic alphabet Wordset:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.useNATO}
                onChange={handleCheckboxChange('useNATO')}
              /> (Use NATO word set.)
            </label>
          </div>
        </div>
      </div>

      {/* Auto-Select */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Auto-Select:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.autoSelect}
                onChange={handleCheckboxChange('autoSelect')}
              /> ( select the password automatically )
            </label>
          </div>
        </div>
      </div>

      {/* Save Settings */}
      <div className="row p-1">
        <div className="col-md-4">
          <div className="checkbox_label">Save My Preference:</div>
        </div>
        <div className="col-md-8">
          <div className="checkbox_value">
            <label>
              <input 
                type="checkbox" 
                checked={settings.saveSettings}
                onChange={handleSaveSettingsChange}
              /> ( save all the settings above for later use )
            </label>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PasswordOptions
