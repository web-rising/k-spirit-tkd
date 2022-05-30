<template>
    <div class="gallery">
      <div class="sub-container">
        <img class="image" :src="`${image}`" alt="" />
        <h5 class="description">{{ description }}</h5>
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
.image{
  height: 9rem;
  transition: all 0.3s;
  overflow: hidden;
}
.sub-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;
  justify-content: center;
  margin: 1rem;
  overflow: hidden;
  position: relative;
}

.sub-container:hover .description{
  opacity: 1;
}

.sub-container:hover .image{
  transform: scale(1.1);
  opacity: 0.25;
  /* filter: grayscale(50%); */
  box-shadow: 0 1.5rem 1rem #212121;
  outline: 1rem solid #fbc02d;
}

.description{
  position: absolute;
  top: 50%;
  transition: all 0.3s;
  opacity: 0;
  font-size: 0.5rem;
}


</style>