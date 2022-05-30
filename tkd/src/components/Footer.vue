<template>
    <div class="footer">
         <!-- <ul class="nav-list">
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
            </ul> -->
        <div class="contact">
            <div class="logo"></div>
            <h5>K-Spirit Taekwondo</h5>
            <p>{{address}}</p>
            <p>{{number}}</p>
            <p>{{email}}</p>
        </div>
        <div class="social">
            <a :href="facebook" target="_blank">Facebook</a>
            <span class="dot">&#x2022;</span>
            <a :href="instagram" target="_blank">Instagram</a>
        </div>
        <div class="webrising">
            <p>Made with &lt;3 by <a class="site" href="https://webrising.org" target="_blank">WebRising</a></p>
            <h6 class="copyright">Copyright 2022 Webrising All Rights Reserved</h6>
        </div>
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
.footer {
    text-decoration: none;
    height: 45vh;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.contact {
    margin-top: 1rem;
}
.logo {
	height: 4rem;
	width: 4rem;
	border-radius: 2rem;
	background-color: #fff;
	position: relative;
    margin: 1rem 1.5rem;
}

/* .nav-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
    margin-left: 1rem;
}

.nav-list li {
    font-size: 1.5rem;
}

.nav-dot  {
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem
} */

.footer {
    background-color: #151515;
    display: flex;
    flex-direction: column;
}

.contact h5, p {
    margin: 0.6rem 1.5rem;
}

.social {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
}

.social a {
    text-decoration: none;
    color: #fff;
    font-family: 'Kumbh Sans', sans-serif;
}

.dot {
    font-size: 1rem;
    margin: 0 1rem;
    color: #fff;
}
.webrising {
    margin-bottom: 1.5rem;
}
.webrising a {
    text-decoration: none;
    color: #fff;
    font-family: 'Kumbh Sans', sans-serif;
}
.copyright {
    margin: 0 1.5rem;
    color: #a1a1a1;
}
</style>