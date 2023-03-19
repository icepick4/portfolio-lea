<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
    <div class="flex flex-col h-screen">
        <Header />
        <div class="flex justify-center items-center pt-28">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>
