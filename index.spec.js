import { generateClassName } from './';

describe('generateClassName', () => {
	test('should return correctly formatted className for given rule and sheet', () => {
		const rule = {
			key: 'yale',
		};
		const sheet = {
			options: {
				classNamePrefix: 'Component',
			},
		};
		const expected = 'Component--yale';
		expect(generateClassName(rule, sheet)).toBe(expected);
	});
});
