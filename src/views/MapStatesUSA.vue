<template>
  <v-container class="container" fluid>
    <v-card-header class="mb-5">
      <v-row justify="center">
        <v-col cols="6">
          <h1 style="text-align: center;">Snake</h1>
        </v-col>
      </v-row>
    </v-card-header>
    <v-row justify="center" align="center">
      <v-card width="900" height="700">
      
      </v-card>
    </v-row>
    
    

  </v-container>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "mapStatesUSA",
  data() {
    return {
      snake:{
        
      }
    }
  },
  computed:{
    
  },
  methods:{

  }
     
  
})
</script>
<style >
  .mapGame{
    min-width: 900px;
    min-height:700px;
    background: #000;
  }
</style>