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
import { defineComponent } from 'vue'
import ControlBar from '@/components/ControlBar.vue'
import { PositionItem } from '@/models/ControlBar'

export default defineComponent({
  name: 'Home',
  components: {
    ControlBar
  },
  setup () {
    const optionsList: PositionItem[] = [
      { id: 1, name: 'Продукты' },
      { id: 2, name: 'Аптека' },
      { id: 3, name: 'Одежда' },
      { id: 4, name: 'Транспорт' }
    ]
    return { optionsList }
  }
})
</script>

<style lang="scss">

</style>
