const express = require('express');
const connectDB = require('./config/db'); // Asegúrate de importar la función correctamente
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors'); // Importa CORS

require('dotenv').config();

connectDB(); // Asegúrate de llamar a la función connectDB() aquí

const app = express();

// Middleware para permitir solicitudes de cualquier origen
app.use(cors());

// Middleware para permitir el análisis de cuerpos JSON
app.use(express.json());

// Rutas de proyecto
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "script-src 'self' localhost:5173");
    next();
  });
  


