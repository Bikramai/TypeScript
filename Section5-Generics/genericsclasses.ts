// Generic classes
class KeyValuePair<K, V> { 
		constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(1, 'a');

// The TypeScript compiler can sometimes infer 
// generic type arguments so we don't need to specify them.

let other = new KeyValuePair(1, 'a');