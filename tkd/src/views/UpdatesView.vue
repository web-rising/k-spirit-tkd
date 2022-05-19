<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: updates } = useSinglePrismicDocument("updates");
</script>

<template>
<div>
    <!-- <div>{{updates.data.body}}</div> -->
     <div v-for="update in updates.data.body" :key="update" class="update-container">
        <prismic-text :field="update.items[0].title" id="title"></prismic-text>
        <!-- <prismic-text :field="update.items[0].uploadTime" id="upload-time"></prismic-text> -->
        <h3>{{$prismic.asDate(update.items[0].updatetime)}}</h3>
        <h3>{{update.items[0].uploadtime}}</h3>
        <prismic-text :field="update.items[0].description" id="description"></prismic-text>
  </div>
</div>  
</template>

<script>
export default {

}
</script>

<style scoped>

</style>