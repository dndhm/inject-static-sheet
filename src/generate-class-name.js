export default (rule, {
	options: {
		classNamePrefix,
		meta,
	},
}) => {
	const prefix = classNamePrefix
		? `${classNamePrefix.replace('-', '')}`
		: `${meta.split(',')[0]}`;

	return `${prefix}--${rule.key}`;
};
