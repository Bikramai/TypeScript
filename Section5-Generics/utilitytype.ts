interface Product { 
    id:number; 
    name:string; 
    price:number; 
}

// // A Product where all properties are optional 
// let product: Partial<Product>;

// // A Product where all properties are required
// let product: Required<Product>;

// // A Product where all properties are read-only
// letproduct: Readonly<Product>;

// // A Product with two properties only (id and price)
// let product: Pick<Product, 'id'|'price'>;

// // A Product without a name 
// let product: Omit<Product, 'name'>;