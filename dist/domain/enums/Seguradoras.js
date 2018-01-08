"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Seguradoras;
(function (Seguradoras) {
    Seguradoras.CIAS = [
        { codigo: 5444, nome: 'Bradesco', ativa: true },
        { codigo: 5886, nome: 'Porto Seguro', ativa: true },
        { codigo: 5355, nome: 'Azul', ativa: true },
        { codigo: 5321, nome: 'Itaú', ativa: true },
        { codigo: 9898, nome: 'Outra cia', ativa: false },
    ];
    let Seguradora;
    (function (Seguradora) {
        Seguradora[Seguradora["Bradesco"] = 5444] = "Bradesco";
        Seguradora[Seguradora["Porto"] = 5886] = "Porto";
        Seguradora[Seguradora["Azul"] = 5355] = "Azul";
        Seguradora[Seguradora["Itau"] = 5321] = "Itau";
        Seguradora[Seguradora["Outra"] = 9898] = "Outra";
    })(Seguradora = Seguradoras.Seguradora || (Seguradoras.Seguradora = {}));
    function seguradorasAtivas() {
        return Seguradoras.CIAS.filter((cia) => {
            return cia.ativa;
        });
    }
    Seguradoras.seguradorasAtivas = seguradorasAtivas;
    function seguradorasAtivasEnum() {
        return Seguradoras.CIAS.map((cia) => {
            if (cia.ativa) {
                return cia.codigo;
            }
        });
    }
    Seguradoras.seguradorasAtivasEnum = seguradorasAtivasEnum;
    function seguradorasEnum() {
        return Seguradoras.CIAS.map((cia) => {
            return cia.codigo;
        });
    }
    Seguradoras.seguradorasEnum = seguradorasEnum;
})(Seguradoras = exports.Seguradoras || (exports.Seguradoras = {}));
//# sourceMappingURL=Seguradoras.js.map