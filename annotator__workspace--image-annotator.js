// JavaScript Document

/* ANNOTATOR__WORKSPACE--iMAGE-ANNOTATOR 0.32 (2021-03-03-18-33) */

window.onload = function() {
	var imageAannotatorWorkspace = document.getElementById("image-annotator__workspace");
	var imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
	
	imageAannotatorWorkspace.onmousemove = function(e){
		cursorX = imageAannotatorWorkspaceTargetImage.offsetX;
		cursorY = imageAannotatorWorkspaceTargetImage.offsetY;
	}
}

// ◆ COORDINATE SYSTEM

// ◇ Coordinate Plane System

var CoordinatePlane = function () {
	
	this.x = 0;
	this.y = 0;
	
	// geter seter X
	
	this.getX = function () {
		return this.x;
	};
	
	this.setX = function (x) { 
		this.x = x;
	};
	
	// geter seter Y
	
	this.getY = function () {
		return this.y;
	};
	
	this.setY = function (y) { 
		this.y = y;
	};
	
	// geter seter XY
	
	this.getXy = function () {
		return [this.x, this.y];
	};
	
	this.setXy = function (x, y) {
		this.x = x;
		this.y = y;
	};
};

// ◇ Coordinate Space System

var CoordinateSpace = CoordinatePlane () {
	
	this.z = 0;
	
	this.getZ = function () {
		return this.z;
	};
	
	this.setZ = function (y) { 
		this.z = z;
	};
	
	// geter seter XZ
	
	this.getXz = function () {
		return [this.x, this.z];
	};
	
	this.setXz = function (x, z) {
		this.x = x;
		this.z = z;
	};
	
	// geter seter YZ
	
	this.getYz = function () {
		return [this.y, this.z];
	};
	
	this.setYz = function (y, z) {
		this.y = y;
		this.z = z;
	};
	
	// geter seter YZ
	
	this.getXyz = function () {
		return [this.x, this.y, this.z];
	};
	
	this.setXyz = function (x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	};
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
