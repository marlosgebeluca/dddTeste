"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VinculosSegurado;
(function (VinculosSegurado) {
    VinculosSegurado.VINCULOS = [
        { codigo: 1, nome: 'O próprio' },
        { codigo: 2, nome: 'Filho(a)' },
        { codigo: 3, nome: 'Cônjuge' },
    ];
    let VinculoSegurado;
    (function (VinculoSegurado) {
        VinculoSegurado[VinculoSegurado["Proprio"] = 1] = "Proprio";
        VinculoSegurado[VinculoSegurado["Filho"] = 2] = "Filho";
        VinculoSegurado[VinculoSegurado["Cojuge"] = 3] = "Cojuge";
    })(VinculoSegurado = VinculosSegurado.VinculoSegurado || (VinculosSegurado.VinculoSegurado = {}));
    function vinculosEnum() {
        return VinculosSegurado.VINCULOS.map((vinc) => {
            return vinc.codigo;
        });
    }
    VinculosSegurado.vinculosEnum = vinculosEnum;
})(VinculosSegurado = exports.VinculosSegurado || (exports.VinculosSegurado = {}));
//# sourceMappingURL=VinculosSegurado.js.map