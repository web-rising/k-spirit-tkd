<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: about } = useSinglePrismicDocument("about");
</script>

<template>
<div class="container">
    <section class="master">
        <prismic-image :field="about.data.cho" id="cho-image"></prismic-image>
        <h1>Master Hyuk Jin Cho</h1>
        <prismic-text :field="about.data.mission" id="mission"></prismic-text>
        <h2>Why Taekwondo?</h2>
        <prismic-text :field="about.data.why" id="why"></prismic-text>
    </section>
</div>
</template>

<script>

</script>

<style>

</style>