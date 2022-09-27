const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 8, 10];

// 交集
const c = a.filter((i) => b.indexOf(i) > -1);

// 差集
const d = a.filter((i) => b.indexOf(i) === -1);

// 补集
const e = a.filter(i => !(b.indexOf(i) > -1)).concat(b.filter(i => !(a.indexOf(i) > -1)));

// 并集
const f = a.concat(b.filter(i => !(a.indexOf > -1)));


// es6实现
const sa = new Set(a);
const sb = new Set(b);

// 交集
const intersect = a.filter(i => sb.has(i));

// 差集
const minus = a.filter(i => !sb.has(i));

// 补集
const complement = [...a.filter(i => !sb.has(i)), ...b.filter(i => !sa.has(i))];

// 并集
const unionSet = Array.from(new Set([...a, ...b]));