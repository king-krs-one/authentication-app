import esbuild from "esbuild"

esbuild.build({
    entryPoints: ['src/Sample.ts'],
    outfile: 'dist/bundle.js'
})