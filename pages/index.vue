<template>
  <div class="main">
    <status id="status_1">
      <card id="card_1" :draggable="true">
        Card One
      </card>
    </status>
    <status id="status_2">
      <card id="card_2" :draggable="true">
        Card Two
      </card>
    </status>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/Card.vue'
import Status from '~/components/Status.vue'

export default Vue.extend({
  components: { Status, Card }
})
</script>
<style>
* {
  box-sizing: border-box;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
