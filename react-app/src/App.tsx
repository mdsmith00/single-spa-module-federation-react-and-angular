import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

/**
 * The root of the application
 * @returns {JSX.Element}
 * @constructor
 */
export const App = (): JSX.Element => <h1>React Application</h1>;

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

export default App;
