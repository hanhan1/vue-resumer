<template>
  <div id="topbar">
    <div class="logo">VueResumer</div>
    <div class="actions">
      <div v-if="logined" class="userActions">
        <span class="welcome">你好，{{user.username}}</span>
        <a class="button" href="#" @click.prevent="signOut">登出</a>
      </div>
      <div v-else class="userActions">
        <a class="button primary" href='#' @click.prevent="signUpDialogVisible=true">注册</a>
        <a class="button" href="#" @click.prevent="signInDialogVisible=true">登录</a>
        <el-button type="primary">保存</el-button>
        <el-button v-on:click="preview">预览</el-button>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
          <SignUpForm @success="signIn($event)"></SignUpForm>
        </MyDialog>
        <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible=false">
          <SignUpForm @success="signIn($event)"></SignUpForm>
        </MyDialog>
  
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 16px;
}

.actions>a {
  display: flex;
  .userActions {
    margin-right: 3em;
    .welcome {
      margin-right: .5em;
    }
  }
}
</style>
<script>
import MyDialog from './MyDialog'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import AV from '../lib/leancloud'
export default {
  data() {
    return {
      signUpDialogVisible: false,
      signInDialogVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    logined() {
      return this.user.id
    }
  },
  components: {
    MyDialog, SignUpForm
  },
  methods: {

    preview() {

      this.$emit('preview')
    },
    signOut() {
      AV.User.logOut()
      this.$store.commit('removeUser')
    },
    signIn(user) {
      this.signUpDialogVisible = false
      this.signInDialogVisible = false
      this.$store.commit('setUser', user)
    }
  }
}
</script>
