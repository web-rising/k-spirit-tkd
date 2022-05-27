<template>
<div>
  <h1>Updates & News</h1>
  <div v-for="update in this.updates" :key="update" class="update-container">
    <h2 id="title">{{update.items[0].title[0].text}}</h2>
      <h3 id="update" class="date">{{update.items[0].updatetime}}</h3>
      <h3 id="upload" class="date">{{update.items[0].uploadtime}}</h3>
      <div class="description-container" v-for="paragraph in update.items[0].description" :key="paragraph">
        <p id="description">{{paragraph.text}}</p>
      </div>
  </div>
</div>  
</template>

<script>
import limitQuery from '../prismicHelpers/updates.js'

export default {
  data() {
    return {
		  updates: limitQuery(10)
    }
  }
}
</script>

<style scoped>

</style>