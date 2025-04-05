import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Preprocessor option
  preprocess: preprocess({
    scss: {
      prependData: '@import "src/lib/styles/_variables.scss"; @import "src/lib/styles/_mixins.scss";'
    }
  }),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, you can replace this with adapter-static or a custom adapter
    adapter: adapter()
  }
};

export default config;
