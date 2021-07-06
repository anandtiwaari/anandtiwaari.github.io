<template>
<div class="one">
   <v-app-bar 
   color="deep-purple"
   >
   <v-app-bar-nav-icon v-on:click="change()">

   </v-app-bar-nav-icon>
   
       <ul>
   <nuxt-link to="/" class="alllink">
   <v-btn depressed="">Home</v-btn>
   </nuxt-link>
   <nuxt-link to="/About" class="alllink">
   <v-btn depressed="">About</v-btn>
   </nuxt-link>
   <nuxt-link to="/contact" class="alllink">
   <v-btn depressed="">Contact</v-btn>
   </nuxt-link>
       </ul>


   </v-app-bar>

    <v-navigation-drawer
    
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
                <nuxt-link to="/Notes"><v-img
  lazy-src="https://picsum.photos/id/11/10/6" 
  max-height="100"
  max-width="100"
  border-radius="50"
  src="https://source.unsplash.com/random"
></v-img>
</nuxt-link>

</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="100"
  max-width="100"
  src="https://source.unsplash.com/user/erondu/1600x900"
></v-img></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="100"
  max-width="100"
  src="https://source.unsplash.com/collection/190727/1600x900"
></v-img></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="100"
  max-width="100"
  src="https://source.unsplash.com/user/erondu/daily"
></v-img></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
</div>
</template>
        <!-- <nuxt-link  class="list" to="/">Home</nuxt-link>
        <nuxt-link class="list"  to="/About">About</nuxt-link>
        <nuxt-link  class="list" to="/contact">Contact Us</nuxt-link> -->

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    change() {
      this.drawer = true;
      console.log(this.drawer);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 16%;
}
.list {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
}
.nay {
  display: flex;
  justify-content: center;
  width: 95%;
  margin: auto;
  background-color: orange;
}
.alllink {
  list-style: none;
  text-decoration: none;
  /* display: flex; */
  margin: 0 0 0 45%;
}
</style>