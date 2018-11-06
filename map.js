"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var getNome = function (mathiasData) { return mathiasData.data.name; };
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/mathias54'));
mathias54$
    .pipe(operators_1.map(getNome))
    .subscribe(function (response) { return console.log(response); });
/**
 * Mathias Gheno Azzolini
 **/ 
//# sourceMappingURL=map.js.map