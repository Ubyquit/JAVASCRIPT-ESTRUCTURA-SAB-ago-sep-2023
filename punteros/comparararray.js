const dynos = ['🦖', '🦕', '🐉']
const fakeCopyDynos = dynos

console.log(dynos === fakeCopyDynos) // -> true

const arrayWithSameDynos = ['🦖', '🦕', '🐉']
console.log(dynos === arrayWithSameDynos) // -> false

a = "Hola mundo"
b = a

console.log(a === b) // -> true