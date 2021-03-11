// JavaScript Document

// iMAGE-ANNOTATOR
// Comment : 
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.36
// Update Date : 2021-03-11

// TEST CODE

// 할 일
// * 1. 커서 좌표 클래스 = 클릭 커서 위치 클랫스
// * 2. 커서 좌표 클래스 = 커서 이동 위치 클래스

// 1. 클릭 , 저장
// 2. 박스의 경우 세번째 점이 커서의 이동 위치를 추적하여 변경되는 이벤트
//    폴리곤의 경우 다음 점이
// 3. 클릭, 커서 위치 추적 이벤트 해제 , 실시간 변경 해제
// 4. 박스의 경위 두번째 클릭에 3 으로 종료
//    폴리곤의 경우 다음 점 추가 2 실행
//    더블 클릭 혹은 첫번째 점 클릭시 3 실행 종료

function test_setEventListener () {
	
	// Click Workspace SVG Event
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
	
	// * Re: Set Points Attribute Value
	htmlElementAttribute.set(elementPolygonBox, "points", event.offsetX + "," + event.offsetY + " " + (event.offsetX+100) + "," + event.offsetY + " " + (event.offsetX+100) + "," + (event.offsetY+100) + " " + event.offsetX + "," + (event.offsetY+100));
							 
	htmlElement.appendChild(elementG, elementPolygonBox);
	
	// 1. 요소 생성 <- 2.요소 점 목록 생성
	// 3. 요소 목록 추가
}

// Image Annotator
var imageAnnotator;

// Mouse Click Coordinate Plane
var mouseClickCoordinatePlane;
	
// Mouse Cuser Move Coordinate Plane
var mouseCuserMoveCoordinatePlane;

// PAGE ONLOAD
window.onload = function() {
	
	// Set Image Annotator
	imageAnnotator = new ImageAnnotator();
	
	// Set Mouse Click Coordinate Plane
	mouseClickCoordinatePlane = new CoordinatePlane();
	
	// Set Mouse Cuser Move Coordinate Plane
	mouseCuserMoveCoordinatePlane = new CoordinatePlane();
	
	// Test Code - Set Event Listener
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
