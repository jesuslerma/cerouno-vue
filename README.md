# [Cero Uno Professional Progam](https://cerouno.io/programs/professional) - Semana 5 - Aplicaciones Client-Side

Durante el programa se han visto temas de backend usando node. En esta semana seguiremos usando node pero para instalar y
usar herramientas que nos permitirán tener una mejor arquitectura en nuestro front end. Esta semana veremos Vue.js.

Vue es un framework progresivo de javascript para hacer aplicaciones web reactivas.

## Introducción a Vue.js

Nuestra primer sección consistirá en utilizar la librería core de vue.js importada desde cdn para entender los conceptos básico
de la librería. Para esto utilizaremos diferentes snippets hospedados en codepen.io

* [Empezamos con Vue](https://codepen.io)
* [Directiva if](https://codepen.io/chuylerma/pen/wxwLyo)
* [Directiva for](https://codepen.io/chuylerma/pen/yqBdjp)
* [Directiva model](https://codepen.io/chuylerma/pen/ajogdK)
* [Directiva on](https://codepen.io/chuylerma/pen/BPBgOQ)
* [Componentes](https://codepen.io/chuylerma/pen/NBKQry)
* [Comunicación básica de componentes](https://codepen.io/chuylerma/pen/NBWKQG)

## Introducción a vue-cli
En esta sección utilizaremos vue-cli para re-crear la aplicación mostrada en codepen. El cli tiene boilerplates para crear
single page apps utilizando webpack. Usaremos webpack.

### Instalación
Para poder instalar la última versión estable de vue debemos tener instalado node y correr el comando:
```bash
npm install -g vue-cli
```
### Proyecto base
Esto instalará una `vue-cli >= 2.9.6`. Ahora podremos empezar creando nuestro primer proyecto de vue basado en el template de webpack.

```
vue init webpack lyrics
```
Nos mostrará las siguientes opciones:

```bash
? Vue build (Use arrow keys)
❯ Runtime + Compiler: recommended for most users
  Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere 
```

Seleccionamos Runtime + Compiler.

```bash
? Install vue-router? (Y/n) 
```
Escribimos n y damos enter.

```bash
? Use ESLint to lint your code? (Y/n)
```
Escribimos n y damos enter.

```bash
? Set up unit tests (Y/n)
```
Escribimos n y y damos enter.

```bash
❯ Jest 
  Karma and Mocha 
  none (configure it yourself) 
```
Selecionamos `Jest` y damos enter.

```bash
? Setup e2e tests with Nightwatch? (Y/n)
```
Escribimos n y y damos enter.

```bash
? Should we run `npm install` for you after the project has been created? (recommended) 
❯ Yes, use NPM 
  Yes, use Yarn 
  No, I will handle that myself 
```
Seleccionamos `Yes, use NPM`

Con estas configuraciones estamos instalando solo la parte core de vuejs, junto con jest con la suite de pruebas estándar configurada. Podemos ver `package.json` para ver los paquetes instalados.

Este comando nos genera la carpeta lyrics con la siguiente estructura:
```bash
cd lyrics
tree .
.
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html
├── node_modules
├── package.json
├── README.md
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   └── main.js
├── static
└── test
    └── unit
        ├── jest.conf.js
        ├── setup.js
        └── specs
            └── HelloWorld.spec.js

```
### Empezar nuestra aplicación

Primero vamos a remplazar el nombre del componente generado por default: `HelloWorld`.

```bash
mv src/components/HelloWorld.vue src/components/Song.vue
```
Abrimos `src/components/Song.vue` y borramos el contenido para dejarlo así:
```html
<template>

</template>

<script>
export default {
  props: ['song'],
  methods: {
  saveSong () {
   if (this.song.lang === 'es') {
    this.song.typing = false
    this.song.lyrics.es = this.$refs.songEsInput.value.toString()
   }
  }
 }
}
</script>
```

Para rescribir la aplicación tendremos que ir al último codepen que usamos https://codepen.io/chuylerma/pen/NBWKQG y copiamos el código html para pegarlo dentro de la etiqueta `<template>` de nuestro archivo `src/components/Song.vue.`

```html
<template>
  <div>
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
```

Para utilizar el componente tendremos que modificar el código de `src/App.vue` y podremos el código que estaba en el bloque del div#app de nuestro codepend https://codepen.io/chuylerma/pen/NBWKQG
```html
<template>
  <div id="app">
    <ul>
     <li v-for="song of songs" @click="selectedSong = song">
      {{ song.name }}
     </li>
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
  data: {
    selectedSong: {},
    songs: [song]
   },
   computed: {
    emptySelectedSong () {
     return Object.keys(this.selectedSong).length === 0
    }
   }
}
</script>
```
Para finalizar usaremos el archivo src/data.js para guardar la informacion que mostraremos.

```javascript
// src/data.js
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
Every me
`,
  es: ``
 }
}

export {song}
```
## VueRouter
Después de tener nuestros dos componentes básicos veremos como generar rutas para poder acceder a los componentes.

## Vuex
Una vez creados nuestros primeros componentes necesitaremos administrar el estado de la aplicación para tener la comunicación
entre componentes más recomendada.

## Axios/RestClient

Hasta ahorita hemos almacenado todo en memoria. Trabajaremos con un pequeño cliente rest que consumirá endpoints de un rest server.

## Testing con Jest

Introduciremos el tema de testing unitario aplicado a componentes, mutaciones y rutas.

## Mejores prácticas.
