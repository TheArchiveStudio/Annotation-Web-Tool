// JavaScript Document

// iMAGE-ANNOTATOR_ITEM
// Full Directory : javascript \ annotator \ workspace \ image-annotator
// Version : 0.1
// Update Date : 2021-03-03-18-37


/* ITEM
 * 1. Image Annotation Item List : 아이템 목록
 * 2.
*/

// Image Annotation Item List : 아이템 목록
class ImageAnnotationItemList {
	
	construct (data_id) {
		
		this.data_id = data_id;
		this.itemList = new List();	
	}
	
	getDataId () {
		return this.data_id;
	}
	
	setDataId (data_id) {
		this.data_id = data_id;
	}
	
	getItemList () {
		return this.itemList;
	}
	
	setItemList (itemList) {
		this.itemList = itemList;
	}
}

class ImageAnnotationItem {
	
	construct () {
		this.data_id = "";
		this.class_id = "";
		this.item_id = "";
		this.shapeType_value = "";
		this.shapePointList = new imageAnnotationItemShapePointList();
	}
	
	// Data ID Getter
	getDataId () {
		return this.data_id;
	}
	
	// Data ID Setter
	setDataId (data_id) {
		this.data_id = data_id;
	}
	
	// Class ID Getter
	getClassId () {
		return this.class_id;
	}
	
	// Class ID Setter
	setClassId (class_id) {
		this.class_id = class_id;
	}
	
	// Item ID Getter
	getItemId () {
		return this.item_id;
	}
	
	// Item ID Setter
	setItemId (item_id) {
		this.item_id = item_id;
	}
	
	// Item ID Getter
	getShapeTypeValue () {
		return this.shapeType_value;
	}
	
	// Item ID Setter
	setShapeTypeValue (shapeType_value) {
		this.shapeType_value = shapeType_value;
	}
	
	// Item ID Getter
	getShapePointList () {
		return this.shapePointList;
	}
	
	// Item ID Setter
	setShapePointList (shapePointList) {
		this.shapePointList = shapePointList;
	}
}

class HtmlElementimageAnnotationItem {
	
	insert () {
	}
	
	display () {
	}
	
	property () {
	}
	
	hidden () {
	}
	
	delet () {
	}
}
