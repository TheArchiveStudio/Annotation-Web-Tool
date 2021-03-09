// JavaScript Document

// HTML ELEMENT
// Comment : HTML 요소.
// Version : 0.1
// Last Update Date : 2021-03-10-01-19
// Reference : https://developer.mozilla.org/ko/docs/Web/API/Element

// Element
class HtmlElement {
	
	// Create Element
	// Commnet : 요소를 생성합니다.
	// Replacement Standard Function : document.createElement("");
	create (tagName_value) {
		return document.createElement(tagName_value);
	}
	
	// Create Text Node
	// Commnet : 텍스트 노드를 생성합니다.
	// Replacement Standard Function : document.createTextNode("text_value");
	createTextNode (text_value) {
		return document.createTextNode(text_value);
	}
	
	// Insert Element
	// Commnet : 자식 요소를 추가합니다.
	// Replacement Standard Function : parentNode.appendChild(childNode);
	appendChild (parentNode, childNode) {
		return parentNode.appendChild(childNode);
	}
	
	// Inner HTML
	// Comment : 문자 방식으로 요소를 추가합니다.
	// Replacement Standard Function : parentNode.innerHTML = "html_value";
	innerHTML (parentNode, html_value) {
		return parentNode.innerHTML = html_value;
	}
	
	// Remove Child
	// Commnet : 참조한 자식 요소를 삭제합니다.
	// Replacement Standard Function : parentNode.removeChild(childNode)
	removeChild (parentNode, childNode) {
		return parentNode.removeChild(childNode);
	}
}

// (*Undefined) Node
class HtmlElementNode {
	
	constructor (element) {
		
		// Element 요소
		this.element = element;
		// Parent Node : 부모 노드.
		this.parentNode;
		// 앞 부모 노드
		this.frontParentNode;
		// 뒤 부모 노드
		this.backParentNode;
		// Sibling Node List : 형제 노드 목록
		this.siblingNodeList;
		// 앞 형제 노드
		this.frontSiblingNode;
		// 뒤 형제 노드
		this.backSiblingNode;
		// 첫번째 형제 노드.
		this.firstSiblingNode;
		// 마지막 형제 노드.
		this.lastSiblingNode; 
		// Degree 차수 : 자식 노드의 수. ( 0 : leafNode 자식이 없는 노드. / 0^ : branchNode 자식이 있는 노드. )
		this.degree_value;
		// Child Node 자식 노드 목록.
		this.childNodeList;
	}	
}

// Attribute
class HtmlElementAttribute {
	
	// Set Attribute
	// Commnet : 해당 요소에 지정된 이름의 속성과 값을 설정합니다.
	// Replacement Standard Function : element.setAttribute(name_value, value)
	set (element, name_value, attribute_value) {
		return element.setAttribute(name_value, attribute_value);
	}
	
	// Get Attribute 
	// Comment : 해당 요소에 지정된 이름의 속성에 값을 반환 합니다. 만약 주어진 속성이 존재 하지 않는 다면, null 값 혹은 ""(빈문자열) 값을 반환 할 것입니다.
	// Replacement Standard Function : element.getAttribute(name_value)
	get (element, name_value) {
		return element.getAttribute(name_value);
	}
	
	// Has Attribute
	// Commnet : 해당 요소에 지정된 이름의 속성이 존재하는지 확인합니다.
	// Replacement Standard Function : element.hasAttribute(name_value)
	has (element, name_value) {
		return element.hasAttribute(name_value);
	}
	
	// Remove Attribute
	// Commnet : 해당 요소에 지정된 이름의 속성을 삭제합니다.
	// Replacement Standard Function : element.removeAttribute(name_value)
	remove (element, name_value) {
		return element.removeAttribute(name_value);
	}
}

// CSS
class HtmlStyle {
	
	// Display Element
	// Commnet : 지정된 요소를 문서에 표기합니다.
	display (element) {
		element.style.display = element.getAttribute(display) || "";
	}
	
	// Hidden Element
	// Commnet : 지정된 요소를 문서에 표기하지 않습니다. (기존 style의 display 속성 값을 display 이름의 Attribute 값으로 저장합니다.)
	hidden (element) {
		element.setAttribute("display", element.style.display);
		element.style.display = "hidden";
	}
}
