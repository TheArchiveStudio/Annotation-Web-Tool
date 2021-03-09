class HtmlElement {
	
	// Create Element
	// document.createElement("");
	
	// Insert Element
	insertElement () {
	}
	
	// Display Element
	displayElement () {
	}
	
	property () {
	}
	
	hiddenElement () {
	}
	
	deleteElement () {
	}
}

class HtmlElementNode {

	this.degree = 0; // 자식의 수

	
	// Parent Node 부모 
	// Sibling Node 형제
	// 이전 형제
	// 다음 형제
	// 첫번재 형제
	// 마지막 형제

	// external | leaf node 자식이 없는 노드.
	// internal | branch node 차수가 0이 아닌 노드. 즉, 자식이 있는 노드.
}

class HtmlElementAttribute {
	
	// Set Attribute
	// element.setAttribute(name, value)
	set (element, name, value) {
		return element.setAttribute(name, value);
	}
	
	// Get Attribute
	// element.getAttribute(name)
	get (element, name) {
		return element.getAttribute(name);
	}
	
	// Has Attribute
	// element.hasAttribute(name)
	has (element, name) {
		return element.hasAttribute(name);
	}
	
	// Remove Attribute
	// element.removeAttribute(name)
	remove (element, name) {
		return element.removeAttribute(name);
	}
}
