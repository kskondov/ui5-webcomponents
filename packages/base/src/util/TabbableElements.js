
import isNodeTabbable from "./isNodeTabbable.js";

const getTabbableElements = node => {
	return getTabbables(node.children);
};

const getLastTabbableElement = node => {
	const tabbables = getTabbables(node.children);
	return tabbables.length ? tabbables[tabbables.length - 1] : null;
};

const getTabbables = (nodes, tabbables) => {
	const tabbablesNodes = tabbables || [];

	Array.from(nodes).forEach(currentNode => {
		if (currentNode.nodeType === Node.TEXT_NODE) {
			return;
		}

		if (currentNode.shadowRoot) {
			// get the root node of the ShadowDom (1st none style tag)
			const children = currentNode.shadowRoot.children;
			currentNode = Array.from(children).filter(node => node.tagName !== "STYLE")[0];
		}

		if (isNodeTabbable(currentNode)) {
			tabbablesNodes.push(currentNode);
		}

		if (currentNode.tagName === "SLOT") {
			getTabbables(currentNode.assignedNodes(), tabbablesNodes);
		} else {
			getTabbables(currentNode.children, tabbablesNodes);
		}
	});

	return tabbablesNodes;
};

export {
	getTabbableElements,
	getLastTabbableElement,
};