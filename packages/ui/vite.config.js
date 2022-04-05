import {defineConfig} from 'vite'
import svgr from 'vite-plugin-svgr'
import {visualizer} from 'rollup-plugin-visualizer'

import pkg from './package.json'

export default defineConfig({
  plugins: [
    svgr(),
    visualizer()
  ],
  build: {
    lib: {
      entry: '',
      name: pkg.name
    },
    rollupOptions: {
      input: './src/index.js',
      output: [
        {
          dir: 'dist/cjs',
          format: 'cjs',
          sourcemap: false
        },
        {
          dir: 'dist/es',
          format: 'es',
          sourcemap: false
        }
      ],
      external: [
        /@babel\/runtime/,
        'react',
        'react-dom'
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  esbuild: {
    minify: true,
    keepNames: true,
    legalComments: 'none'
  }
})
