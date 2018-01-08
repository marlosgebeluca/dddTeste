"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const env_1 = require("../../app/core/env");
const Logger_1 = require("../../app/decorators/Logger");
let AuthService = class AuthService {
    constructor(r, log) {
        this.log = log;
        this.httpRequest = r;
    }
    parseTokenFromRequest(req) {
        const authorization = req.header('authorization');
        // Retrieve the token form the Authorization header
        if (authorization && authorization.split(' ')[0] === 'Bearer') {
            this.log.info('Token provided by the client');
            return authorization.split(' ')[1];
        }
        this.log.info('No Token provided by the client');
        return;
    }
    getTokenInfo(token) {
        return new Promise((resolve, reject) => {
            this.httpRequest({
                method: 'POST',
                url: env_1.env.auth.route,
                form: {
                    id_token: token,
                },
            }, (error, response, body) => {
                // Verify if the requests was successful and append user
                // information to our extended express request object
                if (!error) {
                    if (response.statusCode === 200) {
                        const tokeninfo = JSON.parse(body);
                        return resolve(tokeninfo);
                    }
                    return reject(body);
                }
                return reject(error);
            });
        });
    }
};
AuthService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typedi_1.Require('request')),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map