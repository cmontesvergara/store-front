<template>
  <div class="contenedor">
    <nav class="nav-slide">
      <ul class="ul-slide">
        <li class="brand r-link">
          <img class="logo" src="../assets/logo.png" alt="" srcset="" />
        </li>


        <li class="r-link" @click="$emit('clickCrear')">Crear</li>
        <li  class="r-link" @click="$emit('clickActualizar')">Actualizar</li>
        <router-link  to="#" ><li class="r-link">Borrar</li></router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Dash",
  data() {
    return {
      vistaCrear: false,
      vistaActualizar: true,
    };
  },

}
</script>

<style scoped >

.contenedor {
  height: 100vh;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f8f9fc;
  min-width: max-content;
  margin: 0px;
  padding: 15px;
}
.logo{
  max-height: 60px;
}
.ul-slide{
  list-style-type: none;
  padding: 10px;
  margin: 0px;
  flex-direction: column;
  text-decoration: none;
}
.r-link{
  color: white;
  background-color:#4e73df ;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0px 2px 5px #45464e79;
}
.r-link:hover{
  box-shadow: 0px 3px 8px #45464e79;
  cursor: pointer;
}

.nav-slide,.ul-slide,.brand{
  display: flex;
  width:  100%;
}
.brand{
  background-color:#f8f9fc ;
  display: flex;
  justify-content: center;
  align-items: center;
}
a:hover {
  text-decoration: none;
}
</style>
