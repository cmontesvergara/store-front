<template>
  <div class="container" id="container-actualizar">
    <div class="card">
      <h2>Consultar</h2>
      <input
        v-on:input="inpConsulta = $event.target.value"
        class="entrada"
        type="text"
        name="id"
        id="id"
        placeholder="INGRESE UN ID VALIDO"
        required
      />

      <button class="btn send" type="submit" @click="consultar">
        Consultar
      </button>
      <button
        class="btn borrar"
        type="submit"
        v-show="showBtnBorrar"
        @click="borrar"
      >
        Borrar
      </button>
    </div>
    <div class="card">
      <h2>Modificar</h2>
      <form>
        <label for="nombre">Nombre: </label>
        <input
          class="entrada"
          type="text"
          name="nombre"
          id="nombre"
          autocomplete="off"
          :value="info.nombre"
        />
        <label for="apellido">Apellido: </label>
        <input
          class="entrada"
          type="text"
          name="apellido"
          id="apellido"
          autocomplete="off"
          :value="info.apellido"
        />
        <label for="telefono">Telefono: </label>
        <input
          class="entrada"
          type="tel"
          name="telefono"
          id="telefono"
          autocomplete="off"
          :value="info.telefono"
        />
        <router-link to="/dashboard"
          ><button class="btn send" type="button" @click="actualizar">
            Actualizar
          </button></router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import Api from "@/logic/Api";
export default {
  name: "Actualizar",
  props: {},
  data() {
    return {
      showBtnBorrar: false,
      info: Object,
      infoActual:Object,
      inpConsulta: "",
    };
  },
  methods: {
    async consultar() {
      let respuesta = await Api.getOne(this.inpConsulta);
      if (respuesta.data[0] != undefined &&  respuesta.data[0].nombre == this.inpConsulta) {
        console.log(respuesta.data);
        this.info = respuesta.data[0];
        this.showBtnBorrar = true;
      }else{
        alert(`${this.inpConsulta}no se pudo encontrar en la base de datos`)
      }
    },
    async actualizar() {
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const telefono = document.getElementById('telefono').value;
      this.infoActual ={
        nombre: nombre,
        apellido:apellido,
        telefono:telefono
      }
      console.log(this.infoActual);
      await Api.update(this.inpConsulta,this.infoActual);
      window.location.reload(true);
    },
    async borrar() {
      await Api.delete(this.inpConsulta);
      this.showBtnBorrar = false;
      window.location.reload(true);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: space-around;
}
.card {
  display: flex;
  flex-direction: column;
  height: min-content;
  width: 45%;
  padding: 20px;
  margin: 5px;
}
.entrada {
  display: flex;
  width: 100%;
  background-color: rgba(255, 0, 0, 0);
  border: none;
  box-shadow: 0px 0px 5px #4e72df69;
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
  width: 100%;
}
.borrar:hover {
  box-shadow: 0px 0px 20px #df4e4e;
}
.send:hover {
  box-shadow: 0px 0px 20px #4e73df;
}
.borrar {
  background-color: #df4e4e;
}

.entrada:focus {
  outline: none;
  box-shadow: 0px 1px 5px #4e72df8c;
  border: none;
}
.btn:focus {
  outline: none;
  border: none;
}
</style>
