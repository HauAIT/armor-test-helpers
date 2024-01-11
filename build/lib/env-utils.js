"use strict";
/**
 * Creates Mocha "before each" and "after each" hooks to restore `process.env` after every test.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stubEnv = void 0;
function stubEnv() {
    /** @type {NodeJS.ProcessEnv} */
    let envBackup;
    beforeEach(function beforeEach() {
        envBackup = process.env;
        process.env = { ...process.env };
    });
    afterEach(function afterEach() {
        process.env = envBackup;
    });
}
exports.stubEnv = stubEnv;
//# sourceMappingURL=env-utils.js.map