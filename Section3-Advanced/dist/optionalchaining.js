"use strict";
var _a;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
//Optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator
// customers?.[0]
// Optional call
let log = null;
log === null || log === void 0 ? void 0 : log('a');
