<template>
  <div id="app">
    <h2 style="padding:40px">Shopping Mobile</h2>
    
    <!-- <Login /> -->
        <router-link class="padding"  v-if="loggedIn" to="/login">Log out</router-link> 
        <router-link class="padding" v-if="!loggedIn" to="/login">Log in</router-link>
        <router-link class="padding" v-if="!loggedIn" to="/login">Log in</router-link>
        <router-link class="padding" to="/about">About</router-link>
        <router-link class="padding" to="/dashboard">Profile</router-link>
    <template v-if="$route.matched.length">
      <router-view></router-view>
    </template>
    <template v-else>
      <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    </template>
  </div>
  <div>
    <!-- <prop-vue title="Hello World "/> -->
    <!-- <Login /> -->
  </div>
</template>

<script>
// import PropVue from './components/PropVue.vue'
import auth from './auth'
// import Login from './components/Login.vue'
// import Login from './components/Login.vue'
export default {
  // components: { PropVue ,Login },
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
<style>
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    color: #2c3e50;
  }

  #app {
    padding: 0 20px;
    text-align: center;
    margin: auto;
  }

  ul {
    line-height: 1.5em;
    padding-left: 1.5em;
  }

  a {
    color: #7f8c8d;
    text-decoration: none;
  }

  a:hover {
    color: #4fc08d;
  }
  .padding {
    border: none;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    padding-right: 40px;
    border-radius: 11px;
    padding: 25px;
    color: black;
    color: white;
    padding-left: 10px;
  }
  body{
    background-image: url('https://t3.ftcdn.net/jpg/02/64/92/28/360_F_264922838_NErJEovZiP9MTa49apqL1Vs3f88ZT8Dg.jpg');
    background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  }
</style>