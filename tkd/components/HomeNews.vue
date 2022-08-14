<template>
  <div>
    <div class="carousel w-full">
      <!-- <div v-for="(item, index) in items" :key="item.items[0].updatetime" :id="`item${index + 1}`" class="carousel-item w-full justify-center">
        <nuxt-link to="/" class="card w-5/6 bg-base-100 shadow-xl">
          <div class="card-body">
            <h4>{{ item.items[0].title[0].text }}</h4>
            <h5>{{ item.items[0].updatetime }}</h5>
          </div>
        </nuxt-link>
      </div> -->
      <div v-for="(item, index) in items" :key="item.updatetime" :id="`item${index + 1}`" class="card w-full carousel-item bg-base-100 shadow-xl">
        <nuxt-link to="/updates" class="card-body flex flex-col items-center">
          <h4 class="font-semibold">{{ item.title[0].text }}</h4>
          <div class="badge badge-lg overflow-hidden">{{ item.updatetime }}</div>
        </nuxt-link>
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
      <a href="#item4" class="btn btn-xs">4</a>
      <a href="#item5" class="btn btn-xs">5</a>
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