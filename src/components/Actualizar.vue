<template>
<div class="container" id="container-actualizar">
  <div class="card">
    <h2>Consultar</h2>
    <label for="id">ID: </label>
        <input class="entrada" type="text" name="id" id="id" required />

        <button class="btn" type="submit">Consultar</button>
  </div>
 <div class="card">
   <h2>Modificar</h2>
   <form action="" method="post">
        <label for="nombre">Nombre: </label>
        <input class="entrada" type="text" name="nombre" id="nombre" required />
        <label for="apellido">Apellido: </label>
        <input
          class="entrada"
          type="text"
          name="apellido"
          id="apellido"
          required
        />
        <label for="telefono">Telefono: </label>
        <input
          class="entrada"
          type="tel"
          name="telefono"
          id="telefono"
          required
        />
        <button class="btn" type="submit">Actualizar</button>
      </form>
 </div>
 <div class="card">
    <h2>Borrar</h2>
        <input class="entrada" type="text" name="borrar" id="borrar" required />

        <button class="btn borrar" type="submit">Borrar</button>
  </div>

 </div>
</template>

<script>
export default {
  name:"Actualizar",
}
</script>

<style scoped>
.container {
  padding: 20px;
  display: flex;
}
.card {
  display: flex;
  flex-direction: column;
  height: min-content;
  width: 50%;
  padding: 20px;
  margin: 5px;
}
.entrada {
  display: flex;
  width: 100%;
  background-color: rgba(255, 0, 0, 0);
  border: 1px solid #4e73df;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px;
}
.btn {
  margin-top: 10px;
  border: none;
  background-color: #4e73df;
  padding: 10px 25px 10px 25px;
  color: white;
}
.borrar{
  background-color: #df4e4e;
}

.entrada:focus {
  outline: none;
  box-shadow: 0px 0px 15px #4e73df;
  border: none;
}
</style>
