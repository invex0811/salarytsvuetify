<template>
  <v-container class="container" fluid>
    <v-card-header>
      <v-row justify="center">
        <v-col cols="6">
          <h1 style="text-align: center;">State USA</h1>
        </v-col>
      </v-row>
    </v-card-header>
    <div>
     
    </div>
  </v-container>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "mapStatesUSA",
  data() {
    return {
     
    }
  },
})
</script>