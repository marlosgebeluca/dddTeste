"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Combustiveis;
(function (Combustiveis) {
    Combustiveis.COMBUSTIVEIS = [
        { codigo: 1, nome: 'Gasolina' },
        { codigo: 2, nome: 'Álcool' },
        { codigo: 3, nome: 'Diesel' },
        { codigo: 3, nome: 'Bi-combustível' },
    ];
    let Combustivel;
    (function (Combustivel) {
        Combustivel[Combustivel["Gasolina"] = 1] = "Gasolina";
        Combustivel[Combustivel["Alcool"] = 2] = "Alcool";
        Combustivel[Combustivel["Diesel"] = 3] = "Diesel";
        Combustivel[Combustivel["Bicombustivel"] = 4] = "Bicombustivel";
    })(Combustivel = Combustiveis.Combustivel || (Combustiveis.Combustivel = {}));
    function combustiveisEnum() {
        return Combustiveis.COMBUSTIVEIS.map((comb) => {
            return comb.codigo;
        });
    }
    Combustiveis.combustiveisEnum = combustiveisEnum;
})(Combustiveis = exports.Combustiveis || (exports.Combustiveis = {}));
//# sourceMappingURL=Combustiveis.js.map