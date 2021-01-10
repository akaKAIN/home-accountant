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
          v-for="option in options"
          :key="option.id"
          :value="option.id"
        >
          {{ option.name }}
        </option>
      </select>
      <input
        v-model="inputAmount"
        type="number"
        placeholder="Стоимость"
      >
      <button class="btn" @click="add">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, ref } from 'vue'
import { AddedInputs, PositionItem } from '@/models/ControlBar'

export default {
  name: 'ControlBar',
  setup () {
    const options: PositionItem[] | undefined = inject('options')
    const addItem: AddedInputs | undefined = inject('addItem')
    const selectedPosition = ref<number>(0)
    const inputAmount = ref<number>(10)
    const isEmptyInputs = () => !!(inputAmount.value && selectedPosition.value)
    const add = () => {
      if (isEmptyInputs()) {
        if (addItem) {
          addItem.id = selectedPosition.value
          addItem.amount = inputAmount.value
        }
      }
    }
    return { options, selectedPosition, inputAmount, add }
  }
}
</script>

<style scoped>

</style>
