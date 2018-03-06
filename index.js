import injectSheet from 'react-jss';

export const generateClassName = (rule, {
	options: {
		classNamePrefix,
	},
}) => {
	const prefix = classNamePrefix
		? `${classNamePrefix.replace('-', '')}--`
		: '';

	return `${prefix}${rule.key}`;
};

export default (styleSheet, prefix) => Component => injectSheet(styleSheet, {
	generateClassName: rule => generateClassName(rule, {
		options: {
			classNamePrefix: prefix,
		},
	}),
})(Component);
