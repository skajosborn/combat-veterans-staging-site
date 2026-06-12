import * as esbuild from 'esbuild'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const requireFromRoot = createRequire(path.join(root, 'package.json'))

const localNodeModules = {
  name: 'local-node-modules',
  setup(build) {
    build.onResolve({ filter: /^[^.@/]/ }, (args) => {
      try {
        return { path: requireFromRoot.resolve(args.path, { paths: [args.resolveDir] }) }
      } catch {
        return null
      }
    })
    build.onResolve({ filter: /^react($|\/)/ }, (args) => {
      try {
        return { path: requireFromRoot.resolve(args.path) }
      } catch {
        return null
      }
    })
    build.onResolve({ filter: /^react-dom($|\/)/ }, (args) => {
      try {
        return { path: requireFromRoot.resolve(args.path) }
      } catch {
        return null
      }
    })
  },
}

await esbuild.build({
  absWorkingDir: root,
  entryPoints: ['wordpress/cvc-theme/src/veteran-application-entry.tsx'],
  bundle: true,
  format: 'iife',
  outfile: 'wordpress/cvc-theme/assets/js/veteran-application.js',
  loader: { '.tsx': 'tsx' },
  jsx: 'automatic',
  alias: { '@': root },
  plugins: [localNodeModules],
  minify: true,
  logLevel: 'info',
})
