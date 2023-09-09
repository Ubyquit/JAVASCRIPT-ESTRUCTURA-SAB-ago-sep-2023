const dynos = ['🦖', '🦕', '🐉']
const fakeCopyDynos = dynos
// cambiamos el valor del primer elemento en fakeCopyDynos
fakeCopyDynos[0] = '🐓'

// mostramos el valor de fakeCopyDynos y vemos que tiene el cambio
console.log(fakeCopyDynos) // -> [ '🐓', '🦕', '🐉' ]

// pero si miramos también el contenido de dynos...
console.log(dynos) // -> [ '🐓', '🦕', '🐉' ]
// ¡sorpresa! nos han colado la 🐓