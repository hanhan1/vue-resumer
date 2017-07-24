<template>
  <div id="preview">
    <h1>{{resume.profile.name || '请填写姓名'}}</h1>
    <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月'}}</p>
    <hr>
    <section v-if="filter(resume.projectHistory).length>0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.projectHistory)">
          {{project.project}} {{project.content}}
        </li>
      </ul>
    </section>
    
   <section v-if="filter(resume.workHistory).length>0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workHistory)">
          {{work.company}} {{work.content}}
        </li>
      </ul>
    </section>
  

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

