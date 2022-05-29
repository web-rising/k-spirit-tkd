<template>
  <h1>gallery</h1>
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