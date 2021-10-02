<template>
  <div class="contenedor">
    <NavBar />

  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
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
