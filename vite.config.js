/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default (config) => {
  const { mode } = config;
  const { VITE_PORT } = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [react()],
    server: { port: VITE_PORT || 9003 },
  });
};
