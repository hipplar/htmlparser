var request     = require("request"),
    $           = require('cheerio'),
    list        = [],
    fs          = require('fs'),
    csv         = require('csv');

request({
  uri: "http://frontenddesignconference.com/attending",
}, function(error, response, body) {

    var parsedHTML = $.load(body);

    parsedHTML('ol').map(function(i, element) {
      element = $(element);
      
      var ol = $.load(element.html());
      var attendee = {
        codepen:    ol('.attendee-codepen a').attr('href'),
        company:    ol('.attendee-company').text(),
        dribble:    ol('.attendee-dribbble a').attr('href'),
        github:     ol('.attendee-github a').attr('href'),
        name:       ol('.attendee-name').text(),
        title:      ol('.attendee-title').text(),        
        twitter:    ol('.attendee-twitter a').attr('href'),
        website:    ol('.attendee-website a').attr('href')
      };

      list.push(attendee);      
    });

    console.log(list);
});

