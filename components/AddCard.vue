<template>
  <div class="add-card">
    <div class="add">
      Add Card
      <font-awesome-icon icon="times" @click="handleCloseClick" />
    </div>
    <form @submit.prevent="handleFormSubmit">
      <input type="text" name="name" placeholder="Name">
      <button type="submit">
        Submit
      </button>
    </form>
    <div class="status_id">
      Status id - {{ statusId }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['statusId'],
  data () {
    return {
      cardName: ''
    }
  },
  computed: {
    ...mapGetters({ status: 'status/getStatus' })
  },
  methods: {
    handleFormSubmit (e) {
      if (e.target.name.value === '') {
        return
      }
      this.$emit('selectedName', e.target.name.value)
      e.target.name.value = ''
    },
    handleCloseClick () {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="scss" scoped>
.add-card {
  .add {
    font-weight: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 5px;
    svg {
      cursor: pointer;
    }
  }
  margin: 10px;
  input {
    border: none;
    padding: 5px 10px;
    font-size: 18px;
    background-color: rgb(235, 235, 235);
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: rgb(174, 0, 255);
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 6px;
    &:focus {
      outline: none;
    }
  }
}
</style>
