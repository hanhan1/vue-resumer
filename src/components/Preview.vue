<template>
  <div id="preview">
    
    <h1>姓名  {{resume.profile.name }}</h1>
    <p>城市：{{resume.profile.city }} | 出生年月：{{resume.profile.birth }}</p>
    <hr>
    <h2>工作经历</h2>
    <hr>
    <section v-if="filter(resume.workHistory).length>0">
      <ul>
        <li v-for="work in filter(resume.workHistory)">
          {{work.company}} {{work.content}}
        </li>
      </ul>
    </section>
    <hr>
    <h2>项目经历</h2>
    <hr>
    <section v-if="filter(resume.projectHistory).length>0">
      <ul>
        <li v-for="project in filter(resume.projectHistory)">
          {{project.project}} {{project.content}}
        </li>
      </ul>
    </section>
    <hr>
    <h2>获奖经历</h2>
    <hr>
    <section v-if="filter(resume.rewardHistory).length>0">
      <ul>
        <li v-for="reward in filter(resume.rewardHistory)">
          {{reward.reward}}  {{reward.time}}
        </li>
      </ul>
    </section>
    <hr>
    <h2>学习经历</h2>
    <hr>
    <section v-if="filter(resume.studyHistory).length>0">
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
          {{study.school}}  {{study.duration}}
        </li>
      </ul>
    </section>
    <hr>
    <h2>联系方式</h2>
    <hr>
  
    <p>QQ: {{resume.contact.QQ }}</p>
    <p>微信: {{resume.contact.weChat }}</p>
    <p>邮箱: {{resume.contact.email }}</p>
      
    <p>手机: {{resume.contact.mobile  }}</p>
  </div>
</template>

<style>
#preview {
  background: white;
}
</style>
<script>
export default {
  props: ['resume'],
  methods: {
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
  }
}
</script>

