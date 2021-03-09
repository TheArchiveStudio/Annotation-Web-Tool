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
	
	// 부모
	// 형제
	// 이전 형제
	// 다음 형제
	// 첫번재 형제
	// 마지막 형제
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
