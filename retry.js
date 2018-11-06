"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/gurilao'));
var retryRequest = function (times) {
    return function (observable) {
        return observable
            .pipe(operators_1.catchError(function (erro) {
            return rxjs_1.of({ erro: erro });
        }), operators_1.tap(function (retorno) {
            console.log('erro');
            if (retorno.erro) {
                throw 'Erro ao consultar';
            }
        }), operators_1.retry(times));
    };
};
mathias54$
    .pipe(retryRequest(3))
    .subscribe(function (response) { return console.log(response.data.bio); }, function (error) { return console.log("Ocorreu um erro: " + error); });
/**
 * Tentativas de retantar sem interval
 **/ 
//# sourceMappingURL=retry.js.map