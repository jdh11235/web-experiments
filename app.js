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

	compiledString = compiledString.substring(1);

	return compiledString;
};


var linksPath = '@';
var linksContainer = document.getElementById('links');


function linkTitle(link) {
	var title = link.split('/').pop();

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

function listFolder(path) {
	var file = getFile(path);
	var text = file.response;
	var list = [];

	//do some regex to enumerate filepaths from text into list

	return list;
}

function writeLinks(list) {
	for (var link in list) {
		var a = document.createElement('a');

		a.href = link;
		a.innerHTML = linkTitle(link);

		linksContainer.appendChild(a);
	}
}


writeLinks(listFolder(linksPath));

// linkTitle('http://jdh11235.github.io/web-experiments/@/inline-autocomplete');
// => "Inline Autocomplete"
