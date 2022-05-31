<template>
<div class="container">
  <h2>{{this.classData.classname[0].text}} | Ages: {{this.classData.agegroup[0].text}}</h2>
  <div class="class-container">
      <prismic-image :field="this.classData.class1" id="image"></prismic-image>
      <div class="times">
      <p v-for="time in this.classData.classtimes" id="time" :key="time">{{time.text}}</p>
      </div>
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

<style scoped>

.container {
  margin-top: 4rem;
  padding: 1rem;
}

#image {
  width: 100%
}

.times {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}



</style>