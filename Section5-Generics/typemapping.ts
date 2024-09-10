type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
};

type Optional<T> = {  
    [K in keyof T]?: T[K];
};

type Nullable<T> = {  
    [K in keyof T]: T[K] | null;
};