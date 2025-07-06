# Weather App

A beautiful, responsive weather application built with React, TypeScript, Vite, and Tailwind CSS. Features automatic dark/light mode based on time of day and smooth weather animations.

## Features

- 🌤️ Real-time weather data from WeatherAPI
- 🎨 Beautiful Lottie animations for different weather conditions
- 🌙 Automatic dark mode during night hours (6 PM - 6 AM)
- 📱 Fully responsive design
- 📍 Location-based weather detection
- 🎭 Bebas Neue font for modern typography

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AndreyPetkov03/weather-app2.git
   cd weather-app2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Get a free API key from [WeatherAPI](https://weatherapi.com/api)
   - Replace `your_weather_api_key_here` with your actual API key in `.env`

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the root directory with:

```
VITE_WEATHER_API_KEY=your_weather_api_key_here
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lottie Animations
- WeatherAPI

## Original Vite Template Info

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
