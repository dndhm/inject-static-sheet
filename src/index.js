import injectSheet from 'react-jss';

import generateClassName from './generate-class-name';

export default (styleSheet, prefix) => Component => injectSheet(styleSheet, {
	generateClassName: rule => generateClassName(rule, {
		options: {
			classNamePrefix: prefix,
		},
	}),
})(Component);
