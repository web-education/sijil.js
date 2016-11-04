import typescript from 'rollup-plugin-typescript'
import uglify from 'rollup-plugin-uglify'

export default {
    entry: './src/index.ts',
    dest: './dist/bundles/sijil.module.umd.js',
    format: 'umd',
    moduleName: 'SijilModule',
    sourceMap: true,
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/http': 'ng.http',
        'rxjs/add/operator/toPromise': 'Rx'
    },
    plugins: [
        typescript({
            tsconfig: false,
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            sourceMap: true
        }),
        uglify()
    ]
}