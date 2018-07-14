<template>
  <ul>
    <li v-for="song in songs"
      v-on:click='selectSong(song)'>
      {{ song.name }}
    </li>
  </ul>
</template>

<script >
  export default {
    props: ['songs'],
    methods: {
      selectSong (song) {
        this.$emit('onSelectSong', song.name)
      }
    }
  }
</script>