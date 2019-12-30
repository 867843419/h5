import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    equimentmodel:'',
    equipmentDetail:{},
    pageList:{},
    token:''
  },
  mutations: {
    setEquimentmodel (state, val) {
      state.equimentmodel = val;
    },
    setEquipmentDetail (state, val) {
      state.equipmentDetail = val;
    },
    getToken(state, val){
      state.token = val;
    },
    homeList(state, val){
      state.pageList = val;
    }
  }
})
