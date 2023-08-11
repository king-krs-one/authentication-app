import esbuild from "esbuild"

const args = process.argv.slice(2)
const watch = args.includes('--watch')

const watchPlugin = {
  name: 'watch-plugin',
  setup(build) {
    build.onStart(() => {
      console.log(`Build starting: ${new Date(Date.now()).toLocaleString()}`)
    })
    build.onEnd((result) => {
      if (result.errors.length > 0) {
        console.log(`Build finished, with errors: ${new Date(Date.now()).toLocaleString}`)
      } else {
        console.log(`Build finished, succesfully: ${new Date(Date.now()).toLocaleString()}`)
      }
    })
  }
}

const context = await esbuild.context({
  bundle: true,
  entryPoints: ['src/index.tsx'],
  minify: true,
  outfile: 'dist/bundle.js',
  sourcemap: true,
  plugins: [
    watchPlugin
  ]
})

if (watch) {
  await context.watch()
  console.log('watching....')
}
else {
  context.rebuild()
  context.dispose()
}
