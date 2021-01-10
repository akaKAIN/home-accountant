<template>
  <div class="control-block">
    <div class="new-amount-wrapper">
      <select v-model="selectedPosition">
        <option
          disabled
          value=""
        >
          Выберите позицию
        </option>
        <option
          v-for="position in positions"
          :key="position.id"
          :value="position.id"
        >
          {{ position.name }}
        </option>
      </select>
      <input
        v-model="inputAmount"
        type="number"
        placeholder="Стоимость"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { AddedInputs, PositionItem } from '@/models/ControlBar'

export default {
  name: 'ControlBar',
  props: {
    positions: {
      type: Array<PositionItem>(),
      default: []
    }
  },
  setup (_, context) {
    const selectedPosition = ref<number>(0)
    const inputAmount = ref<number>(10)
    const isEmptyInputs = () => !!(inputAmount.value && selectedPosition.value)
    const addToExpenses = () => {
      if (isEmptyInputs()) {
        const data: AddedInputs = {
          id: selectedPosition.value,
          amount: inputAmount.value
        }
        context.emit('addToExpenses', data)
      }
    }
    return { selectedPosition, inputAmount, addToExpenses }
  }
}
</script>

<style scoped>

</style>
