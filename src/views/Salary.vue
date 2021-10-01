<template>
 <v-container class="container center__container" fluid>
   <!-- Rate dollar API -->
    <v-card position="absolute" right="10" class="pa-3">
     <v-card-header-text>
       <v-row>
         <v-col cols="12">
          Курс {{this.valut}} на {{this.exchangeDate}} : {{infoCurentDollar}}
         </v-col>
       </v-row>
       <v-row>
         <v-col>
           <input type="date" v-model="dateForExchenge">
         </v-col>
         <v-col>
           <v-btn 
            color="primary"
            size="small"
            @click="setDate"
           >
            OK
           </v-btn>
         </v-col>
       </v-row>
     </v-card-header-text>
     
    </v-card>
    <!-- End -->
    <v-card min-width="600px" >
     <v-card-header>
       <v-row justify="center">
         <v-col cols="6">
           <h1 style="text-align: center;">Salary</h1>
         </v-col>
       </v-row>
     </v-card-header>
     <!-- Inputs data -->
     <v-card-header-text class="pa-5">
       <v-row justify="center">
         <v-col cols="6" style="text-align: center">
           Working day in month:
           <select v-model="workDay">
             <option value="21">21</option>
             <option value="22">22</option>
             <option value="23">23</option>
           </select>
         </v-col>
       </v-row>
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
       <v-row justify="center" v-if="input__dollarExchange">
         <v-col cols="6" style="text-align: center">
           <v-badge
            icon=" mdi-currency-usd"
            offset-x="15"
            offset-y="4"
            @click="inputCurencyUsdRare"
            title="Current rate USD"
           >
           <input type="number" v-model.number="dollarRate" placeholder="Dollar rate">
           </v-badge>
         </v-col>
       </v-row>
     </v-card-header-text>
     <!-- End inputs data -->
     <!-- Checkbox  -->
     <v-card-actions>
       <v-col style="text-align: center">
        <v-row no-gutters justify="space-around">
         <v-col cols="3" style="text-align: left">
           <label class="checkbox">
             <input type="checkbox" v-model="input__test"> <span>Test</span>
           </label>
         </v-col>
         <v-col cols="3" style="text-align: left">
           <label class="checkbox">
             <input type="checkbox" v-model="input__timeX2"> <span>TimeX2</span>
           </label>
         </v-col>
         <v-col cols="3" style="text-align: left">
           <label class="checkbox">
             <input type="checkbox" v-model="input__cashBonus"> <span>Cash bonus</span>
           </label>
         </v-col>
       </v-row>
       <v-row no-gutters justify="space-around">
         <v-col cols="3" style="text-align: left">
           <label class="checkbox">
             <input type="checkbox" v-model="input__tax"> <span>Tax</span>
           </label>
         </v-col>
         <v-col cols="3" style="text-align: left">
           <label class="checkbox">
             <input type="checkbox" v-model="input__4percentWeekend"> <span>Vacation</span>
           </label>
         </v-col>
         <v-col cols="3" style="text-align: left">
           <label class="checkbox">
             <input type="checkbox" v-model="input__dollarExchange"> <span>$ exchange</span>
           </label>
         </v-col>
       </v-row>
       </v-col>
       
     </v-card-actions>
     <!-- End checkbox -->
     <!-- Button -->
     <v-card-actions>
       <v-row justify="center">
         <v-btn color="deep-purple darken-2" @click="calculateSalary" style="color: #fff">
           Ok
         </v-btn>
       </v-row>
     </v-card-actions>
     <!-- End button -->
     <v-divider class="my-2"></v-divider>
     <!-- Output data -->
     <v-row justify="center">
       <v-col cols="12" class="center mr-2">
         <table v-if="more__info">
           <tr>
             <td>Working time: </td>
             <td> {{totalTime + ' h'}} </td>
           </tr>
           <tr>
             <td>Working day hours: </td>
             <td> {{workDayTime + ' h'}} </td>
           </tr>
           <tr>
             <td>Rate: </td>
             <td> {{rateOutput}} $</td>
           </tr>
           <tr>
             <td>Over rate: </td>
             <td>{{overRate}} $</td>
           </tr>
           <tr v-if="overTime > 0">
             <td>Over time: </td>
             <td>{{overTime.toFixed(2)  + ' h'}}</td>
           </tr>
           <tr v-if="overTime > 0">
             <td>Over time cash: </td>
             <td>{{overTimeCash.toFixed(2)}} $</td>
           </tr>
           <tr v-if="input__test">
             <td>Time per test: </td>
             <td>{{timeTest + ' h'}}</td>
           </tr>
           <tr v-if="input__test">
             <td>Cash per test: </td>
             <td>{{plusTest}} $</td>
           </tr>           
           <tr v-if="input__timeX2">
             <td>TimeX2 cash: </td>
             <td>{{plusTimeX2}} $</td>
           </tr>
         </table>
         </v-col>
     </v-row>
     <v-row justify="center">
          <v-col cols="12" style="text-align: center">
                Total cash: 
                {{result + ' $'}}
                <span v-if="this.dollarRate > 0"> | {{ exchangeMonayToUAH.toFixed(2) + ' UAH'}}</span>
                <v-btn
                    color="info"
                    icon="mdi-information-outline"
                    size="x-small"
                    @click="more__info = !more__info"
                    class="mb-1 info__icon"
                    elevation="0"
                >
                </v-btn>
          </v-col>
     </v-row>
     <!-- End output data -->
    </v-card>
 </v-container>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios'
import {DateTime} from 'luxon'
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
      dollarRate: '',
      //show form inputs
      input__test: true,
      input__timeX2: false,
      input__cashBonus: false,
      input__tax: false,
      input__4percentWeekend: false,
      input__dollarExchange: false,
      input__currentRateDollar: false,
      more__info: false,
      workDay: 22,
      dateForExchenge: null,
      // no UI variables
      totalTime: 0,
      overTime: 0,
      rateOutput: 0, //Для глаза чтобы тоже было ноль если убрать убедт просто пустая строка "не красиво")))
      overRate: 0,
      totalMoney: 0,
      totalTestPercent: 0,
      timeTest: 0,
      timeTestMoney: 0,
      checkBtnClick: false,
      workDayTime: 0,
      infoCurentDollar: null,
      exchangeDate: null,
      valut: null,
      overTimeCash: 0,
      // axios error
      axiosError: '',
      }
    },
    mounted(){
      this.dateForExchenge = DateTime.local().toFormat('kkkk'+'LL'+'dd')
      axios
        .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=' + this.dateForExchenge + '&json')
        .then(response => (this.valut = response.data[26].cc, this.infoCurentDollar = response.data[26].rate, this.exchangeDate = response.data[26].exchangedate))
        .catch(error => this.infoCurentDollar = error);
    },
    methods:{
      setDate(){
        this.dateForExchenge = DateTime.fromISO(this.dateForExchenge).toFormat('kkkk'+'LL'+'dd')
        axios
        .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=' + this.dateForExchenge + '&json')
        .then(response => (this.valut = response.data[26].cc, this.infoCurentDollar = response.data[26].rate, this.exchangeDate = response.data[26].exchangedate))
        
      },
      calculateSalary(){
        this.rateOutput = this.rate                                     // Читать выше для чего эта шляпа
        this.workDayTime = this.workDay * 8
        this.totalTime = this.workingTime
        this.overTime = this.totalTime - this.workDayTime
        this.overRate = this.rate * 1.5
        this.totalTestPercent = (this.firstTest + this.secondTest) / 2
        this.overTimeCash = this.overTime * this.overRate

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


        if (this.totalTime < this.workDayTime){
          this.totalMoney = this.totalTime * this.rate
        } else if (this.totalTime >= this.workDayTime){
            if (this.rate <= 2){
              this.totalMoney = this.totalTime * this.rate
            }
            else {
              this.totalMoney = (this.workDayTime * this.rate + (this.overTime * this.overRate))
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
      },
      inputCurencyUsdRare(){
        this.dollarRate = this.infoCurentDollar
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
      exchangeMonayToUAH(){
        return this.result * this.dollarRate
      }
    },
    })
</script>

<style scoped>
  .center{
    display: flex;
    justify-content: center;
  }
  td{
    padding: 0 2px;
  }
  .info__icon:hover{
    cursor: pointer;
    color: #311B92;
    
  }
</style>