import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import metaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), mdx(), metaTags()]
});