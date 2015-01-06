/* Copyright (c) 2015 Jonathan Herman. MIT License. */
/* Web Experiments */
/* https://github.com/jdh11235/web-experiments */

'use strict';


String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

String.prototype.toTitleCase = function() {
	var words = this.split(' ');
	var compiledString = '';

	for (var i = 0; i < words.length; i++) {
		compiledString += (' ' + words[i].capitalize());
	}

	compiledString = compiledString.slice(1);

	return compiledString;
};


var linksPath = '@';
var linksContainer = document.getElementById('links');


function urlTitle(url) {
	var title = url.split('/').pop();

	title = title.replace(/-/gi, ' ');
	title =	title.toTitleCase();

	return title;
}

function getFile(url) {
	var request = new XMLHttpRequest();

	request.open('get', url, true);
	request.send();

	return request;
}

function listFiles(path) {
	var file = getFile(path);
	var text = file.response;
	var list = [];

	//do some regex to enumerate filepaths from text into list

	return list;
}

function writeLinks(links, parent) {
	for (var link in links) {
		var a = document.createElement('a');

		a.href = link;
		a.innerHTML = urlTitle(link);

		parent.appendChild(a);
	}
}


writeLinks(listFiles(linksPath), linksContainer);

// urlTitle('http://jdh11235.github.io/web-experiments/@/inline-autocomplete');
// => "Inline Autocomplete"
