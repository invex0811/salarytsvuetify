<template>
      <v-app-bar
        density="compact"

      >
        <v-container fluid>
          <v-row
              align="center"
          >
            <v-col>
              <v-app-bar-nav-icon
                  @click.stop="show = !show"
              ></v-app-bar-nav-icon>
            </v-col>
            <v-col align="center">
              <v-app-bar-title>
                <router-link :to="url">
                  <v-img
                      max-height="30"
                      src='../assets/Group_8PNG.png'
                  ></v-img>
                </router-link>
              </v-app-bar-title>
            </v-col>
            <v-col></v-col>
          </v-row>

        </v-container>
      </v-app-bar>
      <v-navigation-drawer
          v-model="show"
          color="rgba(63, 1, 189,.7)"
      >
        <v-list>
          <v-list-item style="font-size: 26px; color: #FFFFFF ">Tools:</v-list-item>
          <router-link
              class="a_link"
              v-slot="{navigate, isActive, isExactActive }"
              v-for="link in links"
              :to="link.url"
              :key="link.title"
          >
            <v-list-item @click="navigate" >
              <v-hover  v-slot="{ hover, props }">
                  <v-card
                      class="test"
                      outlined height="40"
                      justify="center"
                      text-color="#FFF"
                      :elevation="hover ? 8 : 2"
                      v-bind="props"
                      width="100%"
                      border
                      :class="[isActive && 'active', isExactActive && 'active']"

                  >
                    <v-card-header>{{link.title}}</v-card-header>
                  </v-card>
              </v-hover>
            </v-list-item>
          </router-link>
        </v-list
            >
      </v-navigation-drawer>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "Navbar",
  data() {
    return {
      url: '/',
      show: false,
      links: [
        // {img: 'fi-rr-dollar', title: 'Salary', url: '/salary'},
        // {img: 'fi-rr-dashboard', title: 'Over speed', url: '/overSpeed'},
        // {img: 'fi-rr-time-forward-ten', title: 'Converting time', url: '/convertingTime'},
        // {img: 'fi-rr-time-add', title: 'Plus time' , url: '/plusTime'},
        // // {img: 'fi-rr-text',title: 'Phrases', url: '/phrasesPage'},
        // //  {img: 'fi-rr-marker',title: 'Map USA', url: '/mapUSA'},
        {img: 'mdi-menu', title: 'Salary', url: '/salary'},
        {img: 'fi-rr-dashboard', title: 'Over speed', url: '/overSpeed'},
        {img: 'fi-rr-time-forward-ten', title: 'Converting time', url: '/convertingTime'},

      ]
    }
  },
})
</script>

<style scoped>
.a_link {
  width: 100%;
  text-decoration: none;
}
.test{
   font-size: 18px;
   background: rgba(48, 1, 142, .7);
 }
.active{
  background: rgba(32, 1, 95, 1);
  color: black
}



</style>