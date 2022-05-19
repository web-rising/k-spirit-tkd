<template>
<div>
  <div class="class-container">
      <prismic-image :field="data.class1" id="image"></prismic-image>
      <prismic-text :field="data.classname" id="name"></prismic-text>
      <prismic-text :field="data.agegroup" id="age"></prismic-text>
      <prismic-text :field="data.classtimes" id="times"></prismic-text>
      <prismic-text :field="data.classdescription" id="description"></prismic-text>
  </div>
</div>
</template>

<script>
console.log('im being referenced')

export default {
    name: "Class",
    data() {
        return
    },
    props: {
        data: Object
    }
}
</script>

<style>
#image {
  width: 100%
}

</style>