import axios from 'axios'
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
      await axios.delete(`http://localhost:3000/status/${id}`)
      commit('removeStatus', id)
    } catch (err) {
      console.log(err)
    }
  },

  async addStatus ({ commit }, payload) {
    try {
      const res = await axios.post('http://localhost:3000/status', payload)
      commit('addStatus', res.data)
    } catch (err) {
      console.log(err)
    }
  },

  async getStatus ({ commit }) {
    try {
      const res = await axios.get('http://localhost:3000/status')
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
