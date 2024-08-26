function calculateTax(income: number, taxYear = 2024): number {
    if (taxYear < 2024)
        return income * 1.5;
    return income * 1.7;
}

calculateTax(10_000)