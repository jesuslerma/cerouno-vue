<template>
  <div class="hello">
    {{song.name}}
    {{ artistName }}
    <button v-on:click='changeArtistName'>Cambiar nombre artiste</button>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: ['song', 'artistName'],
  methods: {
    changeArtistName () {
      this.$emit('onChangeArtistName', 'PLACEBO')
    }
  }
}
</script>