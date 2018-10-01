<template>
  <div id="app">
    <h1>Arena API with Axios</h1>

      <player-info>
      </player-info>

  </div>
</template>

<script>
import playerInfo from './components/playerInfo';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    playerInfo,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:600px;
  margin: 0 auto;
}

h1, h2 {
  font-weight: normal;
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
