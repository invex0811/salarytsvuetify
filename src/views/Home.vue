<template>
  <v-container class="container centerBG" fluid>
    <h1 style="color: #000; font-size: 46px; text-transform: uppercase; z-index: 2">Welcome to the monitorbox</h1> 
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',

});
</script>

<style scoped>
.centerBG{
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EEEEEE url("../assets/bg.jpg") no-repeat center top / 100% 100%;
}
</style>
