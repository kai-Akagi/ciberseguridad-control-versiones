const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.json({ mensaje: 'Hola, mundo seguro' });
});
app.get('/usuario/:id', (req, res) => {
// ⚠️ VULNERABILIDAD INTENCIONAL: SQL Injection
const query = "SELECT * FROM usuarios WHERE id = " + req.params.id;
res.json({ query });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor en puerto ${PORT}`);
});
