"use strict";
function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2024)
        return income * 1.5;
    return income * 1.7;
}
calculateTax(10000);
//# sourceMappingURL=functions.js.map