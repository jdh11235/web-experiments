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


function urlTitle(url) {
	var title = url.split('/').pop();

	title = title.replace(/-/gi, ' ');
	title =	title.toTitleCase();

	return title;
}

function getFile(url, callback) {
	var request = new XMLHttpRequest();

	request.onload = callback;
	request.open('get', url, true);
	request.send();
}

function extractLinks(text) {
	var links = text.match(/<a.+>/gi);

	links.forEach(function(value, index, arr) {
		arr[index] = value.match(/".+"/gi)[0].slice(1, -1);
	});

	return links;
}

//parent must be a <ul> DOM element
function writeLinks(links, parent) {
	for (var i = 0, link, a, li; i < links.length; i++) {
		link = links[i];
		li = document.createElement('li');
		a = document.createElement('a');

		a.href = link;
		a.innerHTML = urlTitle(link);

		li.appendChild(a);
		parent.appendChild(li);
	}
}

function processLinks() {
	var links = extractLinks(this.response);

	//remove dotfile links
	links = links.filter(function(value, index, arr) {
		return (value.slice(0, 1) === '.') ? false : true;
	});

	//remove trailing slashes from links
	links.forEach(function(value, index, arr) {
		if (value.slice(-1) === '/') {
			arr[index] = value.slice(0, -1);
		}
	});

	//sort links alphabetically
	links.sort();

	writeLinks(links, linksContainer);
}


var linksContainer = document.getElementById('links');
var linksPath = '@';
getFile(linksPath, processLinks);
