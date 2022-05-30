<template>
<div class="container">
  <h1>Gallery</h1>
    <Gallery
            v-for="(item, index) in images"
            :key="index"
            :image="item.image.url"
            :description="item.description[0].text"
          />
          <!-- <p>{{images}}</p> -->
          <!-- <li v-for="(item, index) in images" :key="index">{{item.image.url}}</li> -->
</div>
  
  
</template>

<script>
import limitImages from '../prismicHelpers/gallery'
import Gallery from '../components/Gallery.vue'

export default {
  components:{
    Gallery
  },
  data() {
    return {
      images: limitImages(12)
    }
  }
}
</script>

<style>

</style>