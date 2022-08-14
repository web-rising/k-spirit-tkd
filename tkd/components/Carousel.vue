<template>
  <!-- <div class="carousel carousel-center w-full h-72 md:h-80 lg:h-[75vh]">
    <div v-for="(image, index) in images" :key="image.image.url" :id="`slide${index + 1}`" class="carousel-item relative w-5/6 md:w-1/2">
      <img :src="image.image.url" class="w-full object-cover" @click="$router.push('/gallery')" />
    </div>
  </div> -->
  <div class="carousel carousel-center w-full p-4 space-x-4 bg-white rounded-box h-72 md:h-80 lg:h-[75vh]">
    <div v-for="(image, index) in images" :key="image.image.url" :id="`slide${index + 1}`" class="carousel-item relative w-5/6 md:w-1/2">
      <img :src="image.image.url" class="w-full object-cover" @click="$router.push('/gallery')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: Array,
  },
}
</script>

<style>
</style>