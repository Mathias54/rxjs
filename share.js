"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var getNome = function (mathiasData) { return mathiasData.name; };
var getID = function (mathiasData) { return mathiasData.id; };
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/mathias54'));
var link0 = mathias54$.pipe(operators_1.tap(function () { return console.log('executou'); }), operators_1.map(function (response) { return response.data; }), operators_1.shareReplay());
var link1 = link0.pipe(operators_1.map(getNome));
var link2 = link0.pipe(operators_1.map(getID));
link1.subscribe(function (data) { return console.log(data); });
link2.subscribe(function (data) { return console.log(data); });
/**
 * executou
 * Mathias Gheno Azzolini
 * 14915619
 **/ 
//# sourceMappingURL=share.js.map