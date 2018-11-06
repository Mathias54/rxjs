"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var axios_1 = require("axios");
var operators_1 = require("rxjs/operators");
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/gurilao'));
var defaultValue = function () {
    return function (observable) {
        return observable
            .pipe(operators_1.catchError(function (e) { return rxjs_1.of({ email: 'mathiasgheno@hotmail.com' }); }));
    };
};
mathias54$
    .pipe(defaultValue())
    .subscribe(function (response) { return console.log(response); });
/**
 * { email: 'mathiasgheno@hotmail.com' }
 */ 
//# sourceMappingURL=error.js.map