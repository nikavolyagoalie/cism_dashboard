<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="storeCounter.incCount">{{ storeCounter.count }}</button>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/stores/counter'

  const storeCounter = useCounterStore()
</script>
