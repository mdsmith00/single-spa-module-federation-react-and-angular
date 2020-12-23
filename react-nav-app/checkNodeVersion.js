const semver = require('semver');
const {
    engines: { node },
} = require('./package');
const version = node;

if (!semver.satisfies(process.version, version)) {
    throw new Error(`The current node version ${process.version} does not satisfy the required version ${version} .`);
}
