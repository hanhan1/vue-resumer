<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5,6]" v-bind:class="{active:currentTab === i}" v-on:click="currentTab=i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
  
    </nav>
    <ol class="panes">
      <li v-bind:class="{active:currentTab === 0}">
        <ProfileEditor v-bind:profile="resume.profile" />
      </li>
      <li v-bind:class="{active:currentTab===1}">
        <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" v-bind:title="'工作经历'" />
      </li>
      <li v-bind:class="{active:currentTab===2}">
        <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间'}" v-bind:title="'学习经历'" />
      </li>
      <li v-bind:class="{active:currentTab===3}">
        <ArrayEditor v-bind:items="resume.projectHistory" v-bind:labels="{project:'项目',content:'项目内容'}" v-bind:title="'项目经历'" />
      </li>
      <li v-bind:class="{active:currentTab===4}">
        <ArrayEditor v-bind:items="resume.rewardHistory" v-bind:labels="{reward:'奖项',time:'时间'}" v-bind:title="'获奖经历'" />
      </li>
      <li v-bind:class="{active:currentTab===5}">
        <ContactEditor v-bind:contact="resume.contact" />
      </li>
      <li v-bind:class="{active:currentTab===6}">
        <ContactEditor v-bind:contact="resume.contact" />
        {{count}}
        <button @click="add">test</button>
      </li>
  
    </ol>
  </div>
</template>

<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
import ContactEditor from './ContactEditor'
export default {
  components: { ProfileEditor, ArrayEditor, ContactEditor },
  props: ['resume'],
  data() {
    return {
      currentTab: 0,
    }

  },
  computed:{
    count(){
      return this.$store.state.count
    },
    icons:{
      get(){
        return this.$store.state.icons     
      },
      set(value){
        return this.$store.commit('switchTab',value)
      }
    },
  },
  methods: {
    add(){
      this.$store.commit('increment')
    }
  }

}


</script>
<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
  >nav {
    background: #DDD;
    width: 80px;
    >ol>li {
      padding: 16px 0;
      text-align: center;

      >.icon {
        width: 40px;
        height: 40px;
        fill: white;
      }

      &.active {
        background: white;
        >.icon {
          fill: black;
        }
      }
    }
  }
  >.panes {
    flex: 1;
    .container {
      position: relative;
      .el-icon-delete {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    >li {
      display: none;
      padding: 32px;
      height: 100%;
      overflow: auto;
      &.active {
        display: block;
      }
    }
  }
}
</style>
