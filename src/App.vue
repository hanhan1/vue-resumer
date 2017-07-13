<template>
  <div id="app">
  <Topbar/>
  <Preview/>
  <Editor/>
</div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'

import Preview from './components/Preview'
export default {
 
  components: {
    Topbar,Editor,Preview
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
