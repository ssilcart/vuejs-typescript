import Vue from 'vue';
import Vuex from 'vuex';

interface StateDefinitions {
    count: number,
    name: String,
};

Vue.use(Vuex);

const state = {
    name: '',
    count: 0,
};

const mutations = {
    incrementCount (state: StateDefinitions) {
        state.count++;
    },
    changeName (state: StateDefinitions, param: String) {
        state.name = param;
    }
};

export default new Vuex.Store({
  state,
  mutations
})