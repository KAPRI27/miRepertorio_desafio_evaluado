//Paso 1:Importar Express y levantar un servidor en el puerto 3000.

const express = require ('express');
const app = express();

app.listen(3000, console.log("server ON"))

//Paso 2:Crea una ruta raíz / GET.

app.get("/", (req, res) => {
	res.send("Servidor funcionando =D !");
})




//Paso 1) Crear una ruta POST /cancion que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones. (3 Puntos)



//Paso 2) Crear una ruta GET /canciones que devuelva un JSON con los registros de la tabla canciones. (2 Puntos)



//Paso 3) Crear una ruta PUT /cancion que reciba los datos de una canción que se desea editar, ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice ese registro de la tabla canciones. (3 Puntos)



//Paso 4) Crear una ruta DELETE /cancion que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos. (2 Puntos)
