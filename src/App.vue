<template>
  <v-app >
    <Navbar/>


    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from "@/components/Navbar.vue";


export default defineComponent({
  components: {Navbar}
})
</script>
<style>


*{
  font-family: Roboto, sans-serif;
}
</style>