import 'dotenv/config'

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	base: process.env.VITE_ENV === 'prod' ? '/bot-v2-website/' : '.',
	server: { port: 3000 },
})
