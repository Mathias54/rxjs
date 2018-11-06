"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var axios_1 = require("axios");
var mathias54$ = rxjs_1.Observable.create(function (observable) {
    axios_1.default
        .get('https://api.github.com/users/mathias54')
        .then(function (response) { return observable.next(response.data); })
        .catch(function (erro) { return observable.error(erro); })
        .finally(function () { return observable.complete(); });
});
mathias54$
    .subscribe(function (resultado) { return console.log(resultado.name); });
/**
 * Mathias Gheno Azzolini
 */
/**
 * Encapsulando um HTTP request em um RxJS Observable
 */
//# sourceMappingURL=create.js.map