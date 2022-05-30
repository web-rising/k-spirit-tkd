<template>
  <div class="gallery">
    <div class="pic">
      <!-- <img :src="require(`@/assets/clients/${image}`)" alt="" /> -->
      <div class="mask">
        <img :src="`${image}`" alt="" />
        <h5>{{ description }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {};
  },
  methods: {},
  props: {
    image: String,
    description: String,
  },
};
</script>

<style scoped>

</style>