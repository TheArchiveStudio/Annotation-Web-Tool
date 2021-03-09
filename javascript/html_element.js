// JavaScript Document

// HTML ELEMENT
// Comment : HTML 요소.
// Version : 0.1
// Last Update Date : 2021-03-09-20-13
// Reference : https://developer.mozilla.org/ko/docs/Web/API/Element

// Element
class HtmlElement {
	
	// Create Element
	// document.createElement("");
	create (tagName_value) {
		return document.createElement(tagName_value);
	}
	
	// Create Text Node
	// Replacement Standard Function : createTextNode() : 텍스트 노드를 생성
	createTextNode (text_value) {
		return document.createTextNode(text_value);
	}
	
	// Insert Element
	// Replacement Standard Function : parentNode.appendChild(childNode);
	appendChild (parentNode, childNode) {
		return parentNode.appendChild(childNode);
	}
	
	// innerHTML = ""; : 문자 방식으로 요소를 생성.
	// Replacement Standard Function : parentNode.innerHTML = "html_value";
	innerHTML (parentNode, html_value) {
		return parentNode.innerHTML = html_value;
	}
	
	// Remove Child
	// Replacement Standard Function : parentNode.removeChild(childNode)
	removeChild (parentNode, childNode) {
		return parentNode.removeChild(childNode);
	}
}

// Node
class HtmlElementNode {
	
	constructor (element) {
		
		this.element = element;
		this.degree_value; // 자식 노드의 수.
		this.leafNode_state; // 자식이 없는 노드.
		this.branchNode_state; // 차수가 0 이 아닌 노드. 즉, 자식이 있는 노드.
	}
	
	// Parent Node 부모 노드
	
	// Sibling Node 형제 노드
	
	// 이전 형제
	
	// 다음 형제
	
	// 첫번재 형제
	
	// 마지막 형제
	
}

// Attribute
class HtmlElementAttribute {
	
	// Set Attribute
	// Replacement Standard Function : element.setAttribute(name, value)
	set (element, name, value) {
		return element.setAttribute(name, value);
	}
	
	// Get Attribute 
	// Comment : 해당 요소에 지정된 값을 반환 합니다. 만약 주어진 속성이 존재 하지 않는 다면, null 값이나 ""(빈문자열); 을 반환 할 것입니다.
	// Replacement Standard Function : element.getAttribute(name)
	get (element, name) {
		return element.getAttribute(name);
	}
	
	// Has Attribute
	// Replacement Standard Function : element.hasAttribute(name)
	has (element, name) {
		return element.hasAttribute(name);
	}
	
	// Remove Attribute
	// Replacement Standard Function : element.removeAttribute(name)
	remove (element, name) {
		return element.removeAttribute(name);
	}
}

class HtmlStyle {
	
	// Display Element
	display (element) {
		element.style.display = element.getAttribute(display) || "";
	}
	
	// Hidden Element
	hidden (element) {
		element.setAttribute("display", element.style.display);
		element.style.display = "hidden";
	}
}
