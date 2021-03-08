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
	
	// Image Annotation Item List
	var imageAnnotationItemList = new imageAnnotationItemList();
	// + if Image Annotation Item List is Not Empty
	
	
}

/* POINT
 * 1. Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
 */

// Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
class imageAnnotationItemShapePointList {
	
	construct (item_id) {
		
		this.item_id = item_id;
		this.PointList = new List();
	}
}

// Set-Controll-Point__Xy

setDocumentElementControllPointXy (element, x, y) {
	element.setAttribute("x", );
	element.setAttribute("y", );
}

// Create-Controll-Point
createDocumentElementControllPoint () {
	var element = document.createElement("use");
	element.setAttribute("id", );
	element.setAttribute("class", );1
}

// Append-Controll-Point
appendDocumentElementControllPoint (id) {
	id.appendChild();
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
