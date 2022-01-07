<template>
  <div class="main">
    <status
      v-for="status in statuses"
      :id="`status_${status.id}`"
      :key="status.id"
      :name="status.name"
      color=""
    >
      <card
        v-for="card in getCards(status.id)"
        :id="`card_${card.id}`"
        :key="card.id"
      >
        {{ card.name }}
      </card>
    </status>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Card from '~/components/Card.vue'
import Status from '~/components/Status.vue'

export default Vue.extend({
  components: { Status, Card },
  data () {
    return {
      statuses: [
        {
          id: 1,
          name: 'Not Started'
        },
        {
          id: 2,
          name: 'Pending'
        },
        {
          id: 3,
          name: 'Not completed'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({ cards: 'card/getCards' })
  },
  created () {
    this.$store.dispatch('card/getCards')
  },
  methods: {
    getCards (statusId: number) {
      return this.cards.filter((card: any) => card.statusId === statusId)
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
  /* align-items: center;
  justify-content: center; */
  min-height: 100vh;
  overflow-x: auto;
}
</style>
