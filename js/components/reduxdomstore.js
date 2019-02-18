import { Provider }		from 'react-redux';
import React			from 'react';
import ReactDom			from 'react-dom';

export default class ReduxDomFactory {


	constructor(store = null) {
		this.store = store;
	}

	inject(module, props = {}, target) {

		if (target) {

			ReactDom.render(
				React.createElement(
					Provider,
					{ store: this.store },
					React.createElement(module, props),
				),
				target,
			);

		} else {
			console.warn('Target element is null or undefined. Cannot inject component');
		}

	}

	dispose(target) {
		if (target) {
			ReactDom.unmountComponentAtNode(target);
		}
	}
}