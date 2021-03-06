let Metalsmith = require('metalsmith');
let markdown = require('metalsmith-markdown');
let layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
  .metadata({
    title: "eID un eParaksta rokasgrāmata",
    site_title: "eParaksta rokasgrāmata",
    url: "https://eparaksts.info"
  })
  .source('./content')
  .destination('./build')
  .use(markdown({
    smartypants: true
  }))
  .use(layouts({
    engine: 'handlebars',
    default: 'default.html'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
