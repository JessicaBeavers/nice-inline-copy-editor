'use strict';

// set objTemplate
var objTemplate = '<ul id="nice-nav">';
    objTemplate += '<li id="nice-title" title="Go To Homepage">NICE</li>';
    objTemplate += '<li id="nice-min" title="Minimize NICE">\uE001</li>';
    objTemplate += '<li id="nice-off" title="Turn off NICE">\uE003</li>';
    objTemplate += '<li id="nice-diff" title="See Diff">\uE002</li>';
    objTemplate += '<li id="nice-toggle" title="Toggle Original">\uE004</li>';
    objTemplate += '</ul>';
    objTemplate += '<pre id="nice-pre"></pre>';

module.exports = objTemplate;
