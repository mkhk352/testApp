<template>
    <nav class="nav">
        <div class="container">
            <router-link to="/category/front-end" exact>
            <img src="http://bit.ly/vue-img"
                alt="Vue SPA"/>
            </router-link>
            <router-link :to="{name: 'category', params:{id: 'front-end'}}" class="nav-item is-tab" >
              Home
            </router-link>
            <router-link :to="{name: 'category', params:{id: 'mobile'}}" class="nav-item is-tab">
              Mobile
            </router-link>
            <router-link to="/login"  class="nav-item is-tab">
            Login
            </router-link>
        </div>
    </nav>
</template>
