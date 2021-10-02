<template>
<div class="contenedor">
  <SlideBar />
  <Content />
</div>

</template>
<script>
import SlideBar from "@/components/SlideBar.vue";
import Content from "@/components/Content.vue";
export default {
  name: "DashBoard",
  components: {
    SlideBar,
    Content,
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
