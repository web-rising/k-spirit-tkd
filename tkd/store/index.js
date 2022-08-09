export const state = () => ({
  menuOpen: false,
})

export const mutations = {
  toggleMenu(state) {
    state.menuOpen = !state.menuOpen
  },
}

export const actions = {
  toggleMenu({ commit }) {
    commit('toggleMenu')
  },
}
