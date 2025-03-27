<template>
  <div class="container">
    <h1>Mitch's Product Information</h1>
    <button @click="goToPopulate">ADD NEW ITEM</button>
    <button @click="search">SEARCH</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const goToPopulate = () => {
      router.push('/populate');
    };

    const search = () => {
        router.push('/search_for_products');
    };

    return { goToPopulate, search };
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 10px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
}
</style>
