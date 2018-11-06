"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var prm1 = function (value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (value === 'mathias') {
                reject('erro');
            }
            else {
                resolve(value);
            }
        }, 1000);
    });
};
var retryRequest = function (value) {
    return function (observable) {
        return observable
            .pipe(operators_1.retryWhen(function (errors) {
            return errors
                .pipe(operators_1.delayWhen(function () { return rxjs_1.timer(2000); }), operators_1.tap(function () { return console.log('retrying...' + value); }));
        }));
    };
};
// const valores$ = merge(
//     from(prm1('mathias')),
//     from(prm1('kataliny')),
//     from(prm1('leonite')),
//     from(prm1('amelio')),
// );
//
// valores$.subscribe(console.log);
var valoresConcat$ = rxjs_1.concat(rxjs_1.from(prm1('kataliny')).pipe(operators_1.tap(function () { return console.log('fazendo kata dnv'); })), rxjs_1.from(prm1('leonite')).pipe(operators_1.tap(function () { return console.log('fazendo leo dnv'); })), rxjs_1.from(prm1('mathias')).pipe(operators_1.tap(function () { return console.log('fazendo kata dnv'); }), retryRequest('mathias')), rxjs_1.from(prm1('amelio')).pipe(operators_1.tap(function () { return console.log('fazendo amelio dnv'); })));
valoresConcat$.subscribe(console.log);
//# sourceMappingURL=merge.js.map