<template>
  <div class="fullscreen-bg">

  </div>
  <v-container style="padding-top: 60px;">
    <v-row
        style="height: 95vh;"
        align="center"
        justify="center"
    >
      <h1 style="color: #FFFFFF; font-size: 46px; text-transform: uppercase">Welcome to the monitorbox</h1>

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
.test{
  border: 2px solid red;
}
.fullscreen-bg {
  z-index: -100;
  position: fixed;
  height: 100%;
  width: 100%;
  background: #FFF url("../assets/bgvideo.gif") no-repeat center top / cover;
}
.fullscreen-bg:after{
  content: '';
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .5;
}

</style>
