import injectSheet from 'react-jss';

import injectStaticSheet from './';
import generateClassName from './generate-class-name';

jest.mock('react-jss', () => jest.fn().mockImplementation(() => jest.fn()));
jest.mock('./generate-class-name', () => jest.fn());

describe('injectStaticSheet', () => {
	const styleSheet = {
		some: 'props',
	};
	const prefix = 'Component-';
	const Component = () => '';

	injectStaticSheet(styleSheet, prefix)(Component);

	test('should call react-jss with correct arguments', () => {
		const expected = [
			styleSheet,
			{ generateClassName },
		];
		expect(injectSheet).toBeCalledWith(...expected);
	});
});
