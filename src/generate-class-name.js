export default (rule, {
	options: {
		meta,
	},
}) => {
	const prefix = `${meta.split(',')[0].replace('-', '')}--`;

	return `${prefix}${rule.key}`;
};
