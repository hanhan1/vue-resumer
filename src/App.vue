<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar" v-on:preview="preview" />
    <main>
      <Editor v-bind:resume="resume" class="editor" />
  
      <Preview v-bind:resume="resume" class="preview" />
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import './assets/reset.scss'
import 'normalize.css/normalize.css'
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
import store from './store/index'
import AV from './lib/leancloud'
import getAVuser from './lib/getAVUser'
export default {
  store,
  components: {
    Topbar, Editor, Preview
  },
  created(){
    document.body.insertAdjacentHTML('afterbegin',icons)
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState',state)
    this.$store.commit('setUser',getAVuser())
  },

  data() {
    return {
      previewMode: false,
    }
  },
  computed:{
    resume(){
      return this.$store.state.resume
    },
  },
  methods: {
    preview() {
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    },
  },
}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothiing: grayscale;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

#app main {
  background: white;
  display: flex;
  flex: 1;
  width: 100%;
  align-self: center;

  background: #DDD;
  >.editor {
    width: 40em;
    margin: 16px 8px 16px 16px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }

  >.preview {
    flex: 1;
    margin: 16px 16px 16px 8px;
    border-radius: 4px;
    overflow: auto;
    box-shadow: 0 0 3px hsla(0, 0, 0, 0.5);
  }
}

.previewMode>#topbar {
  display: none;
}

.previewMode #editor {
  display: none;
}
.previewMode #preview {
  max-width: 800px;

  border: 2px solid red;
  
  display: block;
  
  
  
}
#exitPreview{
  display: none;
}
.previewMode #exitPreview{
  display: inline-block;
  position: fixed;
  right: 16px;
}
</style>
