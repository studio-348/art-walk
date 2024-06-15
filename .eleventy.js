import markdownit from 'markdown-it'


export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets' );
  eleventyConfig.addWatchTarget('./src/assets');

  eleventyConfig.addPassthroughCopy('./src/posts/images' );
  eleventyConfig.addWatchTarget('./src/posts/images' );
  
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
    return `<p class="meta-text"><span class="meta-bold">Artist:</span> <span>${artist.name}${link}</span></p>`
  });

  eleventyConfig.addShortcode('location', function(location, city){
    let link = "";
    let address = location.address
    if(location.geo) {
      // do something with geo
    } else if (location.address) {
      let place = "";
      if(city) {
        place = city.split(" ").join(",+");
      }
      place = location.address.split(" ").join("+") + ",+" +place;
      link = `https://www.google.com/maps/place/${place}`;
    }
    return `<p class="meta-text"><span class="meta-bold">Location:</span> <span><a href="${link}" target="_blank">${address}</a></span></p>`
  })

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
};