<template>
  <div class="add-card">
    <div class="select-status">
      <div class="status" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      selectedStatus: '',
      cardName: ''
    }
  }
}
</script>

<style></style>
