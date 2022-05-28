<template>
    <div class="footer">
        <div class="container">
            <div class="contact">
                <h5 class="email">{{email}}</h5>
                <h5 class="number">{{number}}</h5>
                <h5 class="address">{{address}}</h5>
                <a class="facebook" :href="facebook" target="_blank">Facebook</a>
                <a class="instagram" :href="instagram" target="_blank">Instagram</a>
            </div>
            <ul class="nav-list">
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
                <li>
                    <router-link to="/classes">Classes</router-link>                
                </li>
                <li>
                    <router-link to="/gallery">Gallery</router-link>                
                </li>
            </ul>
            </div>
        <h6 class="web-rising">Made with ❤️ by <a href="https://webrising.org" target="_blank">WebRising</a></h6>
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props: {
        email: String,
        number: String,
        address: String,
        facebook: String,
        instagram: String
    }
}
</script>

<style scoped>

</style>