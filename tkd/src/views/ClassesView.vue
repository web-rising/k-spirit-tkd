<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: classes } = useSinglePrismicDocument("classes");
</script>

<template>
<div>
  <div v-for="classData in classes.data.body[0].items" :key="classData" class="class-container">
      <router-link :to="`/classes/${classData.classroute[0].text}`">
        <prismic-image :field="classData.class1" id="image"></prismic-image>
      </router-link>
      <prismic-text :field="classData.classname" id="name"></prismic-text>
      <prismic-text :field="classData.agegroup" id="age"></prismic-text>
      <prismic-text :field="classData.classtimes" id="times"></prismic-text>
      <prismic-text :field="classData.classdescription" id="description"></prismic-text>
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

</style>