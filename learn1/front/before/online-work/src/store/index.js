import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);

import user from './modules/user'

//创建并暴露store
export default new Vuex.Store({
    modules: {
        user
    }

})