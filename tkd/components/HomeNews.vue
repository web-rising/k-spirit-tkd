<template>
  <div class="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box">
    <div v-for="(item, index) in items" :key="item.updatetime" :id="`item${index + 1}`" class="card w-1/2 carousel-item shadow-lg">
      <nuxt-link to="/updates" class="card-body flex flex-col items-center">
        <h4 class="font-semibold">{{ item.title[0].text }}</h4>
        <div class="badge badge-lg overflow-hidden">{{ item.updatetime }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
}
</script>

<style>
</style>