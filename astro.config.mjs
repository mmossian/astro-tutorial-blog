import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://663616eda93f24dc8dcbe835--mm-astro-blog.netlify.app",
  integrations: [preact()]
});