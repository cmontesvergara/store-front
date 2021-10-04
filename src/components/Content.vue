<template>
  <div class="contenedor">
    <NavBar />
    <Crear v-if="valor1" />
    <Actualizar v-if="valor2" :info="info" />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Crear from "@/components/Crear.vue";
import Actualizar from "@/components/Actualizar.vue";
export default {
  name: "Content",
  props:{
    valor1 : Boolean,
    valor2: Boolean,
    info: Object
  },
  data() {
    return {
    };
  },
  components: {
    NavBar,Crear,Actualizar
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
