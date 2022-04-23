<template>
    <div class="footer">
        <div class="container">
            <div class="contact">
                <h5 class="email">{{$prismic.asText(contact.data.email)}}</h5>
                <h5 class="telephone">{{$prismic.asText(contact.data.number)}}</h5>
                <h5 class="address">{{$prismic.asText(contact.data.address)}}</h5>
            </div>
            <ul class="nav-list">
                <li>
                    <router-link to="/mission">Our Mission</router-link>
                </li>
                <li>
                    <router-link to="/team">Our Team</router-link>
                </li>
                <li>
                    <router-link to="/work">Our Work</router-link>                
                </li>
                <li>
                    <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=webrisingdev@gmail.com">Contact Us</a>
                </li>
            </ul>
            </div>
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script setup>
import { useSinglePrismicDocument } from "@prismicio/vue";

const { data: contact } = useSinglePrismicDocument("contact");

</script>
