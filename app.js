/* Copyright (c) 2015 Jonathan Herman. MIT License. */
/* Web Experiments */
/* https://github.com/jdh11235/web-experiments */

'use strict';


var linksPath = '@';
var linksContainer = document.getElementById('links');


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


//listFolder(linksPath);
