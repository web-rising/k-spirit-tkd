<template>
  <div class="carousel carousel-center w-full h-72 md:h-80 lg:h-[75vh]">
    <div v-for="(image, index) in images" :key="image.image.url" :id="`slide${index + 1}`" class="carousel-item relative w-5/6 md:w-1/2">
      <img :src="image.image.url" class="w-full object-cover" @click="$router.push('/gallery')" />
      <!-- <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a :href="`#slide${index === 0 ? images.length : index}`" class="btn btn-circle">❮</a>
        <a :href="`#slide${index === images.length - 1 ? 1 : index + 2}`" class="btn btn-circle">❯</a>
      </div> -->
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