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

  removeCards (state, id) {
    state.cards = state.cards.filter(card => card.id !== id)
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
  async removeCards ({ commit }, id) {
    try {
      const res = await axios.delete(
        `https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/cards/${id}`
      )
      console.log(res.data)
      commit('removeCards', id)
    } catch (err) {
      console.log(err)
    }
  },

  async addCards ({ commit }, payload) {
    try {
      const res = await axios.post(
        'https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/cards',
        payload
      )
      console.log(res.data)
      commit('addCards', res.data)
    } catch (err) {
      console.log(err)
    }
  },

  async getCards ({ commit }) {
    try {
      const res = await axios.get(
        'https://my-json-server.typicode.com/abhiraj2k/trello-clone-vue/cards'
      )
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
