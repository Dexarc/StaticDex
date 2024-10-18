import { defineConfig } from 'astro/config';
export default defineConfig({
    integrations: [image()],
    site: 'https://StaticDex.github.io',
    base: '/StaticDex'  
});