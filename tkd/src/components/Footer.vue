<template>
    <div class="footer">
         <ul class="nav-list">
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
                <span class="nav-dot">&#x2022;</span>
                <li>
                    <router-link to="/classes">Classes</router-link>                
                </li>
                <span class="nav-dot">&#x2022;</span>
                <li>
                    <router-link to="/gallery">Gallery</router-link>                
                </li>
            </ul>
        <div class="social-container">
            <a class="social" :href="facebook" target="_blank">Facebook</a>
            <span class="social-dot">&#x2022;</span>
            <a class="social" :href="instagram" target="_blank">Instagram</a>
        </div>
        <div class="contact-container">
            <h5 class="contact">{{email}}</h5>
            <h5 class="contact">{{number}}</h5>
            <h5 class="contact">{{address}}</h5>
        </div>
            <h6 class="copyright">Copyright 2022 <a class="site" href="https://webrising.org" target="_blank">WebRising</a> All Rights Reserved</h6>
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
* {
    text-decoration: none;
    color: #fff
}

.nav-list {
    display: flex;
    flex-direction: row;
    /* justify-content: space-evenly; */
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
}

li {
    font-size: 1.5rem;
}

.nav-dot  {
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem
}

.footer {
    background-color: #151515;
    display: flex;
    flex-direction: column;
}

.contact {
    margin-top: 0.5rem;
    margin-left: 1rem;
}

.social-container {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    margin-left: 1rem;
}

.social-dot {
    font-size: 0.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem
}

.copyright {
    margin-top: 0.5rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
}

</style>