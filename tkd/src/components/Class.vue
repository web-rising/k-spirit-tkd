<template>
<div>
  <div class="class-container">
      <prismic-image :field="this.classData.class1" id="image"></prismic-image>
      <prismic-text :field="this.classData.classname" id="name"></prismic-text>
      <prismic-text :field="this.classData.agegroup" id="age"></prismic-text>
      <prismic-text :field="this.classData.classtimes" id="times"></prismic-text>
      <prismic-text :field="this.classData.classdescription" id="description"></prismic-text>
  </div>
</div>
</template>

<script>
import classes from '../prismicHelpers/classes'

export default {
    name: "Class",
    props: {
        name: {type: String, required: true}
    },
    data() {
      return {
        classData: classes.filter(e => {
          return e.classroute[0].text === this.name
        })[0]
      }
    }
}
</script>

<style>
#image {
  width: 100%
}

</style>