const { dirname, resolve } = require("path");

exports.rootDirname = dirname(__filename);

exports.resolvePath = function (...paths) {
    return resolve(exports.rootDirname, ...paths);
};
