export const YoutubeLink = {
  id: "youtube",
  label: "Youtube",
  fields: [{ name: 'id', label: 'Youtube Video ID', widget: 'string' }],
  pattern: /^<span class="yo-youtube"><iframe src="\/\/www.youtube.com\/embed\/(.*)" frameborder="0" allowfullscreen><\/iframe><\/span>/,
  fromBlock: function (YoutubeLinkMatch) {
    // console.log(match)
    return {
      id: YoutubeLinkMatch && YoutubeLinkMatch[1] ? YoutubeLinkMatch[1] : ""
    };
  },
  toBlock: function (obj) {
    return (
      `<span class="yo-youtube"><iframe src="//www.youtube.com/embed/${obj.id}" frameborder="0" allowfullscreen></iframe></span>`
    );
  },
  toPreview: function (obj) {
    return (
      `<span class="yo-youtube"><iframe src="//www.youtube.com/embed/${obj.id}" frameborder="0" allowfullscreen></iframe></span>`
    );
  }
};