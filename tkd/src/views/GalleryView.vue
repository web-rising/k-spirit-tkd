<template>
<div class="container">
  <h1 class="header">Gallery</h1>
  <div class="gallery">
    <Gallery
            v-for="(item, index) in images"
            :key="index"
            :image="item.image.url"
            :description="item.description[0].text"
          />
          </div>

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

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.gallery{
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  /* margin: 3rem; */
  width: 70%;
  /* height: 200vh; */
}
</style>