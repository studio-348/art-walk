import markdownit from 'markdown-it'


export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets' );
  eleventyConfig.addWatchTarget('./src/assets');
  
  const mdRender = markdownit('default');
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
    return mdRender.render(rawString);
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};