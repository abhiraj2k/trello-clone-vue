<template>
  <div
    :id="id"
    class="card"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
    @dragend.prevent="dragStop"
  >
    <slot />
    <div class="close">
      <font-awesome-icon icon="times" @click="$emit('delete', id)" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dragStart: (e) => {
      e.dataTransfer.setData('card_id', e.target.id)
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      setTimeout(() => {
        e.target.style.display = 'none'
      }, 0)
    },
    dragStop: (e) => {
      e.target.style.display = 'flex'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-width: 300px;
  background-color: #fff;
  max-height: 50px;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
  cursor: pointer;
  margin: 10px 0;
}
</style>
