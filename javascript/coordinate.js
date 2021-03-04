// JavaScript Document

// COORDINATE
// Comment : 기본 좌표 객체.
// Full Directory : javascript
// Version : 0.1
// Update Date : 2021-03-03-18-33

// Coordinate Plane

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

// Coordinate Space

var CoordinateSpace = function () {
	
 	this = CoordinatePlane;
	
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
	
	// geter seter XYZ
	
	this.getXyz = function () {
		return [this.x, this.y, this.z];
	};
	
	this.setXyz = function (x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	};
}
