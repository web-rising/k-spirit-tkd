<template>
    <div class="footer">
        <div class="container">
            <div class="contact">
                <h5 class="email">{{email}}</h5>
                <h5 class="telephone">{{telephone}}</h5>
                <h5 class="address">{{address}}</h5>
            </div>
            <ul class="nav-list">
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
                <li>
                    <router-link to="/schedule">Schedule</router-link>
                </li>
                <li>
                    <router-link to="/classes">Classes</router-link>                
                </li>
                <li>
                    <router-link to="/gallery">Gallery</router-link>                
                </li>
            </ul>
            </div>
        <h6 class="web-rising">Made with ❤️ by <a href="https://youtube.com" target="_blank">WebRising</a></h6>
        <h6 class="copyright">Copyright 2022 WebRising All Rights Reserved</h6>
    </div>
</template>

<script>
console.log('hey')
export default {
    name: "footer",
    props: {
        email: String,
        telephone: String,
        address: String
    }
}
</script>
