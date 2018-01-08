"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gerador;
(function (Gerador) {
    function cnpj() {
        const n1 = Math.round(Math.random() * 9);
        const n2 = Math.round(Math.random() * 9);
        const n3 = Math.round(Math.random() * 9);
        const n4 = Math.round(Math.random() * 9);
        const n5 = Math.round(Math.random() * 9);
        const n6 = Math.round(Math.random() * 9);
        const n7 = Math.round(Math.random() * 9);
        const n8 = Math.round(Math.random() * 9);
        const n9 = 0;
        const n10 = 0;
        const n11 = 0;
        const n12 = 1;
        let aux = n1 * 5 + n2 * 4 + n3 * 3 + n4 * 2 + n5 * 9 + n6 * 8 + n7 * 7 + n8 * 6 + n9 * 5 + n10 * 4 + n11 * 3 + n12 * 2;
        aux = mod(aux, 11);
        const nv1 = aux < 2 ? 0 : 11 - aux;
        aux = n1 * 6 + n2 * 5 + n3 * 4 + n4 * 3 + n5 * 2 + n6 * 9 + n7 * 8 + n8 * 7 + n9 * 6 + n10 * 5 + n11 * 4 + n12 * 3 + nv1 * 2;
        aux = mod(aux, 11);
        const nv2 = aux < 2 ? 0 : 11 - aux;
        return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${nv1}${nv2}`;
    }
    Gerador.cnpj = cnpj;
    function cpf() {
        const n1 = Math.round(Math.random() * 9);
        const n2 = Math.round(Math.random() * 9);
        const n3 = Math.round(Math.random() * 9);
        const n4 = Math.round(Math.random() * 9);
        const n5 = Math.round(Math.random() * 9);
        const n6 = Math.round(Math.random() * 9);
        const n7 = Math.round(Math.random() * 9);
        const n8 = Math.round(Math.random() * 9);
        const n9 = Math.round(Math.random() * 9);
        let aux = n1 * 10 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 + n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2;
        aux = mod(aux, 11);
        const nv1 = aux < 2 ? 0 : 11 - aux;
        aux = n1 * 11 + n2 * 10 + n3 * 9 + n4 * 8 + n5 * 7 + n6 * 6 + n7 * 5 + n8 * 4 + n9 * 3 + nv1 * 2;
        aux = mod(aux, 11);
        const nv2 = aux < 2 ? 0 : 11 - aux;
        return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${nv1}${nv2}`;
    }
    Gerador.cpf = cpf;
    function mod(a, b) {
        return Math.round(a - (Math.floor(a / b) * b));
    }
})(Gerador = exports.Gerador || (exports.Gerador = {}));
//# sourceMappingURL=Gerador.js.map