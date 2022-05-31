<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: classes } = useSinglePrismicDocument("classes");
</script>

<template>
<div class="container">
  <h2>Classes</h2>
  <div v-for="classData in classes.data.body[0].items" :key="classData" class="class-container">
      <div class="mask"></div>
      <router-link :to="{name: 'Class', params: {name: classData.classroute[0].text} }">
        <prismic-image :field="classData.class1" id="image"></prismic-image>
      </router-link>
      <prismic-text :field="classData.classname" id="name"></prismic-text>
      <h5> Ages: <prismic-text :field="classData.agegroup" id="age"></prismic-text></h5>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#image {
  width: 100%
}

.container {
  margin-top: 5rem;
}

h2 {
  margin-left: 1rem;
}

.class-container {
  position: relative;
  width: 100%;
	overflow: hidden;
  margin-bottom: 2rem;
  color: #fff;
}
.mask {
		position: absolute;
    overflow: hidden;
    height: 100%;
		z-index: -1;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.4);
}

#name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
}

</style>