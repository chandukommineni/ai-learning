// vitest.config.ts
import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        // This plugin helps resolve TypeScript path aliases from tsconfig.json
        tsconfigPaths(),
        swc.vite({
            module: {
                type: 'es6',
            },
        }),
    ],
    test: {
        globals: true,
        root: './',
        // Optionally, configure coverage reports
        // coverage: {
        //   provider: 'v8', // or 'istanbul'
        //   reporter: ['html', 'lcov'],
        // },
    },
    resolve: {
        // Manually ensure correct path aliases if vite-tsconfig-paths has issues
        alias: {
            'src': resolve(__dirname, './src'),
        },
    },
});
