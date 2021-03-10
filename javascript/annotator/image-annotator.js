// JavaScript Document

// iMAGE-ANNOTATOR
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.34
// Update Date : 2021-03-08-11-29

var coordinatePlane = new CoordinatePlane();

window.onload = function() {
	var imageAannotatorWorkspace = document.getElementById("image-annotator__workspace");
	var imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
	
	imageAannotatorWorkspace.onclick = function(e){
		testOffsetXY();
	}
	
	// Image Annotation Item List
	var imageAnnotationItemList = new imageAnnotationItemList();
	// + if Image Annotation Item List is Not Empty
}

funcion testOffsetXY (e) {
	
	alert("x : " + e.offsetX + " y : " + e.offsetY);
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

// 폴리곤 바운딩 박스
class polygonBoundingBox {
	
	constructor () {
		this.htmlElement = new HtmlElement();
		this.htmlElementAttribute = HtmlElementAttribute();
		this.htmlStyle = HtmlStyle();
	}	
	
	createHTMLSVGElement () {
		var htmlSVGElement = htmlElement.create("");
	}
}

function insertPolygon () { }

function displayPloygon () { }

function modifyPolygon () { }

function deletePolygon () { }

// Point

function insertPoint () { }

function displayPoint () { }

function modifyPoint () { }

function deletePoint () { }
