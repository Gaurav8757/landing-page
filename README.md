# React + Vite Landing Page

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Features

- 🌐 **Internationalization**: Multi-language support with automatic language detection. [Learn more](docs/i18n-guide.md)
- ⚡ **Vite**: Lightning fast development and build times
- 🎨 **Bootstrap**: Responsive design with Bootstrap 5
- 🔄 **Hot Module Replacement**: Fast refresh during development

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Documentation

- [Internationalization Guide](docs/i18n-guide.md) - Learn how to use and extend the multi-language support
- [Vite Configuration](https://vitejs.dev/config/) - Configure your development environment
- [React Documentation](https://react.dev/) - Learn more about React

## Available Languages

The application supports the following languages out of the box:
- 🇺🇸 English (en)
- 🇪🇸 Spanish (es)
- 🇫🇷 French (fr)

To switch languages, you can:
1. Use the language switcher in the header
2. Add `?lng=LANGUAGE_CODE` to the URL (e.g., `?lng=es` for Spanish)
3. The application will remember your language preference

## Development Tools

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
