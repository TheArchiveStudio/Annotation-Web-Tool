// JavaScript Document

// LIST
// Comment : 리스트 클래스.
// Version : 1.0
// Last Update Date : 2021-01-28

var List = function () {
	
	this.list = [];
	
	// 리스트의 길이를 저장하는 변수
	this.listSize = 0;
	// 리스트 탐색 관련 기능을 위해 위치를 나타내는 변수
	this.position = 0;
	
	/**
	 * 추가
	 * 1. 배열 뒤에 요소 추가하는 함수
	 * 2. 요소를 원하는 위치에 추가하고 그 결과를 boolean 으로 반환하는 함수
	 */
	
	// 배열 뒤에 요소 추가하는 함수
	this.append = function (element) {
		this.list[this.listSize++] = element;
	}
	
	// 요소를 원하는 위치에 추가하고 그 결과를 boolean 으로 반환하는 함수
	this.insert = function (element, after){
		var insertPosition = this.find(after);
		if(insertPosition > -1) {
			this.list.splice(insertPosition+1, 0, element);
			++this.listSize;
			return true;
		}
		return false;
	}
	
	/**
	 * 1. 리스트의 길이를 반환하는 함수
	 * 2. 리스트 요소를 확인하는 함수
	 */
	
	// 리스트의 길이를 반환하는 함수
	this.length = function (){
		return this.listSize;
	}
	
	// 리스트 요소를 확인하는 함수
	this.toString = function () {
		return "["+this.list+"]";
	}
	
	/**
	 * 탐색(element)
	 * 1. 리스트에 특정 요소가 있는지 그 결과를 boolean 으로 반환하는 함수
	 * 2. 요소의 index를 구하는 함수 (존재하지 않는 경우 -1 반환)
	 */
	
	// 리스트에 특정 요소가 있는지 그 결과를 boolean 으로 반환하는 함수
	this.contains = function (element) {
		for(var i=0;i<this.list.length;i++) {
			if(this.list[i] == element) {
				return true;
			}
		}
		return false;
	}
	
	// 요소의 index를 구하는 함수 (존재하지 않는 경우 -1 반환)
	this.find = function (element) {
		for(var i=0; i<this.list.length; i++) {
			if(this.list[i] == element) {
				return i;
			}
		}
		return -1;
	}
	
	/**
	 * 탐색(position)
	 * 1. index 로 요소를 반환하는 함수
	 * 2. position 이 보고 있는 현재 위치의 값을 반환 한다.
	 * 3. position 이 보고 있는 현재 위치를 반환 한다.
	 * 4. position 이 특정 위치를 보게 한다.
	 * 5. position 이 맨 앞을 보게 한다.
	 * 6. position 이 맨 뒤를 보게 한다.
	 * 7. position 이 이전 위치를 보게 한다.
	 * 8. position 이 다음 위치를 보게 한다.
	 */
	
	// index 로 요소를 반환하는 함수
	this.get = function (position){
		return this.list[position];
	}
	
	// position 이 보고 있는 현재 위치의 값을 반환 한다.
	this.getElement = function (){
		return this.list[this.position];
	}
	
	// position 이 보고 있는 현재 위치를 반환 한다.
	this.currPosition = function () {
		return this.position;
	}
	
	// position 이 특정 위치를 보게 한다.
	this.moveTo = function (position) {
		this.position = position;
	} 
	
	// position 이 맨 앞을 보게 한다.
	this.front = function () {
		this.position = 0;
	}
	
	// position 이 맨 뒤를 보게 한다.
	this.end = function () {
		this.position = this.listSize-1;
	}
	
	// position 이 이전 위치를 보게 한다.
	this.prev = function () {
		if(this.position > 0)
			--this.position;
	}
	
	// position 이 다음 위치를 보게 한다.
	this.next = function () {
		if(this.position < this.listSize-1) {
			++this.position;
		}
	}

	/**
	 * 삭제
	 * 1. 요소를 삭제하고 그 결과를 boolean 으로 반환하는 함수
	 * 2. 리스트의 모든 요소를 삭제하는 함수
	 */	
	
	// 요소를 삭제하고 그 결과를 boolean 으로 반환하는 함수
	this.remove = function (element){
		var foundAt = this.find(element);

		if(foundAt > -1) {
			this.list.splice(foundAt, 1);
			--this.listSize;
			return true;
		}
		return false;
	}
	
	// 리스트의 모든 요소를 삭제하는 함수
	this.clear = function () {
		delete this.list;
		this.list.length = 0;
		this.listSize = 0;
	}
}
