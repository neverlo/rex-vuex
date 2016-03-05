import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    cityName: '广东省',
    cityCode: '440000'
}

const mutations = {
    MODIFYCITY (state,cityName,cityCode) {
        state.cityName = cityName
        state.cityCode = cityCode
    }
}

export default new Vuex.Store({
    state,
    mutations
})

export const modifyCity = makeAction('MODIFYCITY')

function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

