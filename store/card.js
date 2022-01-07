import axios from 'axios'
export const state = () => ({
  cards: []
})

export const mutations = {
  setCards (state, cards) {
    state.cards = cards
  },
  addCards (state, cards) {
    state.cards.push(cards)
  },
  changeStatus (state, { cardId, statusId }) {
    for (let i = 0; i < state.cards.length; i++) {
      if (state.cards[i].id === cardId) {
        state.card[i].statusId = statusId
      }
    }
  }
}
export const actions = {
  async addCards ({ commit }, payload) {
    const res = await axios.post(
      'https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/cards',
      payload
    )
    console.log(res.data)
    commit('addCards', res.data)
  },
  async getCards ({ commit }) {
    try {
      const res = await axios.get(
        'https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/cards'
      )
      console.log(res.data)
      commit('setCards', res.data)
    } catch (err) {
      console.log(err)
    }
  }
}
export const getters = {
  getCards (state) {
    return state.cards
  }
}
