<template>
  <div>
    <h1>yo</h1>
   <h1>{{$prismic.asText(homepage.data.name)}}</h1>
	<h2>{{$prismic.asText(homepage.data.slogan)}}</h2>
  </div>
</template>

<script>
import {useSinglePrismicDocument} from '@/prismicio/vue'

const {data: homepage} = useSinglePrismicDocument('homepage')

export default {
 
}
</script>

<style>

</style>