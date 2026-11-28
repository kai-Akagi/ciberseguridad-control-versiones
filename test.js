// Test simple

assert.strictEqual(2 + 2, 5, 'Esto va a fallar');

const assert = require('assert');
function sumar(a, b) {
return a + b;
}
assert.strictEqual(sumar(2, 3), 5, '2 + 3 debe ser 5');
assert.strictEqual(sumar(-1, 1), 0, '-1 + 1 debe ser 0');
console.log('✅ Todos los tests pasaron');
