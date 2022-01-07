<template>
  <div class="main">
    <status
      v-for="status in status"
      :id="`status_${status.id}`"
      :key="status.id"
      :name="status.name"
      color=""
      @addCard="handleAddCard"
      @addClick="handleAddClick"
    >
      <card
        v-for="card in getCards(status.id)"
        :id="`card_${card.id}`"
        :key="card.id"
      >
        {{ card.name }}
      </card>
    </status>
    <add-card
      v-if="showAddCard"
      :status-id="statusId"
      @selectedName="handleAddCard"
      @closed="handleCloseClick"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import AddCard from '~/components/AddCard.vue'
import Card from '~/components/Card.vue'
import Status from '~/components/Status.vue'

export default Vue.extend({
  components: { Status, Card, AddCard },
  data () {
    return {
      showAddCard: false,
      statusId: ''
    }
  },
  computed: {
    ...mapGetters({ cards: 'card/getCards', status: 'status/getStatus' })
  },
  created () {
    this.$store.dispatch('card/getCards')
    this.$store.dispatch('status/getStatus')
  },
  methods: {
    getCards (statusId: number) {
      return this.cards.filter((card: any) => card.statusId === statusId)
    },
    handleAddClick (e: any) {
      this.showAddCard = true
      this.statusId = e
    },
    handleAddCard (e: any) {
      const tempObj = {
        name: e,
        statusId: parseInt(this.statusId)
      }
      this.$store.dispatch('card/addCards', tempObj)
      this.$store.dispatch('card/getCards')
    },
    handleCloseClick () {
      console.log('close')
      this.showAddCard = false
    }
  }
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.main {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  overflow-x: auto;
}
</style>
