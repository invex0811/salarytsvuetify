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
.container{
  padding-top: 60px;
  height: 100vh;
  background-color: #EEEEEE;
}
.center__container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
input[type='number']{
  border-bottom: 2px solid black;
  font-size: 18px;
  padding: 0 3px 0 3px;
}
input:focus{
  outline: none;
  border-bottom: 2px solid #3F01BD;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
/*checkbox styles*/
.checkbox {
  user-select: none !important;
}
.checkbox input {
  display: none;
}
.checkbox span {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-height: 20px;
  min-width: 20px;
  padding-left: 25px;
  cursor: pointer;
}
.checkbox span:empty {
  padding-left: 0;
}
.checkbox span:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0);
  box-shadow: inset 0 0 0 2px #4527A0;
  border-radius: 2px;
  transition: all 0.1s cubic-bezier(0.64, 0.57, 0.67, 1.53);
}
.checkbox span:after {
  content: '';
  display: block;
  width: 13px;
  height: 6px;
  position: absolute;
  top: 5px;
  left: 4px;
  border: 1px solid;
  border-color: transparent transparent #383838 #383838;
  transform: scale(5) rotate(-45deg);
  opacity: 0;
  pointer-events: none;
  transition: all 0.1s cubic-bezier(0.64, 0.57, 0.67, 1.53);
}
.checkbox input:checked + span:after {
  opacity: 1;
  border-color: transparent transparent #311B92 #311B92;
  box-shadow: inset 1px -1px 0 #311B92;
  transform: scale(1) rotate(-45deg);
}
/* END CHECKBOX STYLE */


</style>