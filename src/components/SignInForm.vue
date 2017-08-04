<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <!--<input type="submit" value="提交">-->
        <el-button  @click="signIn">登录</el-button>
        <span>{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: '',
      currentUser:null
    }
  }, 
  created() {
     this.currentUser = this.getCurrentUser();
  },

  methods: {
    // signIn(){
    //   let{username,password}=this.formData
    //   AV.User.logIn(username,password).then(()=>{
    //     this.$emit('setUser',getAVUser())
    //   },(error)=>{
    //     this.errorMessage=getErrorMessage(error)
    //   });
    // }
    signIn:function() {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
          this.$emit('success',getAVUser())
      }, (error) => {
      this.errorMessage=getErrorMessage(error)
      });
    },
    getCurrentUser: function () {
      let current = AV.User.current()
      if (current) {
        let { id, createdAt, attributes: { username } } = AV.User.current()
        return { id, username, createdAt }
      } else {
        return null
      }
    },



  }
}
</script>

