<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <control-bar :positions="optionsList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, watchEffect } from 'vue'
import ControlBar from '@/components/ControlBar.vue'
import { AddedInputs, PositionItem } from '@/models/ControlBar'

export default defineComponent({
  name: 'Home',
  components: {
    ControlBar
  },
  setup () {
    const addItem: AddedInputs = reactive({ id: 0, amount: 0 })
    const optionsList: PositionItem[] = [
      { id: 1, name: 'Продукты' },
      { id: 2, name: 'Аптека' },
      { id: 3, name: 'Одежда' },
      { id: 4, name: 'Транспорт' }
    ]
    watchEffect(() => {
      console.log(addItem.id, addItem.amount)
    })
    provide('options', optionsList)
    provide('addItem', addItem)
    return { optionsList, addItem }
  }
})
</script>

<style lang="scss">

</style>
