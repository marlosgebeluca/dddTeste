"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const AuthService_1 = require("./AuthService");
const Logger_1 = require("../../app/core/Logger");
function authorizationChecker(connection) {
    const log = new Logger_1.Logger(__filename);
    const authService = typedi_1.Container.get(AuthService_1.AuthService);
    return function innerAuthorizationChecker(action, roles) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // here you can use request/response objects from action
            // also if decorator defines roles it needs to access the action
            // you can use them to provide granular access check
            // checker must return either boolean (true or false)
            // either promise that resolves a boolean value
            // demo code:
            const token = authService.parseTokenFromRequest(action.request);
            if (token === undefined) {
                log.warn('No token given');
                return false;
            }
            // Request user info at auth0 with the provided token
            try {
                action.request.tokeninfo = yield authService.getTokenInfo(token);
                log.info('Successfully checked token');
                return true;
            }
            catch (e) {
                log.warn(e);
                return false;
            }
        });
    };
}
exports.authorizationChecker = authorizationChecker;
//# sourceMappingURL=authorizationChecker.js.map