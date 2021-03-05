// JavaScript Document

// iMAGE-ANNOTATOR
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.33
// Update Date : 2021-03-03-18-33

var coordinatePlane = new CoordinatePlane();

window.onload = function() {
	var imageAannotatorWorkspace = document.getElementById("image-annotator__workspace");
	var imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
	
	imageAannotatorWorkspace.onmousemove = function(e){
		cursorX = imageAannotatorWorkspaceTargetImage.offsetX;
		cursorY = imageAannotatorWorkspaceTargetImage.offsetY;
	}
	
	
}

// Item

function insertItem () { }

function displayItem () { }

// Set-Controll-Point__Xy

setDocumentElementControllPointXy (x, y) {
	
}

// Create-Controll-Point
createDocumentElementControllPoint () {
	var element = document.createElement("use");
	element.
}

// Append-Controll-Point
appendDocumentElementControllPoint () {
	//-target-.appendChild();
}

// Dispaly-Controll-Point
dispalyDocumentElementControllPoint () {

}

hideDocumentElementControllPoint () {

}

// Delete-Document-Element__Controll-Point
deleteDocumentElementControllPoint () {

}


function modifyItem () { }

function deleteItem () { }

// Ploygon

function insertPolygon () { }

function displayPloygon () { }

function modifyPolygon () { }

function deletePolygon () { }

// Point

function insertPoint () { }

function displayPoint () { }

function modifyPoint () { }

function deletePoint () { }

//
