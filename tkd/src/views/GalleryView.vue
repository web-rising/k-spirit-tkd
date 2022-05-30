<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: about } = useSinglePrismicDocument("about");
</script>

<template>
  <h1>Gallery</h1>
</template>

<script>
import limitImages from '../prismicHelpers/gallery'

export default {
  data() {
    return {
      images: limitImages(12)
    }
  }

}
</script>

<style>

</style>