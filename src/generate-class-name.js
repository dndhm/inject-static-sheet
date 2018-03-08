export default (rule, {
	options: {
		classNamePrefix,
	},
}) => {
	const prefix = classNamePrefix
		? `${classNamePrefix.replace('-', '')}--`
		: '';

	return `${prefix}${rule.key}`;
};
