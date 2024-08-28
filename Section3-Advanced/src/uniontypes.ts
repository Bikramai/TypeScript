function kgToLbs(weight: number | string): number {
    // Narrowing 
    if (typeof weight === 'number')
        return weight * 2.5;
    else
        return parseInt(weight) * 2.5;
}

kgToLbs(20);
kgToLbs('20kg');