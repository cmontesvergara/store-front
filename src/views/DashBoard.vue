<template>
<div class="contenedor">

  <SlideBar @clickCrear="crearClick" @clickActualizar="ActualizarClick" />
  <Content :valor1="crear" :valor2="actualizar" :info="info" />
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
  data(){
     return {
       crear: false,
       actualizar: false,
       info:null,
    }
  },
  methods:{
    crearClick(){
      this.crear = true;
      this.actualizar = false;
    },
    ActualizarClick(){
      this.actualizar = true;
      this.crear = false;
    },

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
