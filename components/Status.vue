<template>
  <div class="status">
    <div class="status__head">
      <div class="status__name-count">
        <span class="status__name">
          {{ name }}
        </span>
      </div>
      <div class="status__details-add">
        <!-- <div class="status__details">
          <font-awesome-icon icon="ellipsis-h" />
        </div>
        <div class="status__add">
          <font-awesome-icon icon="plus" />
        </div> -->
      </div>
    </div>
    <div
      :id="id"
      class="status__content"
      @dragover.prevent
      @drop.prevent="drop"
    >
      <slot />
    </div>
    <div class="status__foot">
      <div class="status__add">
        <div class="status__add-card" @click="handleAddClick">
          <font-awesome-icon icon="plus" /> New
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    ...mapMutations({
      changeStatus: 'card/changeStatus'
    }),
    drop (e) {
      const cardId = e.dataTransfer.getData('card_id')
      const card = document.getElementById(cardId)
      card.style.display = 'flex'
      e.target.appendChild(card)
      const statusId = e.target.id.split('_')[1]
      this.$store.commit('card/changeStatus', { cardId, statusId })
    },

    handleAddClick () {
      const statusId = this.id.split('_')[1]
      this.$emit('addClick', statusId)
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  min-width: 350px;
  width: 300px;
  padding: 20px;
  .status__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    .status__name-count {
      display: flex;
      .status__name {
        background-color: #ae00ff;
        padding: 2px 5px;
        border-radius: 4px;
        color: white;
      }
    }
    .status__details-add {
      display: flex;
      color: #ccc;
      & > div {
        cursor: pointer;
      }
      .status__details {
        margin-right: 10px;
      }
    }
  }
  .status__content {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
  .status__foot {
    display: flex;
    flex-direction: column;
    .status__add-card {
      color: #ccc;
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 10px;
      svg {
        margin-right: 10px;
      }
    }
  }
}
</style>
