// JavaScript Document

// iMAGE-ANNOTATOR
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.34
// Update Date : 2021-03-08-11-29

// JavaScript Document

// iMAGE-ANNOTATOR
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.35
// Update Date : 2021-03-10

window.onload = function() {
				
	var htmlElementimageAannotatorWorkspaceSvg = document.getElementById("js-image-annotator__workspace__svg");
	var imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
	var cuserEventCoordinatePlane = new CoordinatePlane();

	htmlElementimageAannotatorWorkspaceSvg.onclick = function(e) {
		cuserEventCoordinatePlane.setXy(e.offsetX, e.offsetY);
		testOffsetXY(cuserEventCoordinatePlane);
	}
}

// TEST CODE START
function testOffsetXY (cuserEventCoordinatePlane) {
	alert('x : ' + cuserEventCoordinatePlane.getX() + ' y : ' + cuserEventCoordinatePlane.getY());
}
// TEST CODE END

var coordinatePlane = new CoordinatePlane();

/* POINT
 * 1. Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
 */

// Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
class imageAnnotationItemShapePointList {
	
	construct (item_id) {
		
		this.item_id = item_id;
		this.PointList = new List();
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
		element.setAttribute("class", );
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


var coordinatePlane = new CoordinatePlane();

/* POINT
 * 1. Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
 */

// Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
class imageAnnotationItemShapePointList {
	
	construct (item_id) {
		
		this.item_id = item_id;
		this.PointList = new List();
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
		element.setAttribute("class", );
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
