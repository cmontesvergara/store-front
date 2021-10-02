<template>
<div class="contenedor">
  <SlideBar />
  <ContentCrear />
</div>

</template>
<script>
import SlideBar from "@/components/SlideBar.vue";
import ContentCrear from "@/components/ContentCrear.vue";
export default {
  name: "DashBoardCrear",
  components: {
    SlideBar,
    ContentCrear,
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
