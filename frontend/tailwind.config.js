/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#f8fafc',
          muted: '#64748b',
        },
        accent: {
          DEFAULT: '#3b82f6',
          soft: '#60a5fa',
          strong: '#1d4ed8', // ← Agregar este color
          dark: '#1d4ed8',
        },
        background: {
          DEFAULT: '#ffffff',
          subtle: '#f8fafc',
          paper: '#ffffff',
        },
        border: {
          DEFAULT: '#e2e8f0',
          light: '#f1f5f9',
        },
        status: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        }
      },
      // ... el resto de tu configuración
    },
  },
  plugins: [],
}
