## Inject Static Sheet

A wrapper for [react-jss](https://github.com/cssinjs/react-jss) `injectSheet`, resulting in deterministic className prefixing.

### Usage
Call `injectSheet` as usual, but pass an additional `prefix` argument. This will be used to fix the className prefix to a consistent string, rather than a generated hash of IDs which differ across environment (which is the default behaviour):
```
const styleSheet = {
	someClass: {...}
};
export default injectSheet(styleSheet, 'MyComponentPrefix')(MyComponent);
```
Output: `<marquee class="MyComponentPrefix--someClass">Deprecated lol</marquee>`

`generateClassName` is also available for direct use, where only the function its self needs to be overridden. This can be useful when passing as a prop to a `JssProvider`:
```
<JssProvider generateClassName={generateClassName}>
```
