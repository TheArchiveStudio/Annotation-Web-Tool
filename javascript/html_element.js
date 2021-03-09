
// Element
class HtmlElement {
	
	// Create Element
	// document.createElement("");
	create (tagName_value) {
		return document.createElement(tagName_value);
	}
	
	// Create Text Node
	// Replacement Function : createTextNode() : 텍스트 노드를 생성
	createTextNode (text_value) {
		return document.createTextNode(text_value);
	}
	
	// Insert Element
	// Replacement Function : parentNode.appendChild(childNode)
	appendChild (parentNode, childNode) {
		return parentNode.appendChild(childNode);
	}
	
	// innerHTML = ""; : 문자 방식으로 요소를 생성.
	// Replacement Function : parentNode.innerHTML = html_value
	innerHTML (parentNode, html_value) {
		return parentNode.innerHTML = html_value;
	}
	
	// Remove Child
	// Replacement Function : parentNode.removeChild(childNode)
	removeChild (parentNode, childNode) {
		parentNode.removeChild(childNode);
	}
}

// Node
class HtmlElementNode {

	this.degree_value = 0; // 자식의 수

	
	// Parent Node 부모 노드
	// Sibling Node 형제 노드
	// 이전 형제
	// 다음 형제
	// 첫번재 형제
	// 마지막 형제

	// external | leaf node 자식이 없는 노드.
	// internal | branch node 차수가 0이 아닌 노드. 즉, 자식이 있는 노드.
}

// Attribute
class HtmlElementAttribute {
	
	// Reference : https://developer.mozilla.org/ko/docs/Web/API/Element
	
	// Display Element
	display (element) {
		element.style.display = element.getAttribute(display) || "";
	}
	
	// Hidden Element
	hidden (element) {
		element.setAttribute("display", element.style.display);
		element.style.display = "hidden";
	}
	
	// Set Attribute
	// Replacement Function : element.setAttribute(name, value)
	set (element, name, value) {
		return element.setAttribute(name, value);
	}
	
	// Get Attribute 
	// Comment : 해당 요소에 지정된 값을 반환 합니다. 만약 주어진 속성이 존재 하지 않는 다면, null 값이나 ""(빈문자열); 을 반환 할 것입니다.
	// Replacement Function : element.getAttribute(name)
	get (element, name) {
		return element.getAttribute(name);
	}
	
	// Has Attribute
	// Replacement Function : element.hasAttribute(name)
	has (element, name) {
		return element.hasAttribute(name);
	}
	
	// Remove Attribute
	// Replacement Function : element.removeAttribute(name)
	remove (element, name) {
		return element.removeAttribute(name);
	}
}
