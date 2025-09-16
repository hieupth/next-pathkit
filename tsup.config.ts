import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.tsx', 'src/components/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2015',
  splitting: false,
  external: ['react', 'react-dom', 'next'],
  esbuildOptions(options, context) {
    options.jsx = 'automatic'
  },
})