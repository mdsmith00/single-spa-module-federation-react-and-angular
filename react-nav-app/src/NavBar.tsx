import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import {navigateToUrl} from 'single-spa';

export const NavBar = (): JSX.Element => (
    <nav>
        <ul>
            <li style={{display: 'inline'}}>
                <a href="/" onClick={navigateToUrl}>
                    Home
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: 'inline'}}>
                <a href="/react" onClick={navigateToUrl}>
                    React Application
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: 'inline'}}>
                <a href="/angular" onClick={navigateToUrl}>
                    Angular Application
                </a>
            </li>
        </ul>
    </nav>
);

const headerLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: NavBar,
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;

export default NavBar;
