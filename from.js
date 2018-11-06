"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var rxjs_1 = require("rxjs");
var mathias54$ = rxjs_1.from(axios_1.default.get('https://api.github.com/users/mathias54'));
mathias54$
    .subscribe(function (response) { return console.log(response.data.name); });
/**
 *  Mathias Gheno Azzolini
 **/ 
//# sourceMappingURL=from.js.map