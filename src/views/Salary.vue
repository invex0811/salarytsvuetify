<template>
 <v-container class="container center__container" fluid>
   <v-card min-width="600px" >
     <v-card-header>
       <v-row justify="center">
         <v-col cols="6">
           <h1 style="text-align: center;">Salary</h1>
         </v-col>
       </v-row>
     </v-card-header>
     <v-card-header-text class="pa-5">
       <v-row justify="center">
         <v-col cols="6"  style="text-align: center">
           <input type="number" v-model.number="workingTime" placeholder="Working time" >
         </v-col>
       </v-row>
       <v-row v-if="input__test" justify="center">
         <v-col style="text-align: center" cols="5" >
           <input type="number" v-model.number="firstTest" placeholder="1st test">
         </v-col>
         <v-col style="text-align: center" cols="5" >
           <input type="number" v-model.number="secondTest" placeholder="2nd test" >
         </v-col>
       </v-row>
       <v-row justify="center">
         <v-col cols="6" style="text-align: center">
           <input type="number" v-model.number="rate" placeholder="Rate">
         </v-col>
       </v-row>
       <v-row justify="center" v-if="input__timeX2">
         <v-col cols="6" style="text-align: center">
           <input type="number" v-model.number="timeX2" placeholder="TimeX2">
         </v-col>
       </v-row>
       <v-row justify="center" v-if="input__cashBonus">
         <v-col cols="6" style="text-align: center">
           <input type="number" v-model.number="cashBonus" placeholder="Cash bonus">
         </v-col>
       </v-row>
     </v-card-header-text>
     <v-card-actions>
       <v-row no-gutters>
         <v-col>
           <label class="checkbox">
             <input type="checkbox" v-model="input__test"> <span>Test</span>
           </label>
         </v-col>
         <v-col>
           <label class="checkbox">
             <input type="checkbox" v-model="input__timeX2"> <span>TimeX2</span>
           </label>
         </v-col>
         <v-col>
           <label class="checkbox">
             <input type="checkbox" v-model="input__cashBonus"> <span>Cash bonus</span>
           </label>
         </v-col>
         <v-col>
           <label class="checkbox">
             <input type="checkbox" v-model="input__tax"> <span>Tax</span>
           </label>
         </v-col>
         <v-col>
           <label class="checkbox">
             <input type="checkbox" v-model="input__4percentWeekend"> <span>Vacation</span>
           </label>
         </v-col>
       </v-row>
     </v-card-actions>
     <v-card-actions>
       <v-row justify="center">
         <v-btn color="deep-purple darken-2" @click="calculateSalary">
           Ok
         </v-btn>
       </v-row>
     </v-card-actions>
     <v-divider class="my-2"></v-divider>
     <v-row justify="center">
       <v-col cols="5" >
         <table v-if="more__info">
           <tr>
             <td>Working time: </td>
             <td> {{totalTime}} </td>
           </tr>
           <tr v-if="input__test">
             <td>Time per test: </td>
             <td>{{timeTest}}</td>
           </tr>
           <tr v-if="input__test">
             <td>Cash per test: </td>
             <td>{{plusTest}}</td>
           </tr>
           <tr v-if="this.workingTime > 176">
             <td>Over time: </td>
             <td>{{overTime.toFixed(2)}}</td>
           </tr>
           <tr>
             <td>Rate: </td>
             <td> {{rate}} </td>
           </tr>
           <tr>
             <td>Over rate: </td>
             <td>{{overRate}}</td>
           </tr>
           <tr>
             <td>TimeX2 cash: </td>
             <td>{{plusTimeX2}}</td>
           </tr>
         </table>
         <table>
           <tr>
             <td>Total cash: </td>
             <td>{{result + '$'}}</td>
             <v-btn
                 icon
                 size="x-small"
                 @click="more__info = !more__info"
                 class="mb-1 info__icon"
                 elevation="0"
             >
               <v-icon size="small">
                 mdi-information-outline
               </v-icon>
             </v-btn>
           </tr>
         </table>
       </v-col>
     </v-row>
   </v-card>
 </v-container>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Salary",

  data() {
    return {
      workingTime: '',
      firstTest: '',
      secondTest: '',
      rate: '',
      timeX2: '',
      cashBonus: '',
      tax: '',
      fourPercentWeekend: '',
      //show form inputs
      input__test: true,
      input__timeX2: false,
      input__cashBonus: false,
      input__tax: false,
      input__4percentWeekend: false,
      more__info: false,
      // no UI variables
      totalTime: 0,
      overTime: 0,
      overRate: 0,
      totalMoney: 0,
      totalTestPercent: 0,
      timeTest: 0,
      timeTestMoney: 0,
      checkBtnClick: false
      }
    },
  methods:{
    calculateSalary(){
      this.totalTime = this.workingTime
      this.overTime = this.totalTime - 176
      this.overRate = this.rate * 1.5
      this.totalTestPercent = (this.firstTest + this.secondTest) / 2


      if (this.totalTestPercent >= 91){
        this.timeTest = 8
      }else if (this.totalTestPercent >= 81 && this.totalTestPercent <= 90) {
        this.timeTest = 6
      }else if (this.totalTestPercent >= 71 && this.totalTestPercent <= 80) {
        this.timeTest = 4
      }else if (this.totalTestPercent >= 60 && this.totalTestPercent <= 70) {
        this.timeTest = 0
      }else if (this.totalTestPercent < 60) {
        this.timeTest = '-4'
      }

      // function minusTestTotal(tm, tt) {
      //
      // }

      if (this.totalTime < 176){
        this.totalMoney = this.totalTime * this.rate
      } else if (this.totalTime > 176){
          if (this.rate <= 2){
            this.totalMoney = this.totalTime * this.rate
          }
          else {
            this.totalMoney = (176 * this.rate + (this.overTime * this.overRate))
          }
        }
      this.checkBtnClick = true
    },
    plusTestTotal(ttm, tt, rt) {
      if (this.totalTestPercent > 60){
        ttm = ttm + tt * rt
      }else {
        ttm = ttm - 4 * rt
      }
      return ttm
    }
  },
  computed:{
    plus4percentWeekend(){
      return this.totalMoney / 100 * (this.input__4percentWeekend * 4)
    },
    plusTest(){
       // return this.timeTest * (this.rate * this.input__test)
      return this.plusTestTotal(this.timeTestMoney, this.timeTest, this.rate) * this.input__test
    },
    plusTax(){
      return 45 * this.input__tax
    },
    plusTimeX2(){
      return this.timeX2 * ((this.rate * 2) * this.input__timeX2)
    },
    plusCashBonus(){
      return this.cashBonus * this.input__cashBonus
    },
    result(){
      return Math.round(this.totalMoney +(this.plus4percentWeekend + this.plusTest + this.plusTax + this.plusTimeX2 + this.plusCashBonus ))
    },
  },
  })
</script>

<style scoped>


  table{
    margin-left: 66px;
  }
  td{
    padding: 0 2px 0 2px;
  }
  .info__icon:hover{
    cursor: pointer;
    color: #311B92;
  }
</style>