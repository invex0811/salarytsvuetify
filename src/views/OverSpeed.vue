<template>
  <v-container class="container center__container" fluid>
    <v-card min-width="600">
      <div class="block"></div>

      <v-card-header>
        <v-row justify="center">
          <v-col cols="6">
            <h1 style="text-align: center;">Over speed</h1>
          </v-col>
        </v-row>
      </v-card-header>


      <v-card-header-text class="pa-5">
        <v-row justify="center" align="center" >
          <v-col cols="4" style="text-align: center">
            <input type="number" v-model="inputMiles" placeholder="Mile">
          </v-col>
          <v-col cols="1"  style="text-align: center" v-if="input__addSecondMile">
            <span style="font-size: 24px;">-</span>
          </v-col>
          <v-col cols="4" style="text-align: center" v-if="input__addSecondMile">
            <input type="number" v-model="inputSecondMiles" placeholder="Second mile" >
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="4" style="text-align: center">
            <input type="number" v-model="inputTime" placeholder="Time">
          </v-col>
          <v-col cols="1"  style="text-align: center" v-if="input__addSecondTime">
            <span style="font-size: 24px;">-</span>
          </v-col>
          <v-col cols="4" style="text-align: center" v-if="input__addSecondTime">
            <input type="number" v-model="inputSecondTime" placeholder="Second time">
          </v-col>
        </v-row>
        <v-row>
          <v-col style="text-align: center" >
            <span>{{result}}</span>
          </v-col>
        </v-row>
      </v-card-header-text>


      <v-card-actions>
        <v-row no-gutters justify="center">
          <v-col cols="3" style="text-align: center">
            <label class="checkbox">
              <input type="checkbox" v-model="input__addSecondMile">
              <span>1 more mile</span>
            </label>
          </v-col >
          <v-col cols="3" style="text-align: center">
            <label class="checkbox">
              <input type="checkbox" v-model="input__addSecondTime">
              <span>1 more time</span>
            </label>
          </v-col>
        </v-row>
      </v-card-actions>


      <v-card-actions>
        <v-row justify="center">
          <v-btn
              color="deep-purple darken-2"
              @click="calcOverSpeed"
          >
            OK
          </v-btn>
        </v-row>
      </v-card-actions>


    </v-card>
  </v-container>
  <router-view/>
</template>

<script>
export default {
  name: "OverSpeed",
  data() {
    return {
      inputMiles: '',
      inputTime: '',
      inputSecondMiles: '',
      inputSecondTime: '',
      input__addSecondMile: false,
      input__addSecondTime: false,

      //no UI
      result: '',
    }
  },
  methods: {
    calcOverSpeed() {

      if (this.input__addSecondMile === true) {
        this.result = (this.inputMiles - this.inputSecondMiles) / this.time
      } else if (this.input__addSecondTime === true) {
        this.result = this.inputMiles / (this.time - this.inputSecondTime)
      } else if (this.input__addSecondTime === true && this.input__addSecondMile === true){
        this.result = (this.inputMiles - this.inputSecondMiles) / (this.time - this.inputSecondTime)
      }else {
        this.result = this.inputMiles / this.time
      }

    }
  }
}
</script>

<style scoped>
input[type='number']{
  width: 150px;
}
.block{
  position: fixed;
  width: 600px;
  height: 300px;
  z-index: 5;
  background-color: #000;
  opacity: .9;
}
</style>