// JavaScript Document

/* ANNOTATOR__WORKSPACE--iMAGE-ANNOTATOR 0.32 (2021-03-03) */

window.onload = function() {
	var imageAannotatorWorkspace = document.getElementById("image-annotator__workspace");
	var imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
	
	imageAannotatorWorkspace.onmousemove = function(e){
		cursorX = imageAannotatorWorkspaceTargetImage.offsetX;
		cursorY = imageAannotatorWorkspaceTargetImage.offsetY;
	}
}

// COORDINATE SYSTEM
// Coordinate Plane System

var CoordinatePlane = function () {
	this.x = 0;
	this.y = 0;
	
	// geter seter X
	
	this.getX = function () {
		return this.x;
	};
	
	this.setX = function (value) { 
		this.x = value;
	};
	
	// geter seter Y
	
	function getY = function () {
		return this.y;
	};
	
	function setY = function (value) { 
		this.y = value;
	};
	
	// geter seter XY
	
	function getXy = function () {
		return [this.x, this.y];
	};
	function setXy (xValue, yValue) {
		this.x = xValue;
		this.y = yVlaue;
	};
};

// (*Undefined) Coordinate Space System



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
