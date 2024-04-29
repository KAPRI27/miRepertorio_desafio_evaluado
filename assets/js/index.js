//Paso 1:Importar Express y levantar un servidor en el puerto 3000.

const express = require ('express');
const pg = require ('pg');
const app = express();

app.listen(3000, console.log("server ON"))

//Paso 2:Crea una ruta raíz / GET.

  let url = "/cancion";
  let tbody = document.getElementById("cuerpo");
  let cancion = document.getElementById("cancion");
  let artista = document.getElementById("artista");
  let tono = document.getElementById("tono");

  let canciones = [];
  window.onload = getData();


//Crear una ruta GET /canciones que devuelva un JSON con los registros de la tabla canciones. (2 Puntos)
  async function getData() {
    await axios.get(url + "es").then((data) => {
      canciones = data.data;
      tbody.innerHTML = "";
      console.log(canciones)
      canciones.forEach((c, i) => {
        tbody.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${c.titulo}</td>
          <td>${c.artista}</td>
          <td>${c.tono}</td>
          <td>
            <button class="btn btn-warning" onclick="prepararCancion(${i},'${c.id
          }')">Editar</button>
            <button class="btn btn-danger" onclick="eliminarCancion(${i},'${c.id
          }')">Eliminar</button>
          </td>
        </tr>
      `;
      });
    });
    cancion.value = "";
    artista.value = "";
    tono.value = "";
  }

  //Paso 1) Crear una ruta POST /cancion que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones. (3 Puntos)
  function nuevaCancion() {
    cancion;
    artista;
    tono;
    let data = {
      titulo: cancion.value,
      artista: artista.value,
      tono: tono.value,
    };
    console.log(data);
    axios.post(url, data).then(() => getData());
  }

  //Paso 4) Crear una ruta DELETE /cancion que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos. (2 Puntos)
  function eliminarCancion(i, id) {
    axios.delete(url + "?id=" + id).then(() => {
      alert("Canción " + canciones[i].titulo + " eliminada");
      getData();
    });
  }

  function prepararCancion(i, id) {
    cancion.value = canciones[i].titulo;
    artista.value = canciones[i].artista;
    tono.value = canciones[i].tono;
    document
      .getElementById("editar")
      .setAttribute("onclick", `editarCancion('${id}')`);
    document.getElementById("agregar").style.display = "none";
    document.getElementById("editar").style.display = "block";
  }

  //Paso 3) Crear una ruta PUT /cancion que reciba los datos de una canción que se desea editar, ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice ese registro de la tabla canciones. (3 Puntos)

  function editarCancion(id) {
    axios
      .put(url + "/" + id, {
        titulo: cancion.value,
        artista: artista.value,
        tono: tono.value,
      })
      .then(() => {
        getData();
        document.getElementById("agregar").style.display = "block";
        document.getElementById("editar").style.display = "none";
      });
  }






  app.get("/", (req, res) => {
	res.send("Servidor funcionando =D !");
})



