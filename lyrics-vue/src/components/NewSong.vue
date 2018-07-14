<template>
  <div>
    <h1>New Song</h1>
    <label>Song Name</label>
    <input v-model='song.name'/>
    <button  v-on:click="saveSong">
      Save Song
    </button>
  </div>
</template>

<script >
  export default {
    name: 'NewSong',
    data () {
      return {
        song: {
          name: ''
        }
      }
    },
    methods: {
      saveSong () {
        this.$emit('onSaveSong', {...this.song})
      }
    }
  }
</script>