export const state = () => ({
  isDark: false
})

export const mutations = {
  setTheme(state) {
    state.isDark = !state.isDark
  }
}
export const actions = {
  updateTheme({ commit }) {
    commit('setTheme')
  }
}
export const getters = {
  isDark: state => state.isDark
}
