import injectSheet from 'react-jss';

import injectStaticSheet from './';

jest.mock('react-jss', () => jest.fn().mockImplementation(() => jest.fn()));

describe('injectStaticSheet', () => {
	const styleSheet = {
		some: 'props',
	};
	const prefix = 'Component-';
	const Component = () => '';

	injectStaticSheet(styleSheet, prefix)(Component);


	test('should call react-jss with replaced generateClassName option', () => {
		const expected = [
			styleSheet,
			{
				generateClassName: expect.any(Function),
			},
		];
		expect(injectSheet).toBeCalledWith(...expected);
	});
});
