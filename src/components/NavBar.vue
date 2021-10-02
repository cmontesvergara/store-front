<template>
  <div class="container">
    <nav>
      <ul>
        <li class="search-block">
          <input class="search" type="search" name="search" id="search">
          <button class="btn-search" type="button" value=""><font-awesome-icon class="ico-search"  :icon="icoSearch" size="1x" /></button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  components:{
    FontAwesomeIcon,

  },
  data () {
    return {
      show: false,
      icoSearch: faSearch
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  width: 100%;
  height: 10vh;
  padding: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0px;
  display: flex;
  width: 100%;
  justify-content:flex-start;
  align-items: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
nav{
  display: flex;
  width: 100%;
  box-shadow: 0px 3px 15px #797b8879;
}
.search{
  border: 2px solid #4e73df;
  border-radius: 15px;
  margin-right: 5px;
}
.search:focus{
  outline: none;
}
.search-block{
  display: flex;
  justify-content: center;
  outline: none;

}
.btn-search{
  border: none;
  background-color: #4e73df;
  border-radius: 100px;
  min-width: 30px;
  min-height: 30px;
}
.btn-search,.ico-search:hover{
  cursor: pointer;
}
</style>
