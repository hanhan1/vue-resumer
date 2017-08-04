import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
    icons: ['shenfenzheng', 'work', 'book', 'heartsurgery', 'jiangbei', 'phone', 'phone'],
    user: {
      id: '',
      username: ''
    },
    resume: {
      profile: {
        name: '',
        city: '',
        birth: ''
      },
      workHistory: [
        {
          company: '',
          content: ''
        }
      ],
      studyHistory: [
        {
          school: '',
          duration: ''
        }
      ],
      projectHistory: [
        {
          project: '',
          content: ''
        }
      ],
      rewardHistory: [
        {
          reward: '',
          time: ''
        }
      ],
      contact:
      {
        QQ: '',
        weChat: '',
        email: '',
        mobile: ''
      },

    },
  },
  mutations: {
    increment(state) {
      state.count++
    },
    initState(state, payload) {
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.icons = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
      console.log(state.user)
    },
    removeUser(state){
      state.user.id=''
    }
  },
})