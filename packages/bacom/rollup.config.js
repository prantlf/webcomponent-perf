import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { minify } from 'rollup-plugin-swc-minify'
import style from 'bacom/tools/style/rollup'
import templ from 'bacom/tools/templ/rollup'

export default {
  input: ['src/counter.ts', 'src/render.ts'],
  output: { dir: 'dist' },
  plugins: [
    nodeResolve(), style({ minify: true }), templ({ minify: true }),
    typescript(), minify()
  ]
}
