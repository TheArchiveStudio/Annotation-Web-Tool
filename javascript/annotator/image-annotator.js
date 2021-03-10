// JavaScript Document

// iMAGE-ANNOTATOR
// Comment : 
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.36
// Update Date : 2021-03-11

// TEST CODE
function test_setEventListener () {
	
	document.getElementById("js-image-annotator__workspace__svg").addEventListener("click", test_alert_offsetXY);
}

function test_alert_offsetXY (event) {
	console.log('x : ' + event.offsetX + ' y : ' + event.offsetY);
	
	test_addSvgElement(event);
}

function test_addSvgElement (event) {
	
	var htmlElement_imageAannotator_Workspace_Svg = document.getElementById("js-image-annotator__workspace__svg");
	
	var htmlElement = new HtmlElement();
	
	var elementG = htmlElement.createSVG("g");
	
	var htmlElementAttribute = new HtmlElementAttribute();
	
	htmlElementAttribute.set(elementG, "class", "annotation--svg-data-item-wire");
	
	htmlElement.appendChild(document.getElementById("js-image-annotator__workspace__annotation--svg-data-wire"), elementG);
	
	var elementPolygonBox = htmlElement.createSVG("polygon");
	
	htmlElementAttribute.set(elementPolygonBox, "class", "item polygon-rect polygon-bounding-rect--selected cursor--cross-cursor");
	
	htmlElementAttribute.set(elementPolygonBox, "points", event.offsetX + "," + event.offsetY + " " + (event.offsetX+100) + "," + event.offsetY + " " + (event.offsetX+100) + "," + (event.offsetY+100) + " " + event.offsetX + "," + (event.offsetY+100));
							 
	htmlElement.appendChild(elementG, elementPolygonBox);
	
	// 1. 요소 생성 <- 2.요소 점 목록 생성
	// 3. 요소 목록 추가
}

// PAGE ONLOAD
window.onload = function() {
				
	this.imageAnnotator = new ImageAnnotator();
	test_setEventListener();
	
}

// IMAGE ANNOTATOR
class ImageAnnotator {
	
	construct () {
		this.workspace_annotation_svg = document.getElementById("js-image-annotator__workspace__svg");
		this.imageAannotatorWorkspaceTargetImage = document.getElementById("image-annotator__workspace__target-image");
		this.workspace_annotation_svg_data_wire = document.getElementById("js-image-annotator__workspace__annotation--svg-data-wire");
		this.cuserEventCoordinatePlane = new CoordinatePlane();
	}
}

var coordinatePlane = new CoordinatePlane();

/* POINT
 * 1. Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
 */

// Image Annotation Item Shape Point List : 한 아이템의 포인트 목록
class imageAnnotationItemShapePointList {
	
	construct (item_id) {
		
		this.item_id = item_id;
		this.point_list = new List() || [];
	}
	
	// Set-Controll-Point__Xy

	setDocumentElementControllPointXy (element, x, y) {
		element.setAttribute("x", "");
		element.setAttribute("y", "");
	}

	// Create-Controll-Point
	createDocumentElementControllPoint () {
		var element = document.createElement("use");
		element.setAttribute("id", "");
		element.setAttribute("class", "");
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
