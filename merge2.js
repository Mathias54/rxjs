"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var axios_1 = require("axios");
var get = function (url) {
    return axios_1.default.get("https://api.github.com/users/" + url);
};
var valoresConcat$ = rxjs_1.merge(get('mathias54'), get('sindresorhus')).pipe(operators_1.map(function (r) { return r.data.name; }), retryRequest());
valoresConcat$.subscribe(console.log);
/**
 * Mathias Gheno Azzolini
 * Sindre Sorhus
 **/
// const valores$ = merge(
//     from(prm1('mathias')),
//     from(prm1('kataliny')),
//     from(prm1('leonite')),
//     from(prm1('amelio')),
// );
//
// valores$.subscribe(console.log);
var retryRequest = function (value) {
    return function (observable) {
        return observable
            .pipe(operators_1.retryWhen(function (errors) {
            return errors
                .pipe(operators_1.delayWhen(function () { return rxjs_1.timer(2000); }), operators_1.tap(function () { return console.log('retrying...' + value ? value : ''); }));
        }));
    };
};
//# sourceMappingURL=merge2.js.map