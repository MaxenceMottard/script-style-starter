import build from './build'

export default Object.assign(build, {
    input: 'scripts/entry.js',
    output: Object.assign(build.output, {
        file: 'dist/main.js',
        format: 'umd'
    })
})
