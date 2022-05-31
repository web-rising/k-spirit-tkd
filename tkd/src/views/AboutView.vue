<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: about } = useSinglePrismicDocument("about");
</script>

<template>
<div class="container">
    <div class="master">
        <prismic-image :field="about.data.cho" id="cho-image"></prismic-image>
        <h3>Master Hyuk Jin Cho</h3>
        <prismic-text :field="about.data.mission" id="mission"></prismic-text>
    </div>
        <h2>Why Taekwondo?</h2>
        <prismic-text :field="about.data.why" id="why"></prismic-text>
</div>
</template>

<script>

</script>

<style scoped>

.container {
  margin-top: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.master {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

#cho-image {
    width: 60%;
    /* background-color: black; */
    border-radius: 50%;
}

#mission {
    margin-top: 0.5rem;
}


</style>