export const state = () => ({
  status: []
})

export const mutations = {
  setStatus (state, status) {
    state.status = status
  },
  addStatus (state, status) {
    state.status.push(status)
  },
  removeStatus (state, id) {
    state.status = state.status.filter(s => s.id !== id)
  }
}
export const actions = {
  async removeStatus ({ commit }, id) {
    try {
      await axios.delete(
        `https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/status/${id}`
      )
      commit('removeStatus', id)
    } catch (err) {
      console.log(err)
    }
  },

  async addStatus ({ commit }, payload) {
    try {
      const res = await axios.post(
        'https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/status',
        payload
      )
      commit('addStatus', res.data)
    } catch (err) {
      console.log(err)
    }
  },

  async getStatus ({ commit }) {
    try {
      const res = await axios.get(
        'https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/status'
      )
      commit('setStatus', res.data)
    } catch (err) {
      console.log(err)
    }
  }
}
export const getters = {
  getStatus (state) {
    return state.status
  }
}
