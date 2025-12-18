import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/rspack';
import { envVar } from './src/helpers/constants';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
        }),
      ],
    },
  },
  html: {
    template: 'public/index.html',
    title: 'Waheim',
  },
  server: {
    port: 3000,
    base: envVar.isProd ? envVar.base : '',
    historyApiFallback: true,
  },
});
