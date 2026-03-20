import express from "express";
import viajesRouter from './routes/viajesRoute.js'

const app = express();

const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json())

//Configuración de Handlebars

//Rutas
app.use('/', viajesRouter)
app.use/'/'


app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
