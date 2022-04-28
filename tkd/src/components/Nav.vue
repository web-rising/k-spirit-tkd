<template>
    <div class="nav">
        <div class="logo">

        </div>
        <div class="burger">
            <img class="menu" src="../assets/menu.svg" alt="">
            <img class="close" src="../assets/close.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "nav"
}
</script>

<style scoped>
.nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.3rem;
    z-index: 2;
}
.logo {
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
    background-color: #fff;
    position: relative;
}

.burger {
    position: fixed;
    right: 1.3rem;
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    /* margin-left: 5rem; */
    overflow: hidden;
    cursor: pointer
}

.menu {
    position: absolute;
    height: 1.8rem;
    width: 1.8rem;
    /* display: none; */

}

.close {
    position: absolute;
    height: 2.2rem;
    width: 2.2rem;
    display: none;
}
</style>