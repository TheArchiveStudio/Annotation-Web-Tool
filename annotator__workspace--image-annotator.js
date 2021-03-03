// JavaScript Document

/* ANNOTATOR__WORKSPACE--iMAGE-ANNOTATOR 0.32 (2021-03-02) */

window.onload = function() {
	var imageAannotatorWorkspace = document.getElementById("image-annotator__workspace");
	var imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
	
	imageAannotatorWorkspace.onmousemove = function(e){
		cursorX = imageAannotatorWorkspaceTargetImage.offsetX;
		cursorY = imageAannotatorWorkspaceTargetImage.offsetY;
	}
}

function CoordinatePlane () {
	var x;
	var y;
	
	// geter seter X
	function setX ();
	function getX ();
	// geter seter Y
	function getY ();
	function setY ();
	// geter seter XY
	function getXy ();
	function setXy ();
}

// Item

function insertItem () { }

function displayItem () { }

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
