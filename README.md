# Random Password Generator - React Version

A modern, secure, client-side random password generator built with React and JavaScript. This is a component-based rewrite of the original static HTML version.

## Features

- **100% Client-Side**: All password generation happens in your browser using JavaScript
- **React Components**: Modular, reusable component architecture
- **Modern UI**: Clean, responsive design with Bootstrap 5
- **Secure**: Uses cryptographically secure random number generation
- **Customizable**: Configure password length, character sets, and exclusions
- **Offline Ready**: Works completely without an internet connection
- **Password Strength Indicator**: Real-time feedback on password strength
- **NATO Phonetic Support**: Optional phonetic pronunciation guide
- **Settings Persistence**: Save your preferences in browser localStorage
- **Copy to Clipboard**: Modern clipboard API with fallback support
- **Keyboard Shortcuts**: Full keyboard navigation support
- **Accessibility**: ARIA labels, screen reader support, high contrast mode

## Component Architecture

```
src/
├── App.jsx                 # Main application component
├── components/
│   ├── Header.jsx          # Logo and title
│   ├── PasswordOptions.jsx # All password configuration options
│   ├── PasswordGenerator.jsx # Generate button and password display
│   ├── CopyButton.jsx      # Copy to clipboard functionality
│   ├── PhoneticHelper.jsx  # NATO phonetic pronunciation
│   ├── InfoSection.jsx     # Information and keyboard shortcuts
│   └── Footer.jsx          # Footer with copyright
├── utils/
│   ├── passwordUtils.js    # Password generation logic
│   └── storageUtils.js     # localStorage utilities
└── App.css                 # Styling
```

## Password Options

- **Length**: 6-2048 characters
- **Character Sets**: Uppercase, lowercase, numbers, symbols
- **Exclusions**: Similar characters (i,l,1,L,o,0,O) and ambiguous characters
- **Auto-select**: Automatically select generated password for easy copying

## Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Keyboard Shortcuts

- **Ctrl+Enter** - Generate new password
- **Ctrl+C** - Copy password (when password field is focused)
- **Tab** - Navigate between controls
- **Space** - Toggle checkboxes or click focused button

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

## Deployment

This is a static React application that can be deployed to:

- **Netlify** - Connect your GitHub repository for automatic deployments
- **Vercel** - Import your repository for edge network distribution
- **GitHub Pages** - Deploy from the `dist` folder after building
- **AWS CloudFront + S3** - Static website hosting
- **Any static hosting service** - Upload the `dist` folder contents

### Build for Production

```bash
npm run build
```

The `dist` folder will contain all the files needed for deployment.

## Differences from Static Version

### Advantages
- **Component-based architecture** - More maintainable and reusable code
- **React state management** - Better state handling and updates
- **Modern development tools** - Hot reload, linting, building
- **Modular code** - Easier to test and extend
- **Better performance** - Optimized builds and bundling

### Dependencies
- Requires a build step (but output is still static)
- Uses modern JavaScript features
- Includes React framework (~45KB gzipped)

## License

This work is licensed under [Creative Commons Attribution-NonCommercial 4.0 International](https://creativecommons.org/licenses/by-nc/4.0/legalcode)

## Contributing

Feel free to submit issues and enhancement requests!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
