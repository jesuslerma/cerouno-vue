<template>
  <div id="app">
    <new-song v-on:onSaveSong="handleSave"/>
    <song-list :songs="songs" 
      v-on:onSelectSong='handleSelected'/>
    <song
      v-on:onChangeArtistName='handleChange'
      :song="selectedSong" 
      :artistName="artist.name"/>
  </div>
</template>

<script>
import Song from './components/Song'
import SongList from './components/SongList'
import NewSong from './components/NewSong'

const song = {
 typing: false,
 lang: 'en',
 name: "Every you, every me",
 artist: {
  name: "Placebo"
 },
 album: {
  name: "Without You I'm Nothing",
  songs: [
   "Pure Morning",
   "Brick shithouse",
   "You Don't Care About Us",
   "Ask for answers",
   "Without You I'm Nothing",
   "Allergic (To thoughts of mother earth)",
   "The crawl",
   "Every you, Every Me",
   "My sweet prince",
   "Summer's gone",
   "Scared of girls",
   "Burger Queen"
  ]
 },
 lyrics: {
  en: `
  Sucker love is heaven sent
  You pucker up our passion's spent
  My hearts a tart your body's rent
  My body's broken yours is bent
  Carve your name into my arm
  Instead of stressed I lie here charmed
  Cause there's nothing else to do
  Every me and every you
  Sucker love a box I choose
  No other box I choose to use
  Another love I would abuse
  No circumstances could excuse
  In the shape of things to come
  Too much poison come undone
  Cause there's nothing else to do
  Every me and every you
  Every me and every you
  Every me
  Sucker love is known to swing
  Prone to cling and waste these things
  Pucker up for heavens sake
  There's never been so much at stake
  I serve my head up on a plate
  It's only comfort, calling late
  Cause there's nothing else to do
  Every me and every you
  Every me and every you
  Every me,
  Every me and every you
  Every me
  Like the naked leads the blind
  I know I'm selfish, I'm unkind
  Sucker love I always find
  Someone to bruise and leave behind
  All alone in space and time
  There's nothing here but what here's mine
  Something borrowed, something blue
  Every me and every you
  Every me and every you
  Every me
  Every me and every you
  Every me`,
  es: ``
 }
}
export default {
  name: 'App',
  components: {
    Song,
    SongList,
    NewSong
  },
  methods: {
    handleSave (song) {
      this.songs.push(song)
      console.log(song)
    },
    handleSelected (songName) {
      const song = this.songs.find(song => {
        return song.name === songName
      })
      this.selectedSong = song
    },
    handleChange (newName) {
      this.artist.name = newName
    }
  },
  data () {
    return {
      selectedSong: {
        name: ''
      },
      artist: song.artist,
      songs: [song]
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
