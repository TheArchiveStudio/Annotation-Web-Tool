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
	
	function getY = function () {
		return this.y;
	};
	
	function setY = function (y) { 
		this.y = y;
	};
	
	// geter seter XY
	
	function getXy = function () {
		return [this.x, this.y];
	};
	
	function setXy (x, y) {
		this.x = x;
		this.y = y;
	};
};

// ◇ Coordinate Space System

var CoordinateSpace = CoordinatePlane () {
	
	this.z = 0;
	
	function getZ = function () {
		return this.z;
	};
	
	function setZ = function (y) { 
		this.z = z;
	};
	
	// geter seter XZ
	
	function getXz = function () {
		return [this.x, this.z];
	};
	
	function setXz (x, z) {
		this.x = x;
		this.z = z;
	};
	
	// geter seter YZ
	
	function getYz = function () {
		return [this.y, this.z];
	};
	
	function setYz (y, z) {
		this.y = y;
		this.z = z;
	};
	
	// geter seter YZ
	
	function getXyz = function () {
		return [this.x, this.y, this.z];
	};
	
	function setXyz (x, y, z) {
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
