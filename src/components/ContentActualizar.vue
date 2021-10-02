<template>
  <div class="contenedor">
    <NavBar />
    <Actualizar  />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Actualizar from "@/components/Actualizar.vue";
export default {
  name: "ContentActualizar",
  props:{
    crear : Boolean,
    actualizar: Boolean,
  },
  data() {
    return {
      vistaCrear: this.crear,
      vistaActualizar: this.actualizar,
    };
  },
  components: {
    NavBar,
    Actualizar
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
