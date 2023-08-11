import esbuild from "esbuild"

esbuild.build({
    entryPoints: ['src/Sample.ts'],
    minify: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile: 'dist/bundle.js',
    sourcemap: true,
    watch: {
        onRebuild: (err) => {

        }
    },
    plugins: [

    ]
}).catch(() => process.exit(1))