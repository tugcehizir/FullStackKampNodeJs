// querystring parametreleri için
const url = require("url");
const querystring = require("querystring");

const parseURL = href => {
  return url.parse(href);
};

const parseQueryString = href => {
  return querystring.parse(parseURL(href).query);
};

module.exports = {
  parseURL: parseURL,
  parseQueryString: parseQueryString
};
