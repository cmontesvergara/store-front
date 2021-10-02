<template>
<div class="contenedor">
  <SlideBar />
  <ContentActualizar />
</div>

</template>
<script>
import SlideBar from "@/components/SlideBar.vue";
import ContentActualizar from "@/components/ContentActualizar.vue";
export default {
  name: "DashBoardActualizar",
  components: {
    SlideBar,
    ContentActualizar,
  },
};
</script>

<style>
.contenedor{
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
