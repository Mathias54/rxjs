"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var simplest$ = rxjs_1.Observable.create(function (observable) {
    observable.next('valor1');
    observable.next('valor2');
    observable.complete();
});
simplest$
    .subscribe(function (resultado) { return console.log(resultado); });
/**
 * valor1
 * valor2
 */ 
//# sourceMappingURL=simplest.js.map