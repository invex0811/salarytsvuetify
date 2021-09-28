<template>
  <div class="fullscreen-bg">

  </div>
  <v-container class="container">
    <v-row
        style="height: 95vh;"
        align="center"
        justify="center"
    >
      <h1 style="color: #000; font-size: 46px; text-transform: uppercase; z-index: 2">Welcome to the monitorbox</h1>

    </v-row>

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',

});
</script>

<style scoped>

.fullscreen-bg {
  position: fixed;
  height: 100%;
  width: 100%;
  background: #EEEEEE url("../assets/bg.jpg") no-repeat center top / cover;
}
/*.fullscreen-bg:after{*/
/*  content: '';*/
/*  position: fixed;*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  background: #000;*/
/*  opacity: 0;*/
/*}*/

</style>
