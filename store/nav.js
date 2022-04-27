export const state = () => ({
    isNav: false
})

export const mutations = {
    setNav(state) {
        state.isNav = !state.isNav
    }
}
export const actions = {
    updateNav({ commit }) {
        commit('setNav')
    }
}
export const getters = {
    isNav: state => state.isNav
}
