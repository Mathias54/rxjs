"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var axios_1 = require("axios");
var operators_1 = require("rxjs/operators");
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/gurilao'));
var retryRequest = function (value) {
    return function (observable) {
        return observable
            .pipe(operators_1.retryWhen(function (errors) {
            return errors
                .pipe(operators_1.delayWhen(function () { return rxjs_1.timer(2000); }), operators_1.tap(function () { return console.log('retrying...' + value); }), operators_1.retry(3));
        }));
    };
};
mathias54$
    .pipe(retryRequest('gurilao'))
    .subscribe(function (response) { return console.log(response.data.bio); });
//# sourceMappingURL=retry2.js.map