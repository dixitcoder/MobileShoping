<template>
    <div>
      <div>
        <AboutVue style="color:white"/>
        <HelloWorld style="color:white"/>
      </div>
    </div>
  </template>
  <script>
import AboutVue from './About.vue'
import HelloWorld from './HelloWorld.vue'
  export default {
    name: 'PropVue',
    components:{
      AboutVue,HelloWorld
    },
    data (){
      return {
      name:'dixit'
      }
    }
  }
  </script>
  <style scoped>
  li{
      height: 40px;
      width: 100%;
      padding: 15px;
      border: 1px solid saddlebrown;
      display: flex;
      justify-content: center;
      align-items: center;
    }  
  a {
    color: #42b983;
  }
  </style>