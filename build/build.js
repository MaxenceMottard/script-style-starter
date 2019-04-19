import babel from 'rollup-plugin-babel'

export default {
    output: {
        name: 'MaxenceScripts',
    },
    plugins: [
        babel({
            plugins: [
                'external-helpers',
                'transform-object-assign'
            ]
        })
    ]
}
