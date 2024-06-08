import markdownit from 'markdown-it'


export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets' );
  eleventyConfig.addWatchTarget('./src/assets');
  
  const mdRender = markdownit('default');
  eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
    return mdRender.render(rawString);
  });

  eleventyConfig.addShortcode("artist", function(artist) {
    let link = " ";
    if (artist.instagram) {
      const handle = artist.instagram.replace("@", "");
      link += `<a href="https://www.instagram.com/${handle}" target="_blank">${artist.instagram}</a>`
    }
    return `<p>Artist: <span>${artist.name}${link}</span></p>`
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};