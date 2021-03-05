// JavaScript Document

// COORDINATE
// Comment : 기본 좌표 객체.
// Full Directory : javascript / 
// Version : 0.2
// Update Date : 2021-03-05-16-25

// Coordinate Plane

class CoordinatePlane {
	
	constructor (x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}
	
	// geter seter X
	
	getX () {
		return this.x;
	}
	
	setX (x) { 
		this.x = x;
	}
	
	// geter seter Y
	
	getY () {
		return this.y;
	}
	
	setY (y) { 
		this.y = y;
	}
	
	// geter seter XY
	
	getXy () {
		return [this.x, this.y];
	}
	
	setXy (x, y) {
		this.x = x;
		this.y = y;
	}
}

// Coordinate Space

class CoordinateSpace extends CoordinatePlane {
	
	constructor (x, y, z) {
		super(x);
		this.z = z || 0;
	}
	
	getZ () {
		return this.z;
	}
	
	setZ (y) { 
		this.z = z;
	}
	
	// geter seter XZ
	
	getXz () {
		return [this.x, this.z];
	}
	
	setXz (x, z) {
		this.x = x;
		this.z = z;
	}
	
	// geter seter YZ
	
	getYz () {
		return [this.y, this.z];
	}
	
	setYz (y, z) {
		this.y = y;
		this.z = z;
	}
	
	// geter seter XYZ
	
	getXyz () {
		return [this.x, this.y, this.z];
	}
	
	setXyz (x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}
