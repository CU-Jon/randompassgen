# Random Password Generator

A secure, client-side random password generator that creates strong passwords entirely in your browser. No server-side processing, no data transmission, and works completely offline.

## Features

- **100% Client-Side**: All password generation happens in your browser using JavaScript
- **Secure**: Uses cryptographically secure random number generation
- **Customizable**: Configure password length, character sets, and exclusions
- **Offline Ready**: Save the page and use it without an internet connection
- **Modern UI**: Clean, responsive design with Bootstrap 5
- **Password Strength Indicator**: Real-time feedback on password strength
- **NATO Phonetic Support**: Optional phonetic pronunciation guide
- **Settings Persistence**: Save your preferences in browser localStorage
- **Copy to Clipboard**: Modern clipboard API with fallback support

## Password Options

- **Length**: 6-2048 characters
- **Character Sets**: Uppercase, lowercase, numbers, symbols
- **Exclusions**: Similar characters (i,l,1,L,o,0,O) and ambiguous characters
- **Auto-select**: Automatically select generated password for easy copying

## Usage

1. Open `index.html` in any modern web browser
2. Configure your password preferences
3. Click "Generate Password"
4. Copy the generated password using the Copy button

## Development

This is a static web application with no build process required. Simply open `index.html` in a browser.

For development with a local server:

```bash
# Using Python (recommended)
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP (if available)
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Browser Compatibility

- Chrome 63+
- Firefox 53+
- Safari 13.1+
- Edge 79+

## Security

- Passwords are generated using `Math.random()` with enhanced entropy
- No passwords are stored, logged, or transmitted
- All processing happens locally in your browser
- Code is unobfuscated and can be audited

## License

This work is licensed under [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

## Contributing

Feel free to submit issues and enhancement requests!
