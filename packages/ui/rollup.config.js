import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import svgr from '@svgr/rollup'
import postcss from 'rollup-plugin-postcss'
import terser from 'rollup-plugin-terser-default'
import visualizer from 'rollup-plugin-visualizer'
import babel from '@rollup/plugin-babel'
import monaco from 'rollup-plugin-monaco-editor'

const rollupConfig = {
  input: './src/index.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs'
    },
    {
      dir: 'dist/es',
      format: 'es'
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: ['node_modules/**', '../../node_modules/**'],
      presets: ['@babel/env', '@babel/preset-react']
    }),
    peerDepsExternal(),
    resolve({
      browser: true,
      extensions: ['.mjs', '.js', '.json', '.node', '.jsx']
    }),
    commonjs(),
    monaco({
      languages: ['dockerfile', 'json', 'markdown', 'shell', 'javascript', 'yaml']
    }),
    postcss({
      extensions: ['.css'],
      minimize: true
    }),
    svgr(),
    terser(),
    visualizer()
  ]
}

export default rollupConfig
