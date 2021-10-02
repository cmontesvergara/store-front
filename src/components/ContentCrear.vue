<template>
  <div class="contenedor">
    <NavBar />
    <Crear  ></Crear>

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Crear from "@/components/Crear.vue";
export default {
  name: "Content",
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
    Crear,
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
