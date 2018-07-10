<template>
  <div id="app">
    <ul>
     <li v-for="song of songs" @click="selectedSong = song">
      {{ song.name }}
     </li   </ul>
    </ul>
    <div v-if="!emptySelectedSong" >
      <Song
      :song="selectedSong"/>
    </div>
  </div>
</template>

<script>
import Song from './components/Song.vue'
import {song} from './data'

export default {
  name: 'App',
  components: {
    Song
  },
  data () {
    return {
      selectedSong: {},
      songs: [song]
    }
  },
  computed: {
    emptySelectedSong () {
      return Object.keys(this.selectedSong).length === 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
