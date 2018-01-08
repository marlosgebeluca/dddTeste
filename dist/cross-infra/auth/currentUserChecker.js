"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = require("../../infra/models/User");
const Logger_1 = require("../../app/core/Logger");
function currentUserChecker(connection) {
    const log = new Logger_1.Logger(__filename);
    return function innerCurrentUserChecker(action) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // here you can use request/response objects from action
            // you need to provide a user object that will be injected in controller actions
            // demo code:
            const tokeninfo = action.request.tokeninfo;
            const em = connection.createEntityManager();
            const user = yield em.findOne(User_1.User, {
                where: {
                    email: tokeninfo.user_id.replace('auth0|', ''),
                },
            });
            if (user) {
                log.info('Current user is ', user.toString());
            }
            else {
                log.info('Current user is undefined');
            }
            return user;
        });
    };
}
exports.currentUserChecker = currentUserChecker;
//# sourceMappingURL=currentUserChecker.js.map