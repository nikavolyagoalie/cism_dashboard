<template>
  <div class="home">
    <div>
      <p>Поиск документа</p>
      <input v-model="storeCounter.searchQuery" />
    </div>
    <div>
      <p>Результаты поиска</p>
      <!-- <div v-show="storeCounter.sortedAndSearchedPosts.length > 0 && storeCounter.searchQuery">{{ storeCounter.searchQuery && storeCounter.sortedAndSearchedPosts }}</div> -->
      <div v-if="storeCounter.sortedAndSearchedPosts.length > 0 && storeCounter.searchQuery.length > 0">
        <div v-for="item of storeCounter.sortedAndSearchedPosts" :key="item" @click="storeCounter.changeItem(item.id)">
          <div class="text">{{ item.name }}</div>
          <img v-if="item.image" :src="item.image"/>
          <img v-else src="../../public/no_photo.png"/>
        </div>
      </div>
      <div v-else>Ничего не найдено</div>
    </div>
    <div class="document" v-show="storeCounter.showDoc">
      <div class="delete" @click="storeCounter.deleteDoc(storeCounter.idDoc)">X</div>
      <img v-if="storeCounter.image" :src="storeCounter.image"/>
      <img v-else src="../../public/no_photo.png"/>
      <div class="document__desc">
        <h2>{{ storeCounter.name }}</h2>
        <p>{{ storeCounter.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { onMounted } from "@vue/runtime-core";

const storeCounter = useCounterStore();

const { fetchDocs } = storeCounter;

onMounted(() => {
  fetchDocs();
});
</script>

<style scoped>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 60px;
  margin: 10px;
}

.document {
  display: flex;
}

.document__desc {
  display: flex;
}
</style>
