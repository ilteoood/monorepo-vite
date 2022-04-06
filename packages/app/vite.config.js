import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'
import {visualizer} from 'rollup-plugin-visualizer'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
    legalComments: 'none'
  },
  plugins: [
    react(),
    svgr(),
    visualizer(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    port: 3000,
    cors: true
  },
  preview: {
    port: 3000,
    cors: true
  },
  build: {
    outDir: 'build',
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})
