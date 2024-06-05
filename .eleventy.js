export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets' );
    eleventyConfig.addWatchTarget('./src/assets');
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };