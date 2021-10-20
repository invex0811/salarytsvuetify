<template>
  <v-container class="container center__container" fluid>
    <v-card>
      <v-card-header>
       <v-row justify="center">
         <v-col cols="6">
           <h1 style="text-align: center;">Gap date</h1>
         </v-col>
       </v-row>
     </v-card-header>


    </v-card>
    
    

  </v-container>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';
import DateTime from 'luxon';
export default defineComponent({
  name: "gapDateTime",
  data() {
    return {
      
    }
  },
  computed:{
    
  },     
  
})
</script>
<style >
  
</style>