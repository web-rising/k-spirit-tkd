<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: contact } = useSinglePrismicDocument("contact");
</script>

<template>
    <div class="footer">
        <div class="container">
            <div class="contact">
                <!-- <h5 class="email">{{$prismic.asText(contact.data.email)}}</h5>
                <h5 class="telephone">{{$prismic.asText(contact.data.number)}}</h5>
                <h5 class="address">{{$prismic.asText(contact.data.address)}}</h5> -->
                <h1>hello</h1>
            </div>
            <ul class="nav-list">
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
                <li>
                    <router-link to="/schedule">Schedule</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>                
                </li>
            </ul>
            </div>
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script>
console.log('hey')
export default {
    name: "Footer",
}
</script>
