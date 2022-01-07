<template>
  <div :id="id" class="status" @dragover.prevent @drop.prevent="drop">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    drop: (e) => {
      const cardId = e.dataTransfer.getData('card_id')
      const card = document.getElementById(cardId)
      card.style.display = 'block'
      e.target.appendChild(card)
    }
  }
}
</script>

<style>
.status {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 500px;
  /* background-color: rgb(226, 226, 226); */
}
</style>
