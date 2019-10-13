let a = {};

let b = {key: "b"};

let c = {key: "c"};

let d = [3, 4, 5];
a[b] = 123;
a[c] = 456;
a[d] = 123;
console.log(a[b]);
console.log(a[c]);
console.log(a[d]);

