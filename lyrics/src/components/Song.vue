<template>
  <div><!--Every component should have a single root element-->
    <h1>{{ song.name }} - {{ song.artist.name }}</h1>
    <input type="radio" v-model="song.lang" value="es">es<br>
    <input type="radio" v-model="song.lang" value="en">en<br>

    <p v-if="song.lang === 'en'">
    {{ song.lyrics.en}}
    </p>
    <p v-else-if="song.lang === 'es' && song.lyrics.es !== '' && !song.typing">
     {{ song.lyrics.es}}
    </p>

    <textarea v-else cols="30" rows="10" v-on:input="song.typing = true" ref="songEsInput">
     Add spanish lyrics
    </textarea>
    <br>
    <button v-if="song.typing" v-on:click="saveSong" >
     Update song in spanish
    </button>
    <h3>Album - {{ song.album.name }}</h3>
    <ul>
     <li v-for="song in song.album.songs">
      {{song}}
     </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Song',
  props: ['song']
}
</script>