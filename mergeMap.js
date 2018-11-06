"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var getEmail = function (mathiasData) {
    return new Promise(function (resolve) {
        return resolve({ email: 'mathiasgheno@gmail.com', nome: mathiasData.data.name });
    });
};
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/mathias54'));
mathias54$
    .pipe(operators_1.mergeMap(getEmail))
    .subscribe(function (response) { return console.log(response); });
/**
 * { email: 'mathiasgheno@gmail.com',
 *   nome: 'Mathias Gheno Azzolini' }
 **/ 
//# sourceMappingURL=mergeMap.js.map