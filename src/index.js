import injectSheet from 'react-jss';

import generateClassName from './generate-class-name';

export default styleSheet => Component => injectSheet(styleSheet, { generateClassName })(Component);

export { generateClassName };
