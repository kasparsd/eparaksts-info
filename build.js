let Metalsmith = require('metalsmith');
let markdown = require('metalsmith-markdown');
let layouts = require('metalsmith-layouts');
let permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "eID un eparaksta rokasgrāmata",
    url: "https://eparaksts.info"
  })
  .source('./content')
  .destination('./build')
  .clean(false)
  .use(markdown({
    smartypants: true
  }))
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    default: 'default.html'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
