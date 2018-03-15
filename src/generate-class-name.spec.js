import generateClassName from './generate-class-name';

describe('generateClassName', () => {
	test('should return correctly formatted className for given rule and sheet', () => {
		const rule = {
			key: 'className',
		};
		const sheet = {
			options: {
				classNamePrefix: 'Override-',
				meta: 'Component, Unthemed, Static',
			},
		};
		const expected = 'Override--className';
		expect(generateClassName(rule, sheet)).toBe(expected);
	});

	describe('when no classNamePrefix is defined', () => {
		test('should use DisplayName from meta property', () => {
			const rule = {
				key: 'className',
			};
			const sheet = {
				options: {
					meta: 'Component, Unthemed, Static',
				},
			};
			const expected = 'Component--className';
			expect(generateClassName(rule, sheet)).toBe(expected);
		});
	});
});
