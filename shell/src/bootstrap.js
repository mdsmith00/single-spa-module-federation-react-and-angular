import { start, registerApplication } from 'single-spa';

/**
 * Register applications here
 */
registerApplication(
    'reactNavApp',
    () => import('reactNavApp/NavBar'),
    () => true
);

registerApplication(
    'reactApp',
    () => import('reactApp/ApplicationPage'),
    (location) => location.pathname.startsWith('/react')
);

registerApplication(
    'angularApp',
    () => import('angularApp/ApplicationPage'),
    (location) => location.pathname.startsWith('/angular')
);

start();
