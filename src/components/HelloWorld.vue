<template>
  <div class="hello">
    <input type="text" v-model="email"><br><br>
    <input type="text" v-model="pass"><br><br>
    <button type="button" @click="get()">Get</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      email:this.email,
      pass:this.pass
    }
  },
  methods: {
  async get(){
      console.log(this.email,this.pass)
      const res = await axios.get(`http://localhost:3000/items`);
      console.log(res);
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
