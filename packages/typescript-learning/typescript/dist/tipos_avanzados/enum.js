"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLES = void 0;
//Enum
/*No permitiran configurar un set de opcines */
var ROLES;
(function (ROLES) {
    ROLES["ADMINISTRADOR"] = "administrador";
    ROLES["OPERADOR"] = "operador";
    ROLES["VENDEDOR"] = "vendedor";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
let user = {
    correo: 'email@gmail.com',
    roles: ROLES.ADMINISTRADOR,
};
