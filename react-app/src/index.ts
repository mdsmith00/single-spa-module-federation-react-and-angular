/*
 * Dynamically imports the boostrap file - thereby creating an asynchronous boundary. For more information see
 * https://webpack.js.org/concepts/module-federation/
 *
 * This gives webpack an opportunity to fetch dependencies before executing the bootstrap code.
 */
import('./bootstrap');
