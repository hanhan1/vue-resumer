<template>
  <div id="preview">
    <section data-name="profile" v-show="resume.profile">
      <h1> 姓名 {{resume.profile.name }}</h1>
      <p><small>城市：{{resume.profile.city }} | 出生年月：{{resume.profile.birth }}</small></p>
      <hr>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
    <h2>工作经历</h2>
    <hr>
    <section v-if="filter(resume.workHistory).length>0">
      <ul>
        <li v-for="work in filter(resume.workHistory)">
         <h3> {{work.company}} </h3>
         <p v-show="work.content">{{work.content}}</p>
        </li>
      </ul>
    </section>
    </section>

    <section data-name = "projectHistory" v-show="resume.projectHistory">
    <h2>项目经历</h2>
    <hr>
    <section v-if="filter(resume.projectHistory).length>0">
      <ul>
        <li v-for="project in filter(resume.projectHistory)">
         <h3>{{project.project}}</h3>
         <span v-show="project.content"> {{project.content}}</span>
        </li>
      </ul>
    </section>
    
    </section>

    <section data-name="awardHistory" v-show="resume.rewardHistory">
    <h2>获奖经历</h2>
    <hr>
    <section v-if="filter(resume.rewardHistory).length>0">
      <ul>
        <li v-for="reward in filter(resume.rewardHistory)">
          <h3>{{reward.reward}}</h3>
          <p v-show="reward.time">{{reward.time}}</p>
        </li>
      </ul>
    </section>
    
    </section>

    <section data-name="studyHistory" v-show="resume.studyHistory">
    <h2>学习经历</h2>
    <hr>
    <section v-if="filter(resume.studyHistory).length>0">
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
         <h3> {{study.school}} </h3>
         <p v-show="study.duration">{{study.duration}}</p>
        </li>
      </ul>
    </section>
    
    </section>

    <h2>联系方式</h2>
    <hr>
  
    <p>QQ: {{resume.contact.QQ }}</p>
    <p>微信: {{resume.contact.weChat }}</p>
    <p>邮箱: {{resume.contact.email }}</p>
  
    <p>手机: {{resume.contact.mobile }}</p>
  </div>
</template>

<style lang="scss">
#preview {
  background: white;
  padding-left: 50px;
  padding-right: 100px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0, 0.25);
  padding: 2em;
  color: #333;
  line-height: 1.2;
  overflow: auto;
  *{
    box-sizing: border-box;
    font-variant: normal;
    font-weight: normal;
  }
  section +section {margin-top: 2em;}
  p{white-space: pre-line;}
  >h2:first-child {
    background: #ddd;
    display: inline-block;
    padding: 2em;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  >section {
    min-height: 100px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  section[data-name="profile"]{
    >h1{margin:.1em 0;
    font-size: 4em;}
  }
  section[data-name="studyHistory"],
  section[data-name="awardHistory"],
  section[data-name="projectHistory"],
  section[data-name="workHistory"]{
    li+li{
      margin-top: 1em;
    }
    li{
      h3{
        border-bottom: 1px solid#999;padding-bottom: .3em;
        margin-bottom: .3em;
      }
    }
  }
  section[data-name="projectHistory"]{
    li{
      line-height: 1.5
    }
  }
}
</style>
<script>
export default {
  props: ['resume'],
  methods: {
    created(){
      console.log(this.resume)
    },
    filter(array) {
      return array.filter(item => !this.isEmpty(item))
    },
    isEmpty(object) {
      let empty = true
      for (let key in object) {
        if (object[key]) {
          empty = false
          break
        }
      }
      return empty
    }
  },
  computed: {
    resume() {
      return this.$store.state.resume
    }
  },
}
</script>



