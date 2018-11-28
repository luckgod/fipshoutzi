import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
        admin_info:{
            admin_code:'111',
            admin_token:'222',
            admin_phon:'',
            admin_name:'',
        }
    },
    mutations: {
        login (state, info) {
                            state.admin_info.admin_code = info.code;
                            state.admin_info.admin_token = info.toke;
                            state.admin_info.admin_phon = info.Cantant;
                            state.admin_info.admin_name = info.name;
                            },
        adminInfo(state) {
            console.log(state.admin_info)
        },
        logout(state) {
            state.admin_info = null;
            state.auth = false;
        }
    }
})