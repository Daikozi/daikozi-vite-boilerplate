/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, 'src/assets'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Constants': path.resolve(__dirname, 'src/constants'),
      '@Routes': path.resolve(__dirname, 'src/routes'),
      '@Contexts': path.resolve(__dirname, 'src/contexts'),
      '@Types': path.resolve(__dirname, 'src/types'),
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Material': path.resolve(__dirname, 'src/material'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Redux': path.resolve(__dirname, 'src/redux'),
      '@Svg': path.resolve(__dirname, 'src/svg'),
      '@Cypress': path.resolve(__dirname, 'cypress'),
      '@Test': path.resolve(__dirname, 'test'),
      '@Services': path.resolve(__dirname, 'src/services'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@CommonLib': path.resolve(__dirname, 'src/commonLib'),
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    svgr(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
  },
})
